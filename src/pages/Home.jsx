import { Link } from "react-router-dom";
import Nav from "../components/Nav";

function Home() {
  return (
    <div className="fixed h-screen">
      <div className="absolute aspect-square h-screen -translate-x-4/5 rotate-45 overflow-hidden border-1 border-dotted border-gray-400"></div>
      <Link
        to={"/"}
        className="absolute top-1/2 right-17/20 z-1 -translate-y-1/2 text-[14px]"
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
      <div className="absolute right-0 aspect-square h-screen translate-x-4/5 rotate-45 overflow-hidden border-1 border-dotted border-gray-400"></div>
      <Link
        to={"/testing"}
        className="peer absolute top-1/2 left-17/20 z-1 -translate-y-1/2 text-[14px]"
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
      <div className="absolute top-1/2 left-1/2 container flex -translate-1/2 animate-fade flex-col items-center text-[100px] leading-none transition-all duration-700 ease-in-out animate-duration-2000 animate-ease-in-out peer-hover:left-0 peer-hover:-translate-x-1/4">
        <h1>Sophisticated</h1>
        <span>skincare</span>
      </div>
      <div className="absolute bottom-12 left-2 text-[14px]">
        <p>
          SKINSTRIC DEVELOPED AN A.I. THAT CREATES A <br /> HIGHLY-PERSONALIZED
          ROUTINE TAILORED TO <br /> WHAT YOUR SKIN NEEDS.
        </p>
      </div>
      <Nav />
    </div>
  );
}
// ▶
export default Home;
