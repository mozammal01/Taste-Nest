"use client";
import SigninLeftSide from "./leftSide";
import SigninRightSide from "./rightSide";

export default function Signin() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <SigninLeftSide />

      {/* Right Side - Image */}
      <SigninRightSide />
    </div>
  );
}
