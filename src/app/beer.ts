export interface Beer {
  id: number;
  name: string;
  type: string;
  brewery: string;
  alcohol: number;
  ibu: number;
  description: string;
  image?: string;
  rating: number;
  country: string;
  price?: number;
  availability?: 'available' | 'limited' | 'out-of-stock';
  brewingDate?: Date;
  tags?: string[];
}
