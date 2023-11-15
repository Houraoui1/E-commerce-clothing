import { Fragment, useContext, useRef } from "react";
import { Outlet, Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../../utils/firebase/Firebase";
import { CartContext } from "../../context/NavbarContext";

import "./Navbar.scss";
import CartIcon from "../../cart icon/Cart";
import CartDropdown from "../../Cart Dropdown/CartDropdown";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link
              className="nav-link"
              onClick={signOutUser}
              to="/authentification"
            >
              Sign Out
            </Link>
          ) : (
            <Link className="nav-link" to="/authentification">
              Sign in
            </Link>
          )}
          
          <CartIcon />
          <div>{isCartOpen && <CartDropdown />}</div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navbar;
