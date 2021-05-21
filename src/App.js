import React, { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Cart from "./Components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState([]);
  const [cartItems, setCartItems] = useState(new Map());

  function addSearchKeys(searchKeys) {
    let searchState = [...searchKeys];
    setSearch(searchState);
  }

  function addCartItems(item) {
    let itemMap = new Map(cartItems);
    if (itemMap.has(item)) {
      let qty = itemMap.get(item);
      itemMap.set(item, qty + 1);
    } else {
      itemMap.set(item, 1);
    }
    setCartItems(itemMap);
  }

  return (
    <div className="App">
      <Nav
        setShowCart={setShowCart}
        showCart={showCart}
        search={search}
        addSearchKeys={addSearchKeys}
      ></Nav>
      <div onClick={() => setShowCart(false)}>
        {showCart && <Cart cartItems={cartItems}></Cart>}
        <Main addCartItems={addCartItems} search={search}></Main>
      </div>
    </div>
  );
}

export default App;
