import { useState } from "react";
import "./index.css";
import Nav from "/imagenes/NAV.png";
import circleL from "/imagenes/circle-l.png";
import circleR from "/imagenes/circle-r.png";
import hadaImg from "/imagenes/hada-img.png";
import lufyImg from "/imagenes/lufi-img.png";

function App() {
  const [count, setCount] = useState(0);
  ////bg-img-nav bg-cover
  return (
    <>
      <div className="container w-[100%] h-[100vh] flex flex-col">
        <div className="bg-img-nav bg-cover object-fill w-full h-[60vh]">
          <div className="m-3 w-[95%] h-auto">
            <img src={Nav} />
          </div>
          <div className="flex flex-col gap-[5px] mt-8 ml-8">
            <h2 className="text-[50px] font-bold text-white">
              For the love of manga
            </h2>
            <h1 className="text-base font-bold text-white">
              Explore our varieties
            </h1>
            <h1 className="text-xs font-bold text-white">#MingaLove❤</h1>
            <button
              type="button"
              class="bg-slate-50 w-[13%] h-9 text-orange-500 rounded"
            >
              Sign In!
            </button>
          </div>
        </div>
        <div className="flex w-full h-[40vh] justify-center content-center">
          <div className="bg-orange-500 w-[90%] h-[28vh] mt-[3%] rounded flex">
            <div className=" w-[50%] h-full flex space-x-9 ">
              <img className="w-[40px] h-[40px] mt-[11%]" src={circleL} />
              <img className="w-[220px] h-[180px] mt-[-15px]" src={hadaImg} />
              <img className="w-[150px] h-[160px] mt-[-20px]" src={lufyImg} />
            </div>
            <div className=" w-[50%] h-full flex items-center gap-8">
              <div className="flex flex-col w-[480px] text-left items-center">
                <h5 className="text-[24px]  text-white">Shonen </h5>
                <p className="w-[350px] text-[12px]  text-white">
                  Is the manga that is aimed at adolescent boys. They are series
                  with large amounts of action, in which humorous situations of
                  ten occur. The camaraderie between members of a collective or
                  a combat team stands out.
                </p>
              </div>
              <img
                className="w-[40px] h-[40px]"
                src={circleR}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
