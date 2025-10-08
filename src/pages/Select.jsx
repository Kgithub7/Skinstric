import { useContext } from "react";
import { PredictionContext } from "../App.jsx";

function Select() {
  const { predictions } = useContext(PredictionContext);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute flex size-[20.5dvw] -rotate-45 overflow-hidden transition-all">
        <div className="absolute size-[10dvw] flex-1 overflow-hidden bg-gray-100 transition-all">
          {" "}
          <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 font-semibold">
            COSMETIC
            <br />
            CONCERNS
          </p>
        </div>
        <div className="absolute right-0 size-[10dvw] flex-1 -rotate-0 overflow-hidden bg-gray-200 transition-all">
          <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 font-semibold">
            DEMOGRAPHICS
          </p>
        </div>
        <div className="absolute bottom-0 size-[10dvw] -rotate-0 overflow-hidden bg-gray-100 transition-all">
          <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 font-semibold">
            WEATHER
          </p>
        </div>
        <div className="absolute right-0 bottom-0 size-[10dvw] -rotate-0 overflow-hidden bg-gray-100 transition-all">
          {" "}
          <p className="absolute top-1/2 left-1/2 -translate-1/2 rotate-45 font-semibold">
            SKIN&nbsp;TYPE&nbsp;DETAILS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Select;
