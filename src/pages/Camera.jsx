import CameraImg from "../assets/Camera.png";
import Nav from "../components/Nav";

function Camera() {
  return (
    <>
      <Nav />
      <div className="absolute top-1/2 left-1/2 z-0 flex -translate-1/2 items-center justify-center">
        <div className="absolute size-[18dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[16000ms] animate-infinite"></div>
        <div className="absolute size-[20dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[14000ms] animate-infinite"></div>
        <div className="absolute size-[22dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[10000ms] animate-infinite"></div>
        <div className="z-1 flex animate-pulse flex-col items-center justify-between gap-y-3">
          <img src={CameraImg} className="size-[9dvw]" />
          <p className="font-semibold">SETTING UP CAMERA...</p>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-y-3 text-sm">
        <p className="">TO GET BETTER RESULTS MAKE SURE TO HAVE:</p>
        <div className="flex gap-x-5">
          <p>◇ NEUTRAL EXPRESSION</p>
          <p>◇ FRONTAL POSE</p>
          <p>◇ ADEQUATE LIGHTING</p>
        </div>
      </div>
    </>
  );
}

export default Camera;
