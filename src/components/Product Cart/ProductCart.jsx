import React, { useContext } from "react";
import Button from "../Button/Button";
import "./ProductCart.scss";

import { CartContext } from "../context/NavbarContext";


const ProductCart = ({ product }) => {

  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext)
  const handleAddProductToCart = ()=>{
    addItemToCart(product)
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      
        <button onClick={handleAddProductToCart} buttonType="inverted" >Add to card</button>
        
      
    </div>
  );
};

export default ProductCart;
