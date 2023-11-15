import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./Cart.scss";

import { CartContext } from "../context/NavbarContext";
import { useContext, useRef } from "react";

const Cart = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);


  const toggleCartopen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCartopen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default Cart;
