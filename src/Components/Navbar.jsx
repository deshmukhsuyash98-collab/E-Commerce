import React from "react";
import CartIcon from "../Icons/CartIcon";
import SearchBar from "./Searchbar";
import DarkMode from "../Icons/DarkMode";
import LightMode from "../Icons/LightMode";
import { useContext } from "react";
import { ThemeContext } from "../Store/ThemeProvider";
const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);
  const light =
    "size-12 w-full bg-blue-300 mt-0.5 items-center flex justify-between pr-3 pl-3";
  const dark =
    "size-12 w-full bg-gray-700 mt-0.5 items-center flex justify-between pr-3 pl-3";
  return (
    <div className={theme == "light" ? light : dark}>
      <p className="font-semibold text-xl text-white ">CartNova</p>
      <SearchBar />
      <div className="w-1/4 flex justify-around">
        <p className=" text-[#F5F5F5] text-m font-semibold">Home</p>
        <p className=" text-white text-m font-semibold">Wishlist</p>
        <p className=" text-white text-m font-semibold">More</p>
        <div onClick={()=>{
          theme=="light" ? setTheme("dark"):setTheme("light")
        }}>
        <label className="flex cursor-pointer gap-2">
          <LightMode height="20" width="20" fill={theme=="dark"? "#FFFFFF":"currentcolor"} />
          <input
            type="checkbox"
            checked={theme=="dark"}
            value="synthwave"
            className="toggle theme-controller"
          />
          <DarkMode height="20" width="20" fill={theme=="dark"? "#FFFFFF":"currentcolor"} />
        </label>
        </div>
        <CartIcon fill="#F5F5F5" height="25px" />
      </div>
    </div>
  );
};
export default Navbar;
