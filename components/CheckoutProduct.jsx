import Image from "next/image";
import { use, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/redux/slice/basketslice";

const CheckoutProduct = ({ item }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    dispatch(addToBasket(item));
  };
  const removeItemFromBasket = () => {
    let id = item.id;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={item.image}
        alt="image"
        className=""
        width={200}
        height={200}
      />
      <div className="col-span-3 md:mx-5 mx-1">
        <p>{item.title}</p>
        <div className="flex text-yellow-400 my-2">
          {Array(item.rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5" />
            ))}
        </div>
        <p className="text-sm my-2 line-clamp-3">{item.description}</p>
        <p>UGX {item.price}</p>
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove to basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
