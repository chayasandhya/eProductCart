import React, { useState, useEffect } from "react";
import "../Styles/Main.css";

function Main({ addCartItems, search }) {
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  function sendItemsToCart(item) {
    addCartItems(item);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    function searchItems() {
      let filteredAry = items.filter((item) => {
        if (item.display_name.toLowerCase().includes(search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      return filteredAry;
    }
    setSearchedItems(searchItems());
  }, [search]);

  async function fetchData() {
    let res = await fetch("https://www.cubyt.io/data/categories");
    let data = await res.json();
    setItems(data);
    setSearchedItems(data);
    console.log(data);
  }

  function gridItem(item, keyId) {
    let image = item.image_uri
      ? item.image_uri
      : "https://react.semantic-ui.com/images/wireframe/image.png";
    return (
      <div key={keyId} className="items_card">
        <div className="items_descriptions">
          <div className="item_content">
            <img src={image} alt="products" />
            <h4>{item.display_name}</h4>
          </div>
          <div className="item_info">
            <p>{item.category_name}</p>
            <p>specs</p>
          </div>
        </div>
        <div className="items_action">
          <button className="btn" onClick={() => sendItemsToCart(item)}>
            Add
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="items_card_contanier">
      {searchedItems.map((each, i) => {
        return <div className="grid_items">{gridItem(each, i)} </div>;
      })}
    </div>
  );
}

export default Main;
