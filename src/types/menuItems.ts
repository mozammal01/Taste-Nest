/**
 * MenuItem type matching Prisma schema
 * Used for both server and client-side operations
 */
export interface MenuItem {
  id: number;
  name: string;
  content: string;
  category: string;
  price: number;
  image: string;
  discount?: string;
  freeDelivery: boolean;
  createdAt: Date;
}

/**
 * @deprecated Use MenuItem instead
 */
export type MenuItems = MenuItem;
