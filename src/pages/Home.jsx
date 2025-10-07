import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen [&:has(.left-arrow:hover)_.right-arrow]:invisible [&:has(.left-arrow:hover)_.right-arrow]:opacity-0 [&:has(.left-arrow:hover)_.right-square]:opacity-0 [&:has(.right-arrow:hover)_.left-arrow]:invisible [&:has(.right-arrow:hover)_.left-arrow]:opacity-0 [&:has(.right-arrow:hover)_.left-square]:opacity-0">
      <div className="left-square absolute aspect-square h-screen -translate-x-4/5 rotate-45 overflow-hidden border-1 border-dotted border-gray-400 transition-all duration-900 ease-in-out"></div>
      <Link
        to={"/"}
        className="left-arrow absolute top-1/2 right-17/20 z-1 -translate-y-1/2 text-sm transition-all duration-900 ease-in-out"
      >
        <div className="group flex items-center gap-x-5">
          <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <span className="left-0 flex aspect-square w-[30px] -translate-x-[2px] translate-y-[2px] -rotate-45 items-center justify-center text-center">
              ◀
            </span>
          </div>
          <span>DISCOVER A.I.</span>
        </div>
      </Link>
      <div className="right-square absolute right-0 aspect-square h-screen translate-x-4/5 rotate-45 overflow-hidden border-1 border-dotted border-gray-400 transition-all duration-900 ease-in-out"></div>
      <Link
        to={"/testing"}
        className="right-arrow absolute top-1/2 left-17/20 z-1 -translate-y-1/2 text-sm transition-all duration-900 ease-in-out"
      >
        <div className="group flex items-center gap-x-5">
          <span>TAKE TEST</span>
          <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <span className="left-0 flex aspect-square w-[30px] translate-x-[2px] -translate-y-[2px] -rotate-45 items-center justify-center text-center">
              ▶
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 animate-fade text-center text-[100px] leading-none transition-all duration-900 ease-in-out animate-duration-2000 animate-ease-in-out [.left-arrow:hover~&]:left-3/4 [.left-arrow:hover~&>p]:translate-x-1/5 [.right-arrow:hover~&]:left-1/4 [.right-arrow:hover~&>p]:-translate-x-1/5">
        <h1>Sophisticated</h1>
        <p className="transition-all duration-900 ease-in-out">skincare</p>
      </div>
      <div className="absolute bottom-12 left-2 text-sm">
        <p>
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A <br /> HIGHLY-PERSONALIZED
          ROUTINE TAILORED TO <br /> WHAT YOUR SKIN NEEDS.
        </p>
      </div>
      <Nav />
    </div>
  );
}

export default Home;
