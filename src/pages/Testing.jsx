import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Nav from "../components/Nav";
import axios from "axios";

function Testing() {
  const inputRef = useRef(null);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [proceed, setProceed] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const send = async () => {
    const payload = {
      name: sessionStorage.getItem("Name"),
      location: sessionStorage.getItem("Location"),
    };
    try {
      await axios.post(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne",
        payload,
      );
    } catch (error) {
      alert("Error sending data");
    }
    setTimeout(() => {
      setLoading(false);
      setProceed(true);
    }, 2000);
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
      <p className="px-7 text-[10px] font-bold">TO START ANALYSIS</p>
      <div className="absolute top-1/2 left-1/2 flex -translate-1/2 flex-col items-center justify-center">
        <div className="absolute size-[30dvw] -rotate-45 animate-spin overflow-hidden border-3 border-dotted border-gray-300 transition-all duration-900 ease-in-out animate-duration-[80000ms] animate-infinite"></div>
        <div className="absolute size-[32dvw] -rotate-35 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-70 transition-all duration-900 ease-in-out animate-duration-[70000ms] animate-infinite"></div>
        <div className="absolute size-[34dvw] -rotate-25 animate-spin overflow-hidden border-3 border-dotted border-gray-300 opacity-40 transition-all duration-900 ease-in-out animate-duration-[50000ms] animate-infinite"></div>
        {proceed ? (
          <div className="z-1 flex flex-col items-center gap-y-5">
            <p className="text-2xl">Thank you!</p>
            <p className="text-[18px] text-gray-600">
              Proceed for the next step
            </p>
          </div>
        ) : loading ? (
          <div className="z-1 flex flex-col justify-between gap-y-10">
            <p className="text-[18px] text-gray-400">Processing submission</p>
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
                className="w-[30dvw] border-b-1 text-center text-6xl tracking-tighter outline-0"
              />
            </form>
          </div>
        )}
      </div>
      <Link
        to={"/"}
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
      {proceed && (
        <Link
          to={"/result"}
          className="left-arrow absolute right-10 bottom-3 z-1 -translate-y-1/2 animate-fade-right text-sm transition-all duration-900 ease-in-out"
        >
          <div className="group flex items-center gap-x-7">
            <span className="font-semibold">PROCEED</span>
            <div className="rotate-45 items-center border-1 p-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <span className="left-0 flex aspect-square w-[40px] translate-x-[2px] -translate-y-[2px] -rotate-45 items-center justify-center text-center">
                ▶
              </span>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}

export default Testing;
