import { useNavigate } from "react-router-dom";
import CameraImg from "../assets/Camera.png";
import Nav from "../components/Nav";

function Camera() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/camera/capture");
  }, 2000);

  return (
    <>
      <Nav />
      <div className="absolute top-1/2 left-1/2 z-0 flex -translate-1/2 items-center justify-center">
        <div className="absolute size-[32dvw] min-h-[280px] min-w-[280px] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[16000ms] animate-infinite lg:size-[30dvw]"></div>
        <div className="absolute size-[34dvw] min-h-[300px] min-w-[300px] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[14000ms] animate-infinite lg:size-[32dvw]"></div>
        <div className="absolute size-[36dvw] min-h-[320px] min-w-[320px] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[10000ms] animate-infinite lg:size-[34dvw]"></div>
        <div className="z-1 flex animate-pulse flex-col items-center justify-between gap-y-3">
          <img src={CameraImg} className="size-[9dvw]" />
          <p className="text-sm font-semibold sm:text-base">
            SETTING UP CAMERA...
          </p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 z-1 flex -translate-x-1/2 flex-col items-center gap-y-3 text-center text-xs md:text-sm lg:w-[40dvw]">
        <p>TO GET BETTER RESULTS MAKE SURE TO HAVE:</p>
        <div className="flex gap-x-5">
          <p>◇&nbsp;NEUTRAL EXPRESSION</p>
          <p>◇&nbsp;FRONTAL POSE</p>
          <p>◇&nbsp;ADEQUATE LIGHTING</p>
        </div>
      </div>
    </>
  );
}

export default Camera;
