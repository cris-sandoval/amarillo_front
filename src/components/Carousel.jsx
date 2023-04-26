import circleL from "../imagenes/circle-l.png";
import circleR from "../imagenes/circle-r.png";
import hadaImg from "../imagenes/hada-img.png";
import lufyImg from "../imagenes/lufi-img.png";
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../api";

export default function Carousel() {
 
  useEffect(
    ()=>{
      axios(apiUrl+'categories').then(res=>setCategories(res.data.categories)).catch(err=>console.log(err))
    },
    []
  )
  let [categories, setCategories] = useState([])
  console.log(categories);

  let [counter, setCounter] = useState(0)
  

  let sumar = () => {
    
    
    setCounter(counter+1);
    if(counter===categories.length-1){
      setCounter(0)
    }
  }
  let restar = () => {

    setCounter(counter-1);
    if(counter === 0){
      setCounter(categories.length-1)
    }

  }

  return (

    <div className="flex w-screen h-[40vh] justify-center content-center min-[320px]:text-center max-md:hidden ">
        <div  className="w-[92%] h-[28vh] mt-[3%] rounded flex " style={{backgroundColor:categories[counter]?.color}}>
        <div className=" w-[50%] h-full flex items-center justify-around">
            <img onClick={restar} className="w-[40px] h-auto lg:w-[60px]" src={circleL} />
            <img className="w-[150px] h-[10px] mt-[-15px] md:h-[120px] lg:h-[150px]" src={categories[counter]?.character_photo} />
            <img className="w-[140px] h-[10px] mt-[-25px] md:h-[140px] lg:h-[160px]" src={categories[counter]?.cover_photo} />
        </div>
        <div className=" w-[50%] h-full flex items-center justify-around">
            <div className="flex flex-col w-[250px] text-left ">
            <h5 className="text-[24px]  text-white text-left"> {categories[counter]?.name} </h5>
            <p className="w-[350px] text-[12px]  text-white text-justify md:text-[10px] md:w-[220px] lg:text-[13px] lg:w-[280px]">
                {/* Is the manga that is aimed at adolescent boys. They are series
                with large amounts of action, in which humorous situations of
                ten occur. The camaraderie between members of a collective or
                a combat team stands out. */}
                {categories[counter]?.description}
            </p>
            </div>
            <img onClick={sumar} className="w-[40px] h-auto lg:w-[60px]" src={circleR} />
        </div>
        </div>
    </div>
  )
}
