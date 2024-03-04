/* eslint-disable no-unused-vars */
import { useState } from "react"
import Divider from "./Divider"


const SeasonSpecials = () => {
    const[fruits,setFruits]=useState([
        {
            id:7,
            image:"/public/7.jpeg",
            name:"Orange",
            price:100
        },
        {
            id:1,
            image:"/public/1.jpeg",
            name:"Green Grapes",
            price:100
        },
        {
            id:6,
            image:"/public/6.jpeg",
            name:"Lemon",
            price:100
        },
    ])
  return (
   <section className="w-6/6 mx-auto my-10"  id="season">
    <Divider title={"Season Specials"}/>
    <div className=" w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-16 my-10 p-10">
        {
            fruits?.map(fruit=>{
                return(
                    <div key={fruit.id} className="rounded-lg overflow-hidden shadow-xl group transform hover:scale-110 duration-100 relative">
                       <div > <img src={fruit.image} className=" w-full h-52 object-cover"/></div>
                       <div className="flex flex-col items-center my-1 py-1 space-y-1" >
                        <span className="font-body text-slate-500">{fruit.name}</span>
                        <span  className="font-body text-slate-500">&#x20B9;{fruit.price}</span>
                        <span  className="font-body uppercase text-lime-400 text-xs invisible group-hover:visible">Add to Cart</span>
                       </div>
                       <span className="absolute top-3 right-3 bg-sky-300 text-white border-sky-300 p-1 rounded-lg text-sm">1% off</span>
                    </div>
                )
            })
        }
    </div>
   </section>
  )
}

export default SeasonSpecials
