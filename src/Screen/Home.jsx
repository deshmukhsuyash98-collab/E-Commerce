import React from "react";
import Navbar from "../Components/Navbar";
import ProductGrid from "../Components/ProductGrid";
import ProductCard from "../Components/ProductCard";
import Caurosel from "../Components/Caurosel";
const Home=()=>{
    return(
     <div>
        <Navbar/>
        <Caurosel/>
        <ProductGrid/>
     </div>
    )
}
export default Home;