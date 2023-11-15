import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";

export const CategoriesContext = createContext(null); // Initialize with null or an initial value.

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState([]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      try {
        const categoryMap = await getCategoriesAndDocuments();
        console.log(categoryMap, "data from CategoriesProvider");
        setCategoriesMap(categoryMap);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
