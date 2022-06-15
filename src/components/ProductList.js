import React from "react";
import Product from "./Product";

function ProductList({ products, incrementBtn, decrementBtn, removeItem }) {
  return (
    <div>
      {products.length > 0 ? (
        products.map((product, i) => {
          return (
            <Product
              product={product}
              key={i}
              index={i}
              incrementBtn={incrementBtn}
              decrementBtn={decrementBtn}
              removeItem={removeItem}
            />
          );
        })
      ) : (
        <h1>Add Product to your Cart!</h1>
      )}
    </div>
  );
}

export default ProductList;
