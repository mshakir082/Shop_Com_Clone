import React from "react";
import { useNavigate } from "react-router";
import "../Style/AdressAndCheckout.css";

function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="mainAddress">
      <form className="addressForm">
        <h1>Complete Payment</h1>
        <p>Name On Card</p>
        <input type="text" className="name" placeholder="Enter your name" />
        <p>Card Number</p>
        <input
          type="number"
          className="cardNumber"
          placeholder="Enter your card number (123)"
        />
        <p>CVV</p>
        <input
          type="number"
          className="CVV"
          placeholder="Enter your CVV (123)"
        />
        <p>Expiry Date</p>
        <input
          type="text"
          className="expDate"
          placeholder="Enter expiry date (12/25)"
        />
        <input
          type="submit"
          id="submit"
          onClick={() => {
            navigate("/thankyou");
          }}
        />
      </form>
    </div>
  );
}

export default Checkout;