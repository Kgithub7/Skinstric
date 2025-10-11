import { Link } from "react-router-dom";
import LeftBracket from "../assets/LeftBracket.png";
import RightBracket from "../assets/RightBracket.png";

function Nav() {
  return (
    <nav className="flex w-screen items-center justify-between px-7 py-5 text-[10px]">
      <div className="flex justify-between not-last:gap-x-5">
        <Link to={"/"} className="font-bold">
          SKINSTRIC
        </Link>
        <div className="flex h-3 gap-x-1 font-semibold text-gray-500">
          <img src={LeftBracket} alt="[" />
          <span>INTRO</span> <img src={RightBracket} alt="]" />
        </div>
      </div>
      <div className="flex bg-black px-3 py-2 text-[8px] font-bold text-white">
        <span>ENTER CODE</span>
      </div>
    </nav>
  );
}

export default Nav;
