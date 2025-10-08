import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PredictionContext } from "../App.jsx";
import Nav from "../components/Nav";
import CameraImg from "../assets/Camera.png";
import CameraArrow from "../assets/CameraArrow.png";
import GalleryImg from "../assets/Gallery.png";
import GalleryArrow from "../assets/GalleryArrow.png";
import axios from "axios";

function Result() {
  const navigate = useNavigate();
  const { setPredictions } = useContext(PredictionContext);
  const [loading, setLoading] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const upload = async () => {
    const payload = {
      image: file,
    };
    try {
      const {
        data: { data },
      } = await axios.post(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
        payload,
      );
      setPredictions(data);
    } catch (error) {
      alert("Error sending data");
    }
    setTimeout(() => {
      setLoading(false);
      navigate("/select");
    }, 2000);
  };

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setLoading(true);
      upload();
    }
  }, [file]);

  return (
    <>
      <Nav />
      <p className="mx-7 my-4 text-sm font-bold">TO START ANALYSIS</p>
      <div className="absolute top-28 right-8 flex size-[8dvw] items-center justify-center border-1 border-gray-300">
        <span className="absolute -top-6 left-0 text-sm">Preview</span>
        {previewUrl && (
          <img src={previewUrl} className="size-full object-contain" />
        )}
      </div>
      {!loading ? (
        <>
          <div className="relative flex h-[70dvh] w-dvw justify-center overflow-x-hidden">
            <div className="relative z-1 flex w-2/5 -translate-x-1/7 items-center justify-center">
              <div className="absolute size-[18dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite"></div>
              <div className="absolute size-[20dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite"></div>
              <div className="absolute size-[22dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite"></div>
              <button
                className="z-1 size-[9dvw] cursor-pointer transition-all duration-900 ease-in-out hover:scale-110"
                onClick={() => setModalOpen(true)}
              >
                <img src={CameraImg} />
              </button>
              <div className="absolute z-1 size-[5dvw] translate-x-4/5 -translate-y-[118%]">
                <img src={CameraArrow} className="size-[5dvw]" />
                <p className="ml-1 w-[10dvw] min-w-30 translate-x-1/2 -translate-y-[6dvw] text-left text-sm">
                  ALLOW A.I. <br />
                  TO SCAN YOUR FACE
                </p>
              </div>
              <div
                className={`absolute -right-1/4 bottom-2/5 ${modalOpen ? "" : "hidden"} h-1/4 w-3/5 bg-black pt-3`}
              >
                <p className="ml-3 font-bold text-white">
                  ALLOW A.I. TO ACCESS YOUR CAMERA
                </p>
                <div className="absolute bottom-0 flex h-1/4 w-full items-center justify-end border-t border-white text-right">
                  <button
                    className="mr-12 cursor-pointer font-semibold text-gray-400"
                    onClick={() => setModalOpen(false)}
                  >
                    DENY
                  </button>
                  <button
                    className="mr-3 cursor-pointer font-semibold text-white"
                    onClick={() => setModalOpen(false)}
                  >
                    ALLOW
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`relative flex w-2/5 items-center justify-center ${modalOpen ? "opacity-50" : ""} transition-all duration-300 ease-in-out`}
            >
              <div className="absolute size-[18dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite"></div>
              <div className="absolute size-[20dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite"></div>
              <div className="absolute size-[22dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite"></div>
              <button className="z-1 size-[9dvw] transition-all duration-900 ease-in-out hover:scale-110">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <img src={GalleryImg} />
                </label>
              </button>
              <input
                type="file"
                className="hidden"
                id="file-upload"
                accept="image/png, image/jpeg"
                onChange={(event) => {
                  event.target.files.length > 0 &&
                    setFile(event.target.files[0]);
                }}
              />
              <div className="absolute z-1 size-[5dvw] -translate-x-4/5 translate-y-6/5">
                <img src={GalleryArrow} />
                <p className="w-[10dvw] min-w-30 -translate-x-[10dvw] text-right text-sm">
                  ALLOW A.I. <br />
                  ACCESS GALLERY
                </p>
              </div>
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
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute size-[18dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[16000ms] animate-infinite"></div>
          <div className="absolute size-[20dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[14000ms] animate-infinite"></div>
          <div className="absolute size-[22dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[10000ms] animate-infinite"></div>
          <div className="z-1 flex flex-col justify-between gap-y-10">
            <p className="font-semibold">PREPARING YOUR ANALYSIS...</p>
            <div className="flex justify-center gap-x-4">
              <div className="size-2 animate-bounce rounded-full bg-gray-400 animate-delay-100"></div>
              <div className="size-2 animate-bounce rounded-full bg-gray-400 animate-delay-200"></div>
              <div className="size-2 animate-bounce rounded-full bg-gray-400 animate-delay-300"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Result;
