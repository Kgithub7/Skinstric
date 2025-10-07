import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import CameraImg from "../assets/Camera.png";
import CameraArrow from "../assets/CameraArrow.png";
import GalleryImg from "../assets/Gallery.png";
import GalleryArrow from "../assets/GalleryArrow.png";

function Result() {
  const toggleModal = () => {
    const modal = document.getElementById("modal");
    const gallery = document.getElementById("gallery");
    if (modal.classList.contains("hidden")) {
      modal.classList.remove("hidden");
      gallery.classList.add("opacity-50");
    } else {
      modal.classList.add("hidden");
      gallery.classList.remove("opacity-50");
    }
  };

  return (
    <>
      <Nav />
      <p className="mx-7 my-4 text-sm font-bold">TO START ANALYSIS</p>
      <div className="absolute top-28 right-8 size-32 border-1 border-gray-300">
        <span className="absolute -top-6 text-sm">Preview</span>
      </div>
      <div className="relative flex h-[70dvh] w-dvw justify-center overflow-x-hidden">
        <div className="relative z-1 flex w-2/5 -translate-x-1/7 items-center justify-center">
          <div className="absolute size-[18dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite"></div>
          <div className="absolute size-[20dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite"></div>
          <div className="absolute size-[22dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite"></div>
          <img
            src={CameraImg}
            className="z-1 size-[9dvw] cursor-pointer transition-all duration-900 ease-in-out hover:scale-110"
            onClick={toggleModal}
          />
          <img
            src={CameraArrow}
            className="absolute z-1 size-[5dvw] translate-x-4/5 -translate-y-[118%]"
          />
          <p className="absolute translate-x-13/10 -translate-y-7/2 text-left text-sm">
            ALLOW A.I. <br />
            TO SCAN YOUR FACE
          </p>
          <div
            id="modal"
            className="absolute -right-1/4 bottom-2/5 hidden h-1/4 w-3/5 bg-black pt-3"
          >
            <p className="ml-3 font-bold text-white">
              ALLOW A.I. TO ACCESS YOUR CAMERA
            </p>
            <div className="absolute bottom-0 flex h-1/4 w-full items-center justify-end border-t border-white text-right">
              <button
                className="mr-12 cursor-pointer font-semibold text-gray-500"
                onClick={toggleModal}
              >
                DENY
              </button>
              <button
                className="mr-3 cursor-pointer font-semibold text-white"
                onClick={toggleModal}
              >
                ALLOW
              </button>
            </div>
          </div>
        </div>
        <div
          id="gallery"
          className="relative flex w-2/5 items-center justify-center transition-all duration-300 ease-in-out"
        >
          <div className="absolute size-[19dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite"></div>
          <div className="absolute size-[20dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite"></div>
          <div className="absolute size-[22dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite"></div>
          <img
            src={GalleryImg}
            className="z-1 size-[9dvw] cursor-pointer transition-all duration-900 ease-in-out hover:scale-110"
          />
          <img
            src={GalleryArrow}
            className="absolute z-1 size-[5dvw] -translate-x-4/5 translate-y-6/5"
          />
          <p className="absolute -translate-x-7/5 translate-y-7/2 text-right text-sm">
            ALLOW A.I. <br />
            ACCESS GALLERY
          </p>
        </div>
      </div>

      <Link
        to={"/testing"}
        className="left-arrow absolute bottom-3 left-10 z-1 -translate-y-1/2 text-sm transition-all duration-900 ease-in-out"
      >
        <div className="group flex items-center gap-x-7">
          <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
            <span className="left-0 flex aspect-square w-[40px] -translate-x-[2px] translate-y-[2px] -rotate-45 items-center justify-center text-center">
              ◀
            </span>
          </div>
          <span className="font-semibold">BACK</span>
        </div>
      </Link>
    </>
  );
}

export default Result;
