"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { MenuItem } from "@/types/menuItems";

// ============================================
// Helper function to transform Prisma item to MenuItem
// ============================================
function transformMenuItem(item: {
  id: number;
  name: string;
  content: string | null;
  category: string;
  price: unknown;
  image: string | null;
  discount: string | null;
  freeDelivery: boolean;
  createdAt: Date;
}): MenuItem {
  return {
    id: item.id,
    name: item.name,
    content: item.content ?? "",
    category: item.category,
    price: Number(item.price),
    image: item.image ?? "/placeholder-food.jpg",
    discount: item.discount ?? undefined,
    freeDelivery: item.freeDelivery,
    createdAt: item.createdAt,
  };
}

// ============================================
// READ Operations
// ============================================

/**
 * Fetch all menu items from the database
 */
export async function getMenuItems(): Promise<MenuItem[]> {
  const items = await prisma.menuItem.findMany({
    orderBy: { createdAt: "desc" },
  });

  return items.map(transformMenuItem);
}

/**
 * Fetch menu items filtered by category
 */
export async function getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
  const items = await prisma.menuItem.findMany({
    where: { category },
    orderBy: { createdAt: "desc" },
  });

  return items.map(transformMenuItem);
}

/**
 * Fetch a single menu item by ID
 */
export async function getMenuItemById(id: number): Promise<MenuItem | null> {
  const item = await prisma.menuItem.findUnique({
    where: { id },
  });

  if (!item) return null;

  return transformMenuItem(item);
}

/**
 * Get all unique categories from menu items
 */
export async function getMenuCategories(): Promise<string[]> {
  const categories = await prisma.menuItem.findMany({
    select: { category: true },
    distinct: ["category"],
  });

  return categories.map((c) => c.category);
}

// ============================================
// CREATE/UPDATE/DELETE Operations
// ============================================

export interface MenuItemInput {
  name: string;
  content: string;
  category: string;
  price: number;
  image: string;
  discount?: string;
  freeDelivery: boolean;
}

export interface ActionResult {
  success: boolean;
  message: string;
  data?: MenuItem;
}

/**
 * Create a new menu item
 */
export async function createMenuItem(input: MenuItemInput): Promise<ActionResult> {
  try {
    const item = await prisma.menuItem.create({
      data: {
        name: input.name,
        content: input.content,
        category: input.category,
        price: input.price,
        image: input.image,
        discount: input.discount || null,
        freeDelivery: input.freeDelivery,
      },
    });

    // Revalidate the menu pages to show the new item
    revalidatePath("/menu");
    revalidatePath("/admin/items");

    return {
      success: true,
      message: "Menu item created successfully",
      data: transformMenuItem(item),
    };
  } catch (error) {
    console.error("Error creating menu item:", error);
    return {
      success: false,
      message: "Failed to create menu item. Please try again.",
    };
  }
}

/**
 * Update an existing menu item
 */
export async function updateMenuItem(id: number, input: MenuItemInput): Promise<ActionResult> {
  try {
    const item = await prisma.menuItem.update({
      where: { id },
      data: {
        name: input.name,
        content: input.content,
        category: input.category,
        price: input.price,
        image: input.image,
        discount: input.discount || null,
        freeDelivery: input.freeDelivery,
      },
    });

    // Revalidate the menu pages to show the updated item
    revalidatePath("/menu");
    revalidatePath("/admin/items");
    revalidatePath(`/admin/items/update-item/${id}`);

    return {
      success: true,
      message: "Menu item updated successfully",
      data: transformMenuItem(item),
    };
  } catch (error) {
    console.error("Error updating menu item:", error);
    return {
      success: false,
      message: "Failed to update menu item. Please try again.",
    };
  }
}

/**
 * Delete a menu item
 */
export async function deleteMenuItem(id: number): Promise<ActionResult> {
  try {
    await prisma.menuItem.delete({
      where: { id },
    });

    // Revalidate the menu pages
    revalidatePath("/menu");
    revalidatePath("/admin/items");

    return {
      success: true,
      message: "Menu item deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting menu item:", error);
    return {
      success: false,
      message: "Failed to delete menu item. Please try again.",
    };
  }
}
