import { useState } from "react";
import "./index.css";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import apiUrl from "../api"

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
      <div className="container w-[100%] h-[100vh] flex flex-col">
        <div className="bg-img-nav  bg-cover object-fill w-screen h-[60vh]  min-[320px]:h-[100vh] ">
          <NavBar/>
          <div className="flex flex-col gap-[5px] ml-8 min-[320px]:mt-[50%] md:mt-[5%] max-sm:items-center">
            <h2 className="text-[50px] font-bold text-white lg:text-[70px]">
              For the love of manga
            </h2>
            <h1 className="text-base font-bold text-white lg:text-[35px]">
              Explore our varieties
            </h1>
            <h1 className="text-xs font-bold text-white lg:text-[20px] lg:mt-5">#MingaLove❤</h1>
            <button
              type="button"
              class="bg-slate-50 w-[13%] h-9 text-orange-500 rounded min-[320px]:w-[25%] max-sm:w-[25%] lg:text-[25px] lg:w-[27%] lg:h-12 "
            >
              Sign In!
            </button>
          </div>
        </div>
        <Carousel/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
