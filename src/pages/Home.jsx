import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen [&:has(.left-arrow:hover)_.right-arrow]:invisible [&:has(.left-arrow:hover)_.right-arrow]:opacity-0 [&:has(.left-arrow:hover)_.right-square]:opacity-0 [&:has(.right-arrow:hover)_.left-arrow]:invisible [&:has(.right-arrow:hover)_.left-arrow]:opacity-0 [&:has(.right-arrow:hover)_.left-square]:opacity-0">
      <div className="left-square absolute top-1/2 hidden size-[80dvh] -translate-x-4/5 -translate-y-1/2 rotate-45 overflow-hidden border-1 border-dotted border-gray-400 transition-all duration-900 ease-in-out lg:block lg:size-[100dvh]"></div>
      <Link
        to={"/"}
        className="left-arrow absolute top-1/2 right-17/20 z-1 ml-5 hidden -translate-y-1/2 text-sm transition-all duration-900 ease-in-out lg:block"
      >
        <div className="group flex items-center gap-x-5 text-xs lg:text-base">
          <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <span className="left-0 flex aspect-square w-[30px] -translate-x-[2px] translate-y-[2px] -rotate-45 items-center justify-center text-center">
              ◀
            </span>
          </div>
          <span>DISCOVER&nbsp;A.I.</span>
        </div>
      </Link>
      <div className="right-square absolute top-1/2 right-0 hidden size-[80dvh] translate-x-4/5 -translate-y-1/2 rotate-45 overflow-hidden border-1 border-dotted border-gray-400 transition-all duration-900 ease-in-out lg:block lg:size-[100dvh]"></div>
      <Link
        to={"/testing"}
        className="right-arrow absolute top-1/2 left-17/20 z-1 mr-5 hidden -translate-y-1/2 text-sm transition-all duration-900 ease-in-out lg:block"
      >
        <div className="group flex items-center gap-x-5 text-xs lg:text-base">
          <span>TAKE&nbsp;TEST</span>
          <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <span className="left-0 flex aspect-square w-[30px] translate-x-[2px] -translate-y-[2px] -rotate-45 items-center justify-center text-center">
              ▶
            </span>
          </div>
        </div>
      </Link>
      <div className="absolute top-1/2 left-1/2 hidden -translate-1/2 animate-fade flex-col justify-between text-center leading-none transition-all duration-900 ease-in-out animate-duration-2000 animate-ease-in-out lg:flex lg:text-7xl xl:text-[100px] [.left-arrow:hover~&]:left-3/4 [.left-arrow:hover~&>p]:translate-x-[calc(16%+16px)] [.right-arrow:hover~&]:left-1/4 [.right-arrow:hover~&>p]:-translate-x-[calc(16%+16px)]">
        <h1>Sophisticated</h1>
        <p className="transition-all duration-900 ease-in-out">Skincare</p>
      </div>

      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center gap-y-3 text-center lg:hidden">
        <div className="absolute top-1/2 left-1/2 size-[40dvw] min-h-[300px] min-w-[300px] -translate-1/2 -rotate-45 border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out"></div>
        <div className="absolute top-1/2 left-1/2 size-[45dvw] min-h-[350px] min-w-[350px] -translate-1/2 -rotate-45 border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out"></div>
        <div className="text-4xl md:text-5xl">
          <h1>
            Sophisticated
            <br />
            Skincare
          </h1>
        </div>
        <div className="bottom-12 left-2 text-xs font-semibold text-gray-500">
          <p>
            Skinstric developed an A.I. that creates a <br />
            highly-personalized routine tailored to <br />
            what your skin needs.
          </p>
        </div>
        <Link
          to={"/testing"}
          className="text-sm transition-all duration-900 ease-in-out"
        >
          <div className="group flex items-center gap-x-5 text-xs font-bold">
            <span>ENTER EXPERIENCE</span>
            <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <span className="left-0 flex aspect-square w-[30px] translate-x-[2px] -translate-y-[2px] -rotate-45 items-center justify-center text-center">
                ▶
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="absolute bottom-12 left-2 hidden text-xs lg:block lg:text-sm">
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
