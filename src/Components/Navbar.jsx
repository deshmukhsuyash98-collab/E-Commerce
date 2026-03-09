import React from "react";
import CartIcon from "../Icons/CartIcon";
import SearchBar from "./Searchbar";
const Navbar = () => {
  return (
    <div className="size-12 w-full bg-blue-300 mt-0.5 items-center flex justify-between pr-3 pl-3">
      <p className="font-semibold text-xl text-white ">CartNova</p>
       <SearchBar/>
      <div className="w-1/4 flex justify-around">
        <p className=" text-[#F5F5F5] text-m font-semibold">Home</p>
        <p className=" text-white text-m font-semibold">Wishlist</p>
        <p className=" text-white text-m font-semibold">More</p>
        <CartIcon fill="#F5F5F5" height="25px"/>
      </div>
    </div>
  );
};
export default Navbar;
