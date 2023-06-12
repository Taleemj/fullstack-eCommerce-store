import React from "react";
import Product from "./Product";

const ProductsFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52">
      {products.slice(0, 8).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <img
        src="https://links.papareact.com/dyz"
        className="md:col-span-4"
        alt=""
      />
      <div className="md:col-span-2">
        {products.slice(8, 9).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products.slice(9, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsFeed;
