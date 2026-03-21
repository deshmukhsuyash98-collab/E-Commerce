import React from "react";
import {useState,useEffect,useRef} from "react";
import { Link } from "react-router-dom";
const SearchBar=()=>{
    const[query,setQuery]=useState("");
    const[searchSuggestion,setSearchSuggestion]=useState([]);
    const timer=useRef(null);
    async function getData(){
        const data=query.trim();
        if(data.length==0) return;
       const apiData= await fetch(`https://dummyjson.com/products/search?q=${query}`);
       const jsonData=await apiData.json();
    //    console.log(jsonData);
       setSearchSuggestion(jsonData.products);
    }
    
    useEffect(()=>{
       if(timer.current){
        clearTimeout(timer.current);
       }
       timer.current=setTimeout(getData,300);
    },[query])

    let Suggestions=query.trim().length>0 && searchSuggestion.length>0;
  return(
  <div className="bg-white w-2/4 h-3/4 rounded-3xl items-center z-25">
    <input className="bg-white w-full h-full  rounded-3xl focus:outline-none border-none pl-5 pr-5 items-center"  onChange={(e)=>{
        setQuery(e.target.value);
    }} placeholder="Search product ...." type="text" ></input>
    {Suggestions && <div className="bg-gray-200 mt-1 rounded-xl pt-2 pb-2 z-15">
        {searchSuggestion.map((pObj)=>{
            return(
                <Link to={`/products/${pObj.id}`} className="rounded-lg bg-[#F9FAFB] mb-2 mt-1 ml-3 mr-3 pr-2 pl-2 border-1 flex items-center gap-6">
                    <img src={pObj.thumbnail} className="h-5 w-5 bg-white"/>
                    <p className="text-[#111827] pr-3 pt-2">{pObj.title}</p>
                </Link>
            )
        })}
        </div>}
  </div>
  )
}
export default SearchBar;