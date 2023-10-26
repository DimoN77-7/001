export interface Product {
  id: number;
  name: string;
  location: string;
  createdAt: Date;
  isActive: boolean;
  imagesIds: [];
  cost: number;
}

/* интерфейс для продуктов с assets (то есть не с бэка, а для моих продуктов) 
export interface Product {
  id: number;
  titleImage: string;
  images: string[];
  title: string;
  cost: number;
  adress: string;
  date: Date;
  phoneNumber: string;
  description: string;
}

*/
