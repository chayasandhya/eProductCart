import React, { useState, useEffect } from "react";
import "../Styles/Main.css";

function Main({ addCartItems, search }) {
  const [items, setItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);

  /**
   * Fetch Data and populate onto
   * Items and SearchItems
   * SearchItems by default will have all the data available unless queried
   */

  /**
   * On component load fetchData
   */
  useEffect(() => {
    async function fetchData() {
      let res = await fetch("https://www.cubyt.io/data/categories");
      let data = await res.json();
      setItems(data);
      setSearchedItems(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    /**
     * Function to search the items based on the filter
     * as well as the search input field on the Nav bar
     */
    function searchItems() {
      let filteredAry = [];
      if (search.length == 0) {
        filteredAry = items;
      } else {
        let searchedSet = new Set();
        for (let eachSearch of search) {
          items.forEach((item) => {
            if (
              item.display_name.toLowerCase().includes(eachSearch.toLowerCase())
            ) {
              searchedSet.add(item);
            }
          });
        }
        filteredAry.push(...Array.from(searchedSet));
      }
      return filteredAry;
    }
    setSearchedItems(searchItems());
  }, [search]);

  /**
   * GridItem() is a template generator for the items to be placed on a grid template
   */
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
          <button className="btn" onClick={() => addCartItems(item)}>
            Add
          </button>
        </div>
      </div>
    );
  }
  /**
   * JSX for the component
   */
  return (
    <div className="items_card_contanier">
      {searchedItems.map((each, i) => {
        return <div className="grid_items">{gridItem(each, i)} </div>;
      })}
    </div>
  );
}

export default Main;
