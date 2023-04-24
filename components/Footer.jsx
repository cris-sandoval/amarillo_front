
import facebook from "../public/imagenes/Facebook.png";
import twitter from "../public/imagenes/Twitter.png";
import corazon from "../public/imagenes/Union.png";
import vimeo from "../public/imagenes/Vimeo.png";
import youtube from "../public/imagenes/Youtube.png";
import ultima from "../public/imagenes/ultima.png";
import imgfooter from "../public/imagenes/imagen-footer.png";

export default function Footer() {
  return (
    
    <> 
    <img
      className="rounded-[50%_50%_48%52%/_0%_0%_100%_100%] w-screen min-[320px]:text-center max-md:hidden"
      src={imgfooter}
      alt=""
    />
    <footer className="flex justify-around items-center border p-4 mt-20 min-[320px]:text-center max-md:hidden">
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
  )
}
