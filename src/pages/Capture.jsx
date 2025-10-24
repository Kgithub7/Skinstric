import { useContext, useEffect, useRef, useState } from "react";
import { PredictionContext } from "../context/PredictionContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Nav from "../components/Nav";
import BackButton from "../components/ui/BackButton";
import Shutter from "../assets/Shutter.png";
import axios from "axios";

function Capture() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(null);
  const [video, setVideo] = useState();
  const { predictions, setPredictions } = useContext(PredictionContext);
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    startCamera();
  }, []);

  useEffect(() => {
    localStorage.setItem("predictions", JSON.stringify(predictions));
  }, [predictions]);

  useEffect(() => {
    return () => {
      video && video.getTracks().forEach((track) => track.stop());
    };
  }, [video]);
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      videoRef.current.srcObject = stream;
      setVideo(stream);
    } catch {
      toast.error("Could not access camera", {
        autoClose: 3000,
        theme: "dark",
      });
      navigate("/result");
    }
  };

  const takePicture = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageUrl = canvas.toDataURL("image/jpeg");
    setPicture(imageUrl);
  };

  const upload = async () => {
    const payload = { image: picture };
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
      console.log(predictions);
      console.log(picture);
    } catch {
      toast.error("Error uploading photo", {
        autoClose: 3000,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-dvh w-dvw overflow-hidden">
      <Nav />
      <div
        className={`h-dvh w-dvw text-gray-200 ${loading && "pointer-events-none"}`}
      >
        {picture != null ? (
          <>
            {loading && (
              <div className="absolute right-1/2 bottom-1/2 flex h-1/5 w-1/7 min-w-30 translate-1/2 flex-col items-center justify-center gap-y-10 rounded-lg bg-gray-300 p-3 text-center text-sm text-gray-700 opacity-80 md:text-base lg:h-1/4">
                <p className="font-semibold">ANALYZING IMAGE</p>
                <div className="flex justify-center gap-x-4 [&>*]:size-2 [&>*]:rounded-full [&>*]:bg-gray-700">
                  <div className="animate-bounce animate-delay-100"></div>
                  <div className="animate-bounce animate-delay-200"></div>
                  <div className="animate-bounce animate-delay-300"></div>
                </div>
              </div>
            )}
            <div className="absolute right-1/2 bottom-1/10 flex translate-x-1/2 flex-col items-center gap-y-5 text-sm">
              <span className="font-bold">GREAT SHOT!</span>
              <span className="font-bold">PREVIEW</span>
              <div className="flex gap-x-10 [&>*]:cursor-pointer [&>*]:px-3 [&>*]:py-2">
                <button
                  className="min-w-18 bg-white text-black hover:bg-gray-200"
                  onClick={() => {
                    setPicture(null);
                    startCamera();
                  }}
                >
                  Retake
                </button>
                <button
                  className="min-w-30 bg-black hover:bg-gray-800"
                  onClick={() => {
                    setLoading(true);
                    upload();
                  }}
                >
                  Use This Photo
                </button>
              </div>
            </div>
            <img src={picture} className="size-full object-cover" />
          </>
        ) : (
          <>
            <div className="absolute bottom-8 left-1/2 z-1 flex -translate-x-1/2 flex-col items-center gap-y-3 text-center text-xs md:text-sm lg:w-[40dvw]">
              <p>TO GET BETTER RESULTS MAKE&nbsp;SURE&nbsp;TO&nbsp;HAVE:</p>
              <div className="flex gap-x-5">
                <p>◇&nbsp;NEUTRAL EXPRESSION</p>
                <p>◇&nbsp;FRONTAL POSE</p>
                <p>◇&nbsp;ADEQUATE LIGHTING</p>
              </div>
            </div>
            <video
              ref={videoRef}
              className="size-full animate-fade object-cover ease-in-out animate-delay-500 animate-duration-1000"
              autoPlay
              playsInline
            ></video>
            <canvas className="hidden" ref={canvasRef}></canvas>
            <div className="absolute top-1/2 right-5 flex min-h-12.5 items-center gap-x-5 text-sm lg:text-base">
              <p className="hidden md:block">TAKE PICTURE</p>
              <button
                className="mr-4 flex size-[5dvw] cursor-pointer items-center transition duration-200 ease-in-out hover:scale-105"
                onClick={takePicture}
              >
                <img src={Shutter} className="min-h-12.5 min-w-12.5" />
              </button>
            </div>
          </>
        )}
        {!picture && <BackButton page={"result"} gray={true} camera={true} />}
      </div>
    </div>
  );
}

export default Capture;
