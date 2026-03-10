import React, { useEffect } from "react";
import { useState} from "react";
import ProductCard from "./ProductCard";
const ProductGrid=()=>{
    const[products,setProducts]=useState([]);
    async function getData(){
        const productData= await fetch(`https://dummyjson.com/products`)
        const jsonData=await productData.json();
        console.log(jsonData);
        setProducts(jsonData.products);
    }
    useEffect(()=>{
       getData();
    },[])
    return(
     <div className="mb-2">
        <div className="grid grid-cols-4 gap-4 mt-1 ml-2 mr-2 mb-2 bg-blue-50">{
        products.map((pObj)=>{
               return <ProductCard key={pObj.id} data={pObj}/>
        })
     }
     </div>
     <div className="mb-2 ">
        <div className="join  grid-cols-4 text-center">
  <input
    className="join-item btn btn-square"
    type="radio"
    name="options"
    aria-label="1"
    checked="checked" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
     </div>
     </div>
    )
}
export default ProductGrid;