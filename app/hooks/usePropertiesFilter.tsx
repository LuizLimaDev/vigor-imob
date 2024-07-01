"use client";

import { useCallback, useContext, useEffect } from "react";
import { propertiesFilterContext } from "../context/propertiesFilterContext";

const usePropertiesFilter = () => {
  const context = useContext(propertiesFilterContext);
  if (!context) {
    throw new Error("PropertiesFilterProvider não declarado");
  }

  const { filter, setFilter, filteredProperties, setFilteredProperties } =
    context;

  const getFilteredProperties = useCallback(
    async (filter: string) => {
      const res = await fetch(
        `https://king-prawn-app-vxkkv.ondigitalocean.app/api/property?category=${filter}`
      );
      const data = await res.json();
      setFilteredProperties(data);
    },
    [setFilteredProperties]
  );

  useEffect(() => {
    getFilteredProperties(filter);
  }, [getFilteredProperties, filter]);

  async function changeFilter(newFilter: string) {
    setFilter(newFilter);
  }

  return {
    filteredProperties,
    changeFilter,
  };
};

export default usePropertiesFilter;
