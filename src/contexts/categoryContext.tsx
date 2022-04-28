import React, { useState, createContext, useContext, useEffect } from "react";
import { getCategories } from "services";
import { useQuiz } from "./quizContext";
import { CategoryContextType, CategoryType } from "./types";

const CatgoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);
  const { setLoader } = useQuiz();

  useEffect(() => {
    setLoader(true);
    async function getCategoriesFromService() {
      const response = await getCategories();
      setCategories(response);
      setLoader(false);
    }
    getCategoriesFromService();
    // eslint-disable-next-line
  }, []);
  return (
    <CatgoryContext.Provider value={{ categories }}>
      {children}
    </CatgoryContext.Provider>
  );
};

const useCategory = () => useContext(CatgoryContext);

export { CategoryProvider, useCategory };
