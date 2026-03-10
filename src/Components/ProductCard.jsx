import React from "react";
import Rating from "../Icons/Rating";
import Wishlist from "../Icons/Wishlist";
const ProductCard=({data})=>{
    const{title,category,price,rating,thumbnail,brand,discountPercentage}=data;

    const actualprice=Math.round(price-((price*discountPercentage)/100))/100;
    return(
      <div className="max-w-xs h-auto">
     <div className="relative border-2 border-solid  bg-[#EFEBE9] rounded-xl border-gray-300">
      <div className="absolute top-2.5 right-4 h-[30px] w-[30px]"><Wishlist fill="Red"/></div>
      <div className="bg-white flex justify-center">
        <img className="h-40 w-auto "src={thumbnail} alt="" />
      </div>
      <p className="font-semibold text-sm pl-2">{category}</p>
      <p className="font-semibold text-sm text-gray-400  pl-2">{brand}</p>
      <div className="flex gap-2">
        <p className="font-bold text-m text-green-300  pl-2">$ {actualprice}</p>
        <p className="font-semibold text-m text-red-400 line-through"> {price}</p>
        <p className=" text-sm">{discountPercentage} %off</p>
      </div>
      <div className="flex justify-between align-middle">
        <div className="flex gap-1">
          <p className="pt-1  pl-2"><Rating fill="#FFD700" height="16px" width="16px"/></p> 
        <p className="align-middle font-semibold text-sm">{rating}</p>
        </div>
      </div>
      <div className="flex justify-between align-middle mb-3">
        <button className="pl-5 pr-5 border-2 border-solid rounded-xl mt-2 ml-2 hover:bg-teal-200">Add to Cart</button>
         <button className=" pr-5 border-2 border-none rounded-xl mt-2 pl-5 mr-2 bg-amber-400 font-semibold border-lime-400 hover:bg-amber-300 ">Buy Now</button>
      </div>
     </div>
     </div>
    )
}
export default ProductCard;