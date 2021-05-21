import React from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import "../Styles/Nav.css";
import "../Styles/Cart.css";

const useStyle = makeStyles({
  colorPrimary: {
    color: "white",
    cursor: "pointer",
  },
});

function Nav({ setShowCart, showCart, setSearch }) {
  const classes = useStyle();
  return (
    <div className="container_header">
      <div className="nav_container">
        <h3>Fluke Products</h3>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="inp_search"
          type="text"
          placeholder="search products...✍ "
        ></input>
        <div className="cart_profile">
          <ShoppingCartIcon
            onClick={() => setShowCart(!showCart)}
            fontSize="large"
            color="disabled"
            className={classes.colorPrimary}
          ></ShoppingCartIcon>
          <AccountCircleIcon
            fontSize="large"
            className={classes.colorPrimary}
          ></AccountCircleIcon>
        </div>
      </div>
    </div>
  );
}

export default Nav;
