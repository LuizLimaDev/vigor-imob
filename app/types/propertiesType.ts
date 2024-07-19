export type Tproperties = {
  _id: string;
  name: string;
  title: string;
  category: string[];
  rooms: string;
  bathrooms: string;
  area: string;
  garage: string;
  description: string;
  price: string;
  rent: string;
  heroVideo?: string;
  image: string[];
  video: string;
  taxe: string;
  city: string;
  state: string;
  allotment?: string;
};

export type TpropertiesPost = {
  _id?: string;
  name?: string;
  title?: string;
  category?: string;
  rooms?: string;
  bathrooms?: string;
  area?: string;
  garage?: string;
  description?: string;
  price?: string;
  rent?: string;
  image?: string;
  taxe?: string;
  city?: string;
  state?: string;
  allotment?: string;
};
