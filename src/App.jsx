import { useState } from "react";
import "./index.css";
import Nav from "/imagenes/NAV.png";
import circleL from "/imagenes/circle-l.png";
import circleR from "/imagenes/circle-r.png";
import hadaImg from "/imagenes/hada-img.png";
import lufyImg from "/imagenes/lufi-img.png";
import imgfooter from "/imagenes/imagen-footer.png";
import facebook from "/imagenes/Facebook.png";
import twitter from "/imagenes/Twitter.png";
import corazon from "/imagenes/Union.png";
import vimeo from "/imagenes/Vimeo.png";
import youtube from "/imagenes/Youtube.png";
import ultima from "/imagenes/ultima.png";

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
              <img className="w-[40px] h-auto" src={circleR} />
            </div>
          </div>
        </div>
      </div>
      <img
        className="rounded-[50%_50%_48%52%/_0%_0%_100%_100%] w-screen min-[320px]:text-center max-[725px]:hidden"
        src={imgfooter}
        alt=""
      />
      <footer className="flex justify-around items-center border p-4 mt-20 min-[320px]:text-center max-[725px]:hidden">
        <div className="flex flex-row justify-evenly">
          <h5 className="mr-4 text-2xl">Home</h5>
          <h5 className="text-2xl">Mangas</h5>
        </div>
        <div className="text-center flex">
          <h2 className="text-4xl text-orange-500 font-bold">Minga</h2>
          <img className="w-[50px]" src={ultima} alt="" />
        </div>
        <div className="flex flex-col items-center ml-4">
          <div className="flex flex-row gap-5 p-4">
            <img src={facebook} alt="" className="w-5 h-auto" />
            <img src={twitter} alt="" className="w-5 h-auto" />
            <img src={vimeo} alt="" className="w-5 h-auto" />
            <img src={youtube} alt="" className="w-5 h-auto" />
          </div>
          <button className="ml-4 flex rounded items-center gap-2 bg-orange-500 text-white px-10 py-3 font-bold hover:bg-orange-600  text-lg">
            Donate <img src={corazon} alt="" />
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;
