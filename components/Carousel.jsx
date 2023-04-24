import circleL from "../public/imagenes/circle-l.png";
import circleR from "../public/imagenes/circle-r.png";
import hadaImg from "../public/imagenes/hada-img.png";
import lufyImg from "../public/imagenes/lufi-img.png";

export default function Carousel() {
  return (
    <> 
    <div className="flex w-screen h-[40vh] justify-center content-center min-[320px]:text-center max-md:hidden ">
        <div className="bg-orange-500 w-[92%] h-[22vh] mt-[3%] rounded flex ">
        <div className=" w-[50%] h-full flex items-center justify-around">
            <img className="w-[40px] h-auto lg:w-[60px]" src={circleL} />
            <img className="w-[220px] h-[195px] mt-[-25px] lg:h-[220px]" src={hadaImg} />
            <img className="w-[150px] h-[170px] mt-[-55px] lg:h-[180px]" src={lufyImg} />
        </div>
        <div className=" w-[50%] h-full flex items-center justify-around">
            <div className="flex flex-col w-[250px] text-left ">
            <h5 className="text-[24px]  text-white text-left">Shonen </h5>
            <p className="w-[350px] text-[12px]  text-white text-justify md:text-[10px] md:w-[220px] lg:text-[13px] lg:w-[280px]">
                Is the manga that is aimed at adolescent boys. They are series
                with large amounts of action, in which humorous situations of
                ten occur. The camaraderie between members of a collective or
                a combat team stands out.
            </p>
            </div>
            <img className="w-[40px] h-auto lg:w-[60px]" src={circleR} />
        </div>
        </div>
    </div>
</>
  )
}
