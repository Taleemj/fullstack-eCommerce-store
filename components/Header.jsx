"use client";
import Image from "next/image";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { selectedItem } from "@/redux/slice/basketslice";
import { useSelector } from "react-redux";

const Header = () => {
  const { data: session, status } = useSession();
  const items = useSelector(selectedItem);
  return (
    <header className="w-full">
      <div className="flex align-center flex-wrap bg-amazon_blue p-1 flex-grow py-2">
        {/* logo */}
        <div className="mr-2 flex flex-grow text-white font-bold text-xl mb-3 md:mb-0 md:text-3xl sm:flex-grow-0">
          <Link href={"/"}>
            <h1>thestore</h1>
            <div className="border-b-yellow-500 border-b-2" />
          </Link>
        </div>
        {/* search  */}
        <div className="hidden mx-4 sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            name="search"
            id=""
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* rigth */}
        <div className="text-white flex items-center text-xs space-x-4 md:space-x-6 md:mx-5 mx-1 whitespace-nowrap">
          <div onClick={() => signIn()} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign in"}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center text-black font-bold rounded-full">
              {items.length}
            </span>
            <Link className="flex z-99" href="/checkout">
              <ShoppingCartIcon className="md:h-10 h-8" />
              <p className="font-extrabold hidden md:inline mt-2 ml-1 md:text-sm">
                Basket
              </p>
            </Link>
          </div>
          {session ? (
            <div className="link md:ml-5 ml-0" onClick={() => signOut()}>
              signout
            </div>
          ) : null}
        </div>
      </div>

      <div className="bg-amazon_blue-light flex items-center flex-wrap space-x-3 p-2 pl-6 text-white text-sm">
        <Link href="/">
          <p className="link flex items-center">
            <Bars3Icon className="h-6 mr-1" /> All
          </p>
        </Link>
        <p className="link">Electronics</p>
        <p className="link">Food & Grocery</p>
        <p className="link">Healthcare & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
