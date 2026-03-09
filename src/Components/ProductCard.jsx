import React from "react";
import Rating from "../Icons/Rating";
import Wishlist from "../Icons/Wishlist";
const ProductCard=({data})=>{
    const{title,category,price,rating,thumbnail,brand}=data;
    return(
     <div className="relative border-2 border-solid">
      <div className="absolute top-2 right-8 bg-white h-[30px] w-[30px]"><Wishlist fill="Red"/></div>
      <img className="h-70 w-full "src={thumbnail} alt="" />
      <p>{category}</p>
      <p>{brand}</p>
      <p>{price}</p>
      <div className="flex justify-between align-middle">
        <div className="flex"><Rating fill="#FFD700" height="16px" width="16px"/> 
        <p className="align-middle">{rating}</p>
        </div>
        <button>Add to Cart</button>
      </div>
      <button>Buy Now</button>
     </div>
    )
}
export default ProductCard;