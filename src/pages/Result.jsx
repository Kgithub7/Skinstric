import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PredictionContext } from "../context/PredictionContext.jsx";
import Nav from "../components/Nav";
import CameraImg from "../assets/Camera.png";
import CameraArrow from "../assets/CameraArrow.png";
import GalleryImg from "../assets/Gallery.png";
import GalleryArrow from "../assets/GalleryArrow.png";
import BackButton from "../components/ui/BackButton.jsx";
import axios from "axios";

function Result() {
  const navigate = useNavigate();
  const { predictions, setPredictions } = useContext(PredictionContext);
  const [loading, setLoading] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    localStorage.setItem("predictions", JSON.stringify(predictions));
  }, [predictions]);

  const upload = async () => {
    const payload = { image: file };
    const start = Date.now();

    try {
      const response = await axios.post(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
        payload,
      );

      const { data } = response.data;
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 2000 - elapsed);
      await new Promise((res) => setTimeout(res, remaining));

      setPredictions(data);
      navigate("/select");
    } catch (error) {
      alert("Error Uploading Photo");
    } finally {
      setLoading(false);
    }
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
      <div className="absolute top-28 right-8 z-1 flex size-[8dvw] min-h-15 min-w-15 items-center justify-center border-1 border-gray-300">
        <span className="absolute -top-6 left-0 text-sm">Preview</span>
        {previewUrl && (
          <img src={previewUrl} className="size-full object-contain" />
        )}
      </div>
      {!loading ? (
        <>
          <div className="relative flex h-[70dvh] w-dvw flex-col items-center justify-center gap-y-40 md:gap-y-50 lg:flex-row lg:overflow-x-hidden">
            <div className="relative z-1 flex w-2/5 items-center justify-center lg:-translate-x-1/7">
              <div className="absolute size-[18dvw] min-h-25 min-w-25 -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite sm:min-h-[180px] sm:min-w-[180px]"></div>
              <div className="absolute min-h-[120px] min-w-[120px] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite sm:min-h-[200px] sm:min-w-[200px] md:size-[20dvw]"></div>
              <div className="absolute min-h-[140px] min-w-[140px] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite sm:min-h-[220px] sm:min-w-[220px] md:size-[22dvw]"></div>
              <button
                className="z-1 size-[9dvw] cursor-pointer transition-all duration-900 ease-in-out hover:scale-110"
                onClick={() => setModalOpen(true)}
              >
                <img src={CameraImg} />
              </button>
              <div className="absolute z-1 size-[5dvw] translate-x-4/5 -translate-y-[118%]">
                <img
                  src={CameraArrow}
                  className="size-[5dvw] max-w-5 md:max-w-none"
                />
                <p className="-ml-9 w-[10dvw] min-w-30 translate-x-1/2 -translate-y-[8dvw] text-left text-xs lg:ml-1 lg:text-sm">
                  ALLOW A.I. <br />
                  TO&nbsp;SCAN&nbsp;YOUR&nbsp;FACE
                </p>
              </div>
              <div
                className={`absolute lg:-right-1/4 lg:bottom-2/5 ${modalOpen ? "" : "hidden"} -bottom-10 h-20 w-40 translate-1/2 bg-black pt-3 lg:h-1/2 lg:min-h-20 lg:w-1/2 lg:translate-0`}
              >
                <p className="mx-3 p-0 text-xs font-bold text-white lg:text-base">
                  ALLOW A.I. TO ACCESS YOUR CAMERA
                </p>
                <div className="absolute bottom-0 flex h-1/4 w-full items-center justify-end border-t border-white text-right text-xs lg:text-base">
                  <button
                    className="mr-12 cursor-pointer text-xs font-semibold text-gray-400 lg:text-base"
                    onClick={() => setModalOpen(false)}
                  >
                    DENY
                  </button>
                  <Link to={"/camera"}>
                    <button
                      className="text-xsfont-semibold mr-3 cursor-pointer text-xs text-white lg:text-base"
                      onClick={() => setModalOpen(false)}
                    >
                      ALLOW
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={`relative flex w-2/5 items-center justify-center ${modalOpen ? "pointer-events-none opacity-50" : ""} transition-all duration-300 ease-in-out`}
            >
              <div className="absolute size-[18dvw] min-h-25 min-w-25 -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite sm:min-h-[200px] sm:min-w-[200px]"></div>
              <div className="absolute size-[20dvw] min-h-[120px] min-w-[120px] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite sm:min-h-[220px] sm:min-w-[220px]"></div>
              <div className="absolute size-[22dvw] min-h-[140px] min-w-[140px] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite sm:min-h-[240px] sm:min-w-[240px]"></div>
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
                <p className="w-[10dvw] min-w-30 -translate-x-[10dvw] text-xs md:text-right lg:text-sm">
                  ALLOW A.I. <br />
                  ACCESS GALLERY
                </p>
              </div>
            </div>
          </div>
          <BackButton page={"testing"} />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute size-[32dvw] min-h-[280px] min-w-[280px] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[16000ms] animate-infinite lg:size-[30dvw]"></div>
          <div className="absolute size-[34dvw] min-h-[300px] min-w-[300px] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[14000ms] animate-infinite lg:size-[32dvw]"></div>
          <div className="absolute size-[36dvw] min-h-[320px] min-w-[320px] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[10000ms] animate-infinite lg:size-[34dvw]"></div>
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
