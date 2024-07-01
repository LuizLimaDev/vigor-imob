"use client";

import { createContext, useState } from "react";

export type Tproperties = {
  _id: string;
  name: string;
  category: string[];
  rooms: number;
  bathrooms: number;
  area: number;
  garage: number;
  description: string;
  price: number;
  rent: number;
  image: string[];
  taxe: number;
  city: string;
  state: string;
};

export type PropertiesFilterContextType = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filteredProperties: Tproperties[];
  setFilteredProperties: React.Dispatch<React.SetStateAction<Tproperties[]>>;
};

export const propertiesFilterContext = createContext<
  PropertiesFilterContextType | undefined
>(undefined);

const PropertiesFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [filter, setFilter] = useState<string>("Todos");
  const [filteredProperties, setFilteredProperties] = useState<Tproperties[]>(
    []
  );

  return (
    <propertiesFilterContext.Provider
      value={{ filter, setFilter, filteredProperties, setFilteredProperties }}
    >
      {children}
    </propertiesFilterContext.Provider>
  );
};

export default PropertiesFilterProvider;
