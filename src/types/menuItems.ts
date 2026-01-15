export interface MenuItems {
  id: number;
  name: string;
  content: string;
  category: string;
  price: number;
  image: string;
  discount?: string;
  freeDelivery?: boolean;
}
