import React, { Fragment, useContext, useState } from "react";
import { CategoriesContext } from "../../context/CategoriesContext"; // Corrected the import name
import ProductCart from "../../Product Cart/ProductCart";

import "./categories-preview-styles.scss";
import CategoryPreview from "../../category-preview/category-preview.component";

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext); // Corrected context name
//   const loadingArr = Object.keys(categoriesMap)
//   .map((title) => {
//     return categoriesMap[title].slice(0, 4).map((product) => product);
//   });

//   console.log(loadingArr, "hello ");
//   return (
//     <Fragment>
//       {Object.keys(categoriesMap).map((title) => (
//         <Fragment>
//           <h2>{title}</h2>
//           <div className="products-container">
//             {categoriesMap[title].slice(0, 4).map((product) => (
//               <ProductCart key={product.id} product={product} />
//             ))}
//           </div>
//         </Fragment>
//       ))}
//     </Fragment>
//   );
// };
const  CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreview;
