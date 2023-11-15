import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CategoriesContext } from "../../context/CategoriesContext";
import ProductCart from "../../Product Cart/ProductCart";
import "./category-styles.scss"
const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

  return (
    <>
        
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products && 
          products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
