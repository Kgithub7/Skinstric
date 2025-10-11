import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";
import BackButton from "../components/ui/BackButton";
import ProceedButton from "../components/ui/ProceedButton";

function Testing() {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    inputRef.current.focus();
    sessionStorage.clear();
  }, []);

  const send = async () => {
    const payload = {
      name: sessionStorage.getItem("Name"),
      location: sessionStorage.getItem("Location"),
    };
    const delay = new Promise((res) => setTimeout(res, 2000));
    const request = axios.post(
      "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
      payload,
    );
    try {
      await Promise.all([delay, request]);
      setProceed(true);
    } catch (error) {
      alert("Error sending data");
    } finally {
      setLoading(false);
    }
  };

  const verify = (event) => {
    event.preventDefault();
    if (input === "") setEmpty(true);
    else {
      setEmpty(false);
      setInput("");
      if (!/^\p{L}+(?:[ .'-]\p{L}+)*$/u.test(input.trim())) {
        setError(true);
      } else if (!sessionStorage.getItem("Name")) {
        setError(false);
        sessionStorage.setItem("Name", input);
        inputRef.current.placeholder = "your city name";
      } else {
        setError(false);
        sessionStorage.setItem("Location", input);
        setLoading(true);
        send();
      }
    }
  };
  return (
    <>
      <Nav />
      <p className="mx-7 text-xs font-bold">TO START ANALYSIS</p>
      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center">
        <div className="absolute size-[32dvw] min-h-[280px] min-w-[280px] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite lg:size-[30dvw]"></div>
        <div className="absolute size-[34dvw] min-h-[300px] min-w-[300px] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite lg:size-[32dvw]"></div>
        <div className="absolute size-[36dvw] min-h-[320px] min-w-[320px] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite lg:size-[34dvw]"></div>
        {proceed ? (
          <div className="z-1 flex flex-col items-center gap-y-5 text-center">
            <p className="text-2xl">Thank you!</p>
            <p className="text-[18px] text-gray-600">
              Proceed for the next step
            </p>
          </div>
        ) : loading ? (
          <div className="itemsv-center z-1 flex flex-col justify-between gap-y-10">
            <p className="text-center text-[18px] text-gray-400">
              Processing submission
            </p>
            <div className="flex justify-center gap-x-5">
              <div className="size-2 animate-bounce rounded-full bg-gray-400 animate-delay-100"></div>
              <div className="size-2 animate-bounce rounded-full bg-gray-400 animate-delay-200"></div>
              <div className="size-2 animate-bounce rounded-full bg-gray-400 animate-delay-300"></div>
            </div>
          </div>
        ) : (
          <div className="z-1 text-center">
            <p className="text-gray-400">CLICK TO TYPE</p>
            {empty ? (
              <p className="text-sm text-red-500">
                Please enter your{" "}
                {sessionStorage.getItem("Name") ? "city" : "name"}
              </p>
            ) : (
              error && (
                <p className="text-sm text-red-500">
                  Please enter a valid{" "}
                  {sessionStorage.getItem("Name") ? "city" : "name"} without
                  numbers or special characters
                </p>
              )
            )}
            <form onSubmit={verify} className="text-center">
              <input
                ref={inputRef}
                value={input}
                type="text"
                name="name"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Introduce Yourself"
                className="w-[30dvw] min-w-[260px] border-b-1 text-center text-2xl tracking-tighter outline-0 md:text-3xl lg:text-4xl 2xl:text-6xl"
              />
            </form>
          </div>
        )}
      </div>
      <BackButton page={""} />
      {proceed && <ProceedButton page={"result"} text={"PROCEED"} />}
    </>
  );
}

export default Testing;
