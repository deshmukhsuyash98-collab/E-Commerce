import React, { useEffect } from "react";
import { useState} from "react";
import ProductCard from "./ProductCard";
import { ThemeContext } from "../Store/ThemeProvider";
import { useContext } from "react";
const ProductGrid=()=>{
    const[products,setProducts]=useState([]);
    const[currentpage,setCurrentPage]=useState(1);
    const[Error,setError]=useState(false);
    const{theme,setTheme}=useContext(ThemeContext)
    async function getData(){
      try{
         const limit=15;
         const skip=(currentpage-1)*limit;
        const productData= await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
        const jsonData=await productData.json();
        console.log(jsonData);
        setProducts(jsonData.products);
      }catch(err){
         setError(true);

      }
    }
    useEffect(()=>{
       getData();
    },[currentpage])
    const check="join-item btn bg-blue-500 btn-square";
    const uncheck="join-item btn btn-square";
    const light="grid grid-cols-4 gap-4 mt-1 ml-2 mr-2 mb-2 bg-blue-50";
    const dark="grid grid-cols-4 gap-4 mt-1 ml-2 mr-2 mb-2 bg-gray-200"
    return(
     <div className="mb-2">
        <div className={theme=="light"?light:dark}>{
        products.map((pObj)=>{
               return <ProductCard key={pObj.id} data={pObj}/>
        })
     }
     </div>
     <div className={theme=="light"?"mb-2 flex justify-center bg-blue-50":"mb-2 flex justify-center bg-gray-200"}>
        <div className={theme=="light"?"join  grid-cols-4 text-center":"join  grid-cols-4 text-center bg-gray-300"}>
  <input
  onClick={()=>{
     setCurrentPage(1)
  }}
    className={currentpage==1 ? check:uncheck}
    type="radio"
    name="options"
    aria-label="1"
     />
  <input 
  onClick={()=>{
     setCurrentPage(2)
  }}
  className={currentpage==2 ? check:uncheck} type="radio" name="options" aria-label="2" />
  <input 
  onClick={()=>{
     setCurrentPage(3)
  }}
  className={currentpage==3 ? check:uncheck} type="radio" name="options" aria-label="3" />
  <input 
  onClick={()=>{
     setCurrentPage(4)
  }}
  className={currentpage==4 ? check:uncheck} type="radio" name="options" aria-label="4" />
</div>
     </div>
     </div>
    )
}
export default ProductGrid;