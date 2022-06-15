import React from "react";

export default function Footer({ totalAmount, resetBtn }) {
  const paynowBtn = () => {
    alert("Payment Gatway coming soon.....");
  };
  return (
    <div className="row fixed-bottom p-4">
      <button className="col-3 btn btn-danger" onClick={resetBtn}>
        Reset
      </button>
      <div className="col-6 bg-dark text-white">
        <p className="text-center">{totalAmount}</p>
      </div>
      <button className="col-3 btn btn-primary" onClick={paynowBtn}>
        Pay Now
      </button>
    </div>
  );
}
