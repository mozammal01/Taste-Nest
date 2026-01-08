import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, role, password, confirmPassword } = body;

    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    if (password !== confirmPassword) {
      return NextResponse.json({ error: "Passwords do not match" }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User with this email already exists" }, { status: 409 });
    }

    // Hash the password with bcrypt (12 rounds)
    const hashedPassword = await bcrypt.hash(password, 12);

    // Validate role (only allow 'user' or 'admin')
    const validRoles = ["user", "admin"];
    const userRole = validRoles.includes(role) ? role : "user";

    // Create new user in database
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const newUser = await (prisma.user.create as any)({
      data: {
        name: fullName,
        email: email.toLowerCase(),
        password: hashedPassword,
        phone: phone || null,
        role: userRole,
      },
    });

    console.log("✅ User registered in database:", { id: newUser.id, email: newUser.email, name: newUser.name, role: newUser.role });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    // Return more detailed error for debugging
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: `Something went wrong: ${errorMessage}` }, { status: 500 });
  }
}
