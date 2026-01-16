"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import type { CartItem, CartItemWithDetails } from "@/types/cartItem";

function transformCartItem(item: { id: number; userId: string; menuItemId: number; quantity: number; createdAt: Date }): CartItem {
  return {
    id: item.id,
    userId: item.userId,
    menuItemId: item.menuItemId,
    quantity: item.quantity,
    createdAt: item.createdAt,
  };
}

// ============================================
// READ Operations
// ============================================

/**
 * Fetch all cart items from the database
 */
export async function getCartItems(): Promise<CartItem[]> {
  const items = await prisma.cart.findMany({
    orderBy: { createdAt: "desc" },
  });

  return items.map(transformCartItem);
}

/**
 * Fetch cart items by user ID
 */
export async function getCartItemsByUserId(userId: string): Promise<CartItem[]> {
  const items = await prisma.cart.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  return items.map(transformCartItem);
}

/**
 * Fetch cart items with menu item details by user ID
 */
export async function getCartItemsWithDetails(userId: string): Promise<CartItemWithDetails[]> {
  const cartItems = await prisma.cart.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  // Fetch menu items for each cart item
  const menuItemIds = cartItems.map((item) => item.menuItemId);
  const menuItems = await prisma.menuItem.findMany({
    where: { id: { in: menuItemIds } },
  });

  // Create a map for quick lookup
  const menuItemMap = new Map(menuItems.map((item) => [item.id, item]));

  // Combine cart items with menu item details
  return cartItems
    .map((cartItem) => {
      const menuItem = menuItemMap.get(cartItem.menuItemId);
      if (!menuItem) return null;

      return {
        id: cartItem.id,
        userId: cartItem.userId,
        menuItemId: cartItem.menuItemId,
        quantity: cartItem.quantity,
        createdAt: cartItem.createdAt,
        menuItem: {
          id: menuItem.id,
          name: menuItem.name,
          content: menuItem.content ?? "",
          category: menuItem.category,
          price: Number(menuItem.price),
          image: menuItem.image ?? "/placeholder-food.jpg",
          discount: menuItem.discount,
          freeDelivery: menuItem.freeDelivery,
        },
      };
    })
    .filter((item): item is CartItemWithDetails => item !== null);
}

/**
 * Get cart item count for a user
 */
export async function getCartItemCount(userId: string): Promise<number> {
  const count = await prisma.cart.count({
    where: { userId },
  });
  return count;
}

/**
 * Fetch a single menu item by ID
 */
export async function getCartItemById(id: number): Promise<CartItem | null> {
  const item = await prisma.cart.findUnique({
    where: { id },
  });

  if (!item) return null;

  return transformCartItem(item);
}

/**
 * Get all unique users from cart items
 */
export async function getCartUsers(): Promise<string[]> {
  const users = await prisma.cart.findMany({
    select: { userId: true },
    distinct: ["userId"],
  });

  return users.map((u) => u.userId);
}
// ============================================
// CREATE/UPDATE/DELETE Operations
// ============================================

export interface CartItemInput {
  userId: string;
  menuItemId: number;
  quantity: number;
}

export interface ActionResult {
  success: boolean;
  message: string;
  data?: CartItem;
}

/**
 * Create a new cart item
 */
export async function createCartItem(input: CartItemInput): Promise<ActionResult> {
  try {
    const item = await prisma.cart.create({
      data: {
        userId: input.userId,
        menuItemId: input.menuItemId,
        quantity: input.quantity,
      },
    });

    // Revalidate the menu pages to show the new item
    revalidatePath("/cart");

    return {
      success: true,
      message: "Cart item created successfully",
      data: transformCartItem(item),
    };
  } catch (error) {
    console.error("Error creating cart item:", error);
    return {
      success: false,
      message: "Failed to create cart item. Please try again.",
    };
  }
}

/**
 * Update an existing cart item
 */
export async function updateCartItem(id: number, input: CartItemInput): Promise<ActionResult> {
  try {
    const item = await prisma.cart.update({
      where: { id },
      data: {
        userId: input.userId,
        menuItemId: input.menuItemId,
        quantity: input.quantity,
      },
    });

    // Revalidate the cart page
    revalidatePath("/cart");

    return {
      success: true,
      message: "Cart item updated successfully",
      data: transformCartItem(item),
    };
  } catch (error) {
    console.error("Error updating cart item:", error);
    return {
      success: false,
      message: "Failed to update cart item. Please try again.",
    };
  }
}

/**
 * Update cart item quantity
 */
export async function updateCartItemQuantity(id: number, quantity: number): Promise<ActionResult> {
  try {
    if (quantity < 1) {
      return {
        success: false,
        message: "Quantity must be at least 1",
      };
    }

    const item = await prisma.cart.update({
      where: { id },
      data: { quantity },
    });

    revalidatePath("/cart");

    return {
      success: true,
      message: "Quantity updated successfully",
      data: transformCartItem(item),
    };
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    return {
      success: false,
      message: "Failed to update quantity. Please try again.",
    };
  }
}

/**
 * Clear all cart items for a user
 */
export async function clearCart(userId: string): Promise<ActionResult> {
  try {
    await prisma.cart.deleteMany({
      where: { userId },
    });

    revalidatePath("/cart");

    return {
      success: true,
      message: "Cart cleared successfully",
    };
  } catch (error) {
    console.error("Error clearing cart:", error);
    return {
      success: false,
      message: "Failed to clear cart. Please try again.",
    };
  }
}

/**
 * Delete a menu item
 */
export async function deleteCartItem(id: number): Promise<ActionResult> {
  try {
    await prisma.cart.delete({
      where: { id },
    });

    // Revalidate the menu pages
    revalidatePath("/cart");

    return {
      success: true,
      message: "Cart item deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting cart item:", error);
    return {
      success: false,
      message: "Failed to delete cart item. Please try again.",
    };
  }
}
