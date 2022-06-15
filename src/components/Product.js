import React from "react";
import { FaTrash } from "react-icons/fa";
import { ImPlus, ImMinus } from "react-icons/im";

export default function Product({
  product,
  index,
  incrementBtn,
  decrementBtn,
  removeItem,
}) {
  return (
    <div className="row mt-2">
      <div className="col-5">
        <h2>
          {product.name}{" "}
          <span className="badge bg-secondary text-warning">
            ₹{product.price}
          </span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              decrementBtn(index);
            }}
            disabled={product.quantity === 0 ? true : false}
          >
            <ImMinus />
          </button>
          <button type="button" className="btn btn-warning">
            {product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              incrementBtn(index);
            }}
          >
            <ImPlus />
          </button>
        </div>
      </div>
      <div className="col-2">₹{product.quantity * product.price}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            removeItem(index);
          }}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
