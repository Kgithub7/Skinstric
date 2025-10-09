import { useContext } from "react";
import { PredictionContext } from "../App.jsx";
import ProceedButton from "../components/ui/ProceedButton.jsx";
import BackButton from "../components/ui/BackButton";
import Nav from "../components/Nav.jsx";
import SelectedRadioButton from "../assets/SelectedRadio.png";
import RadioButton from "../assets/Radio.png";

function Summary() {
  const { predictions } = useContext(PredictionContext);
  return (
    <>
      <Nav />
      <p className="mx-7 mb-2 text-sm font-bold">A.I. ANALYSIS</p>
      <h1 className="mx-6 mb-2 text-6xl">DEMOGRAPHICS</h1>
      <h1 className="mx-6 text-xs">PREDICTED RACE & AGE</h1>
      <div className="mx-10 mt-5 flex h-[60dvh] gap-x-3 [&>*]:border-t [&>*:not(:first-child)]:bg-gray-100">
        <div className="flex flex-2 flex-col gap-y-2 [&>*]:flex [&>*]:h-1/5 [&>*]:cursor-pointer [&>*]:flex-col [&>*]:justify-between [&>*]:bg-gray-100 [&>*]:px-2 [&>*]:py-3 [&>*]:text-left [&>*]:text-sm [&>*]:font-semibold [&>*]:hover:bg-gray-200 [&>*:not(:first-child)]:border-t">
          <button>
            <span>{}</span>
            <span>RACE</span>
          </button>
          <button>
            <span>{}</span>
            <span>AGE</span>
          </button>
          <button>
            <span>{}</span>
            <span>SEX</span>
          </button>
        </div>
        <div className="flex-10"></div>
        <div className="flex flex-4 flex-col justify-center">
          <div className="flex flex-1 items-center justify-between p-0 text-sm font-semibold">
            <span className=""></span>
            <span className="">A.I. CONFIDENCE</span>
          </div>
          <div className="flex flex-9 flex-col justify-center [&_img]:size-3 [&>*]:mx-2 [&>*]:flex [&>*]:flex-1 [&>*]:items-center">
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
            <div className="">
              <img src={RadioButton} />
            </div>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-400">
        If A.I. estimate is wrong, select the correct one.
      </p>
      <BackButton page={"select"} />
      <ProceedButton page={""} text={"HOME"} />
    </>
  );
}

export default Summary;
