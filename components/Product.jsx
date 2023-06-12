"use client";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyFormat from "react-currency-format";

const Product = ({ product }) => {
  const [rating, setrating] = useState(
    Math.floor(Math.random() * (5 - 1 + 1)) + 1
  );
  return (
    <div className="relative flex flex-col z-30 bg-white my-5 mx-2 p-8">
      <p className="absolute top-2 right-2 italic text-gray-400">
        {product.category}
      </p>
      <Image
        src={product.image}
        alt="image"
        objectFit="contain"
        width={200}
        height={200}
        className="mx-auto"
      />
      <h1 className="my-3">{product.title}</h1>
      <div className="flex text-yellow-400 my-2">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <div className="mb-5">
        <CurrencyFormat value={product.price} prefix="Ush" />
      </div>
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
