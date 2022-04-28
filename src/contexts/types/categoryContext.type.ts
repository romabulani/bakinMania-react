export type CategoryType = {
  _id: string;
  categoryName: string;
  img: {
    altText: string;
    src: string;
  };
  description: string;
};
export type CategoryContextType = {
  categories: Array<CategoryType> | [];
};
