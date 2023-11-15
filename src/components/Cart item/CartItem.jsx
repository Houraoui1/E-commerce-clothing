import "./CartItem.scss";

import React from "react";

const CartItem = ({ cartItems }) => {
  const { name, quantity, imageUrl,price } = cartItems;
  
  return (
  <div className="cart-item-container">
    <img src={imageUrl} alt={`${name}`}/>
    <div className="item-details">
    <span className="name">{name}</span>
    <span className="price">{quantity}x ${price}</span>
    </div>
    
    </div>)
};

export default CartItem;
