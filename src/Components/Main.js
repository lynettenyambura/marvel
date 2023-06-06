import React from "react"
import { Card } from "./Card"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
export const Main = () => {
  const [url,setUrl]=useState("https://gateway.marvel.com:443/v1/public/characters?apikey=a2ae83fab31bf4e64bd0a5b8905e75f0")
  const [item,setItem]=useState();
  const [search,setSearch]=useState("");
  useEffect(()=>{
    const fetch=async()=>{
      const res=await axios.get(url)
      setItem(res.data.data.results);
    }
    fetch();
  },[url])
  
  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartWith=${search}&ts=1&apikey=a2ae83fab31bf4e64bd0a5b8905e75f0`)
  }

  return (
    <>
        <div className="header">
            <div className="bg">
                <img src="./Images/bg.png" alt="" />
            </div>
            <div className="search-bar">
                <img src="./Images/logo.jpg" alt="logo" />
                <input type="search" placeholder='Search Here'
                 className='search'
                 onChange={e=>setSearch(e.target.value)}
                 onKeyPress={searchMarvel}/>
            </div>
        </div>
       <div className="content">
         
        {
          (!item)?<p>Not Found</p>:<Card data={item}/>
        }
       </div>
    </>
  )
}
