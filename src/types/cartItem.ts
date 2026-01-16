export interface CartItem {
  id: number;
  userId: string;
  menuItemId: number;
  quantity: number;
  createdAt: Date;
}

export interface CartItemWithDetails extends CartItem {
  menuItem: {
    id: number;
    name: string;
    content: string;
    category: string;
    price: number;
    image: string;
    discount: string | null;
    freeDelivery: boolean;
  };
}
