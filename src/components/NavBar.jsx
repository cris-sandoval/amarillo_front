import Nav from "../imagenes/NAV.png";
import navmobile from "../imagenes/Nav-mobile.png";
import kilua from "../imagenes/kilua.png"
import x from "../imagenes/x.png"
import { useState } from "react";


export default function NavBar() {

  const [show, setShow] = useState(false)
  


  return (
    <>
   
    <header className="m-3 w-[95%] h-50px min-[320px] sm:min-h-[10vh] absolute">
      <img onClick={()=> setShow(!show) } src={Nav} className="min-[320px]:w-[95%] min-[320px]:h-[30px] md:w-[98%] md:h-[60px] lg:h-[60px] max-md:hidden" />
      <img onClick={()=> setShow(!show) } src={navmobile} className="min-[320px]:w-[98%] min-[320px]:h-[60px]  lg:h-[60px] md:hidden" />
      {
        (show)? (
          <nav className="bg-orange-500 w-[30%] min-[320px]:w-[55%] h-[65vh] absolute mt-[0px] ml-[10px] rounded z-10 justify-center items-center flex flex-col" >
      <div className=" w-[95%] h-[20%] flex justify-center items-center min-[320px]:gap lg:gap-5 md:space-x-9">
        <img className="w-[65px] min-[320px]:w-[35px] md:w-[45px]" src={kilua} alt="" />
        <div>
        <p className="text-[13px] text-white min-[320px]:text-[8px] md:text-[11px] lg:md:text-[13px]">Lucas Ezequiel Silva</p>
        <p className="text-[13px] text-white min-[320px]:text-[8px] md:text-[10px] lg:md:text-[13px]">lucasezequielsilva@gmail.com</p>
        </div>
        <img  onClick={()=> setShow(!show)} className="w-[15px] h-[15px] min-[320px]:w-[10px]" src={x} alt="" />
      </div>
      <div className=" w-[90%] h-[70%] justify-center items-center flex flex-col gap-5">
        <h3 className="text-[20px] text-white hover:bg-white hover:text-orange-500" >Home</h3>
        <h3 className="text-[20px] text-white hover:bg-white hover:text-orange-500">Comics </h3>
        <h3 className="text-[20px] text-white hover:bg-white hover:text-orange-500">My Comics</h3>
        <h3 className="text-[20px] text-white hover:bg-white hover:text-orange-500">Favories</h3>
        <h3 className="text-[20px] text-white hover:bg-white hover:text-orange-500">Logout</h3>
      </div>
    </nav>
        ) : (null)
      }
    </header>
    </>
  )
}


