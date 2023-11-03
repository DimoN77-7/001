
export interface Advert {
  id: number;
  // user: User;
  name: string;
  description: string;
  isActive: boolean;
  imagesIds: string[];
  cost: number;
  email: string;
  phone: string;
  location: string;
  created: string;
  createdAt: Date;
  // category: Category;
}
