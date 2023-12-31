import React from "react";
import { Link } from "react-router-dom";
import Header from "./../components/Header";

const PaymentScreen = () => {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login2 col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input className="form-check-input" type="radio" value="PayPal" />
              <label className="form-check-label">Gcash</label>
              
            </div>
            <div className="radio-container">
              <input className="form-check-input" type="radio" value="PayPal" />
              <label className="form-check-label">Cash On Delivery</label>
              
            </div>
            <p> <lighter>Note: If you choose through Gcash, kindly take a screenshot of your receipt and send it to us after placing your order. Thank you! </lighter> <strong>09704691847</strong> </p>
          </div>

          <button type="submit">
            <Link to="/placeorder" className="text-white">
              Continue
            </Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
