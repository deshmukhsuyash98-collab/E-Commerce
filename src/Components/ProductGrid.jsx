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
     <div className="grid grid-cols-3 gap-4 mt-1 ml-2 mr-2 border-2 border-solid h-1/4">{
        products.map((pObj)=>{
               return <ProductCard key={pObj.id} data={pObj}/>
        })
     }
     </div>
    )
}
export default ProductGrid;