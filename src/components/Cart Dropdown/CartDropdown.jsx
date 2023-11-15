import "./CartDropdown.scss";
import React from "react";
import CartItem from "../Cart item/CartItem";
import { CartContext } from "../context/NavbarContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 
const CartDropdown = () => {
  const Navigate= useNavigate();
  const { cartItems } = useContext(CartContext);
  console.log(cartItems, "cartitem data");
  const handleclickTocheckout = () => {
    Navigate("/checkout")
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItems={item} />
        ))}
      </div>
      <button onClick={handleclickTocheckout}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropdown;
