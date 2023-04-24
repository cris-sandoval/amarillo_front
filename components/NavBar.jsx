import Nav from "/imagenes/NAV.png";
import navmobile from "/imagenes/Nav-mobile.png";

export default function NavBar() {
  return (
    <div className="m-3 w-[95%] h-50px min-[320px] sm:min-h-[10vh] ">
            <img src={Nav} className="min-[320px]:w-[95%] min-[320px]:h-[30px] md:w-[98%] md:h-[60px] lg:h-[60px] max-md:hidden" />
            <img src={navmobile} className="min-[320px]:w-[98%] min-[320px]:h-[60px]  lg:h-[60px] md:hidden" />
    </div>
  )
}
