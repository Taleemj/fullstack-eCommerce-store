"use client";
import Header from "@/components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectedItem } from "@/redux/slice/basketslice";
import CheckoutProduct from "@/components/CheckoutProduct";
import { useSession } from "next-auth/react";

const Page = () => {
  const items = useSelector(selectedItem);
  const { data: session, status } = useSession();
  const addSubtotal = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }
    return total.toFixed(2);
  };
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-6xl mx-auto">
        <div className="flex-grow md:m-5 m-2 shadow-sm">
          <Image
            src={"https://links.papareact.com/ikj"}
            width={1020}
            height={200}
            alt="image"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-5">
              {items.length == 0
                ? "Your shopping basket is empty"
                : "Your shopping basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct item={item} key={i} />
            ))}
          </div>
          {console.log(items)}
        </div>

        <div className="flex-grow bg-white md:m-5 m-2">
          {items.length > 0 && (
            <div className="flex flex-col p-2">
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :{" "}
                <span className="font-bold">UGX {addSubtotal(items)}</span>
              </h2>
              <button
                className={`button ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 my-2 cursor-not-allowed"
                }`}
                disabled={!session}
              >
                {!session ? "sign in to checkout" : "Proceed to checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Page;
