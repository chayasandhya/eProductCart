import React from "react";
import "../Styles/Cart.css";

function Cart({ cartItems }) {
  const itemsList = () => {
    let ary = Array.from(cartItems);
    let ary2 = ary.map((each) => {
      return {
        ...each[0],
        qty: each[1],
      };
    });
    return ary2;
  };

  return (
    <div className="cart_container">
      <h1 className="cart_title">Cart</h1>
      <table className="table">
        <thead>
          <th>Item</th>
          <th>Quantity</th>
        </thead>
        {itemsList().map((each, i) => {
          return (
            <tbody key={i}>
              <td>{each.display_name}</td>
              <td>{each.qty}</td>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Cart;
