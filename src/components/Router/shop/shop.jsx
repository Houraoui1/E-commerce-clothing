import React, { Fragment, useContext, useState } from "react";
import {Routes , Route} from 'react-router-dom'


import "./Shop.scss";
import CategoryPreview from "../../category-preview/category-preview.component";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category";

const Shop = () => {

  return (
  <Routes>
    <Route index element={<CategoriesPreview/>}   />
    <Route path=":category" element={<Category/>}   />

  </Routes>
  )
};

export default Shop;
