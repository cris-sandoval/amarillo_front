import { useState } from "react";
import "./index.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Main from "./layout/Main";
import Index from "./pages/Index";
// import Carousel from "./components/Carousel";

// import Index from "./pages/Index";

import apiUrl from "../api"

// import Nav from "../src/imagenes/NAV.png";
// import navmobile from "../src/imagenes/Nav-mobile.png";

function App() {
  const [count, setCount] = useState(0);
  

  return (
    <>
       <Main>
          <Index/>
       </Main>
    </>
  );
}

export default App;
