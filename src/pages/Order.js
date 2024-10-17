import React from "react";
import "./Order.css";
import OrderPhoto from "../pictures/order.jpg";

function Order() {
  return (
    <>
      <div id="order">
        <div id="orderWrapper">
          <img className="orderPhoto" src={OrderPhoto} alt={OrderPhoto} />
          <h1 className="orderText">PORUČI</h1>
          <h1 className="nowText">SADA!</h1>
        </div>
      </div>
    </>
  );
}

export default Order;
