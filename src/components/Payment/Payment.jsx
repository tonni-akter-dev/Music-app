import React from "react";
import "./Payment.css";
const Payment = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 ">
        <div className="payment_1">
          <h3 className="text_design">Basic</h3>
          <h1 className="payment_number">$0.00</h1>
          <button class="btn btn-neutral get_started_btn">Get started</button>
        </div>
        <div className="payment_1">
          <h3 className="text_design1">Premium</h3>
          <h1 className="payment_number1">$12.00</h1>
          <button class="btn get_started_btn1">Get started</button>
        </div>
      </div>
    </>
  );
};

export default Payment;
