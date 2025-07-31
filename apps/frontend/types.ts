// types.ts
export type Product = {
  id: number;
  name: string;
  type: string;
  place: string;
  price: number;
  image: string;
  // You can remove location if you're not using it
  // OR keep it and fill it properly
  location?: string; 
};
