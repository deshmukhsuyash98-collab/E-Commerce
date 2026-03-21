import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
const Category=()=>{
    const{category}=useParams();
    const[categoryData,setCategoryData]=useState([]);
    async function getData(){
      const data=await fetch(`https://dummyjson.com/products/category/${category}`)
      const CategoryData=await data.json(); 
      console.log(CategoryData)
      setCategoryData(CategoryData.products);
    }
    useEffect(()=>{
        getData();
    },[])
    return(
  <div>
    <Navbar/>
   <div className="grid grid-cols-4 gap-4 mt-1 ml-2 mr-2 mb-2 bg-blue-50">
    {
        categoryData.map((pObj) => (
            <ProductCard key={pObj.id} data={pObj} />
          ))
    }
   </div>
  </div>
    )
}
export default Category;