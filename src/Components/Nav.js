import React, { useState, useEffect } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import "../Styles/Nav.css";
import "../Styles/Cart.css";
import AdvancedSearch from "./AdvancedSearch";

const useStyle = makeStyles({
  colorPrimary: {
    color: "white",
    cursor: "pointer",
  },
});

function Nav({ setShowCart, showCart, search, addSearchKeys }) {
  const [searchKey, setSearchKey] = useState("");
  const [filterKeys, setFilterKeys] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    const searchKeys = [...filterKeys];
    if (searchKey != "") {
      searchKeys.unshift(searchKey);
    }
    addSearchKeys(searchKeys);
  }, [searchKey, filterKeys]);

  return (
    <div className="container_header">
      <div className="nav_container">
        <h3>Fluke Products</h3>
        <input
          onChange={(e) => setSearchKey(e.target.value)}
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
      <AdvancedSearch
        search={search}
        addSearchKeys={setFilterKeys}
      ></AdvancedSearch>
    </div>
  );
}

export default Nav;
