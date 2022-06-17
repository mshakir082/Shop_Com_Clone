import React from "react";
import { useNavigate } from "react-router";
import "../Style/AdressAndCheckout.css";

function Address() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="mainAddress">
        <form className="addressForm">
          <h1>Enter Your Address</h1>
          <p>Street Address</p>
          <input
            type="text"
            className="name"
            placeholder="Enter your street address"
          />
          <p>City</p>
          <input
            type="text"
            className="cardNumber"
            placeholder="Enter your city"
          />
          <p>State</p>
          <input type="text" className="CVV" placeholder="Enter your state" />
          <p>Country</p>
          <input type="text" className="expDate" placeholder="Enter Country" />
          <input
            type="submit"
            id="submit"
            onClick={() => {
              navigate("/checkout");
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Address;