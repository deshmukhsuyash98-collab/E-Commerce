import React from "react";
import { useState, useEffect, useRef } from "react";
import Fragrance from "../Assets/Fragrance.jpg";
import { Link } from "react-router-dom";
import furniture from "../Assets/furniture.png";
import Sunglasses from "../Assets/Sunglasses.png";
import Watches from "../Assets/Watches.png";
import ChevronRight from "../Icons/ChevronRight";
import ChevronLeft from "../Icons/ChevronLeft";
let images = [
  { image: furniture, category: "furniture" },
  { image: Sunglasses, category: "sunglasses" },
  { image: Watches, category: "mens-watches" },
  { image: Fragrance, category: "sunglasses" },
];

const Caurosel = () => {
  const [index, setIndex] = useState(1);
  const timerRef = useRef(null);
  function handleRight(e) {
    e.stopPropagation();
    setIndex((index + 1) % images.length);
  }
  function handleLeft(e) {
    e.stopPropagation();
    setIndex((index - 1 + images.length) % images.length);
  }
  function clearTimer() {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }
  function addTimer() {
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        return (prev + 1) % images.length;
      });
    }, 3000);
  }
  useEffect(() => {
    addTimer();
     return ()=> clearTimer();
  }, []);
  function MouseEnter(){
   clearTimer();
  }
  function MouseLeave(){
   addTimer();
  }
  return (
    <div 
    onMouseEnter={MouseEnter}
    onMouseLeave={MouseLeave}
    className="relative border-solid border-amber-100">
      <div
        onClick={(e) => handleRight(e)}
        className="absolute left-0 top-43 h-8vh w-15"
      >
        <ChevronRight fill="#FFFFFF" />
      </div>
      <div
        onClick={(e) => handleLeft(e)}
        className=" absolute right-0 top-43 h-8vh w-15"
      >
        <ChevronLeft fill="#FFFFFF" />
      </div>
      <Link
        to={`/category/${images[index].category}`}
        className="pt-2 pl-1 pr-1"
      >
        <img className="h-100 w-full" src={images[index].image}></img>
      </Link>
    </div>
  );
};
export default Caurosel;
