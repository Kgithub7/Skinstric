import { useState } from "react";
import ProceedButton from "../components/ui/ProceedButton.jsx";
import BackButton from "../components/ui/BackButton";
import Nav from "../components/Nav.jsx";
import SelectedRadioButton from "../assets/SelectedRadio.png";
import RadioButton from "../assets/Radio.png";
import ConfidenceCircle from "../components/ui/ConfidenceCircle.jsx";

function Summary() {
  const demographics = Object.keys(
    JSON.parse(localStorage.getItem("predictions")),
  );

  const predictions = Object.values(
    JSON.parse(localStorage.getItem("predictions")),
  );

  const racePredictions = Object.entries(predictions[0])
    .sort((a, b) => b[1] - a[1])
    .map((prediction) => [
      prediction[0].toUpperCase(),
      Math.round(prediction[1] * 10000) / 100,
    ]);
  const agePredictions = Object.entries(predictions[1])
    .sort((a, b) => b[1] - a[1])
    .map((prediction) => [
      prediction[0].toUpperCase(),
      Math.round(prediction[1] * 10000) / 100,
    ]);
  const sexPredictions = Object.entries(predictions[2])
    .sort((a, b) => b[1] - a[1])
    .map((prediction) => [
      prediction[0].toUpperCase(),
      Math.round(prediction[1] * 10000) / 100,
    ]);

  const [selectedDemographic, setSelectedDemographic] = useState("RACE");
  const [selectedRace, setSelectedRace] = useState(racePredictions[0][0]);
  const [selectedRaceConfidence, setSelectedRaceConfidence] = useState(
    racePredictions[0][1],
  );
  const [selectedAge, setSelectedAge] = useState(agePredictions[0][0]);
  const [selectedAgeConfidence, setSelectedAgeConfidence] = useState(
    agePredictions[0][1],
  );
  const [selectedSex, setSelectedSex] = useState(sexPredictions[0][0]);
  const [selectedSexConfidence, setSelectedSexConfidence] = useState(
    sexPredictions[0][1],
  );
  const [selectedConfidence, setSelectedConfidence] = useState(
    racePredictions[0][1],
  );

  return (
    <>
      <Nav />
      <p className="mx-7 mb-2 text-sm font-bold">A.I. ANALYSIS</p>
      <h1 className="mx-6 mb-2 text-6xl">DEMOGRAPHICS</h1>
      <h1 className="mx-6 text-xs">PREDICTED RACE & AGE</h1>
      <div className="mx-10 mt-5 flex h-[60dvh] gap-x-3 [&>*]:border-t [&>*:not(:first-child)]:bg-gray-100">
        <div className="flex flex-2 flex-col gap-y-2 font-semibold [&>*]:flex [&>*]:h-1/5 [&>*]:cursor-pointer [&>*]:flex-col [&>*]:justify-between [&>*]:px-2 [&>*]:py-3 [&>*]:text-left [&>*]:text-sm [&>*:not(.bg-black)]:hover:bg-gray-200 [&>*:not(:first-child)]:border-t">
          <button
            className={
              selectedDemographic == "RACE"
                ? "bg-black text-white"
                : "bg-gray-100"
            }
            onClick={() => {
              setSelectedDemographic("RACE");
              setSelectedConfidence(selectedRaceConfidence);
            }}
          >
            <span>{selectedRace}</span>
            <span>RACE</span>
          </button>
          <button
            className={
              selectedDemographic == "AGE"
                ? "bg-black text-white"
                : "bg-gray-100"
            }
            onClick={() => {
              setSelectedDemographic("AGE");
              setSelectedConfidence(selectedAgeConfidence);
            }}
          >
            <span>{selectedAge}</span>
            <span>AGE</span>
          </button>
          <button
            className={
              selectedDemographic == "SEX"
                ? "bg-black text-white"
                : "bg-gray-100"
            }
            onClick={() => {
              setSelectedDemographic("SEX");
              setSelectedConfidence(selectedSexConfidence);
            }}
          >
            <span>{selectedSex}</span>
            <span>SEX</span>
          </button>
        </div>
        <div className="relative flex-10 p-5">
          <p className="text-3xl">
            {selectedDemographic == "RACE"
              ? selectedRace
              : selectedDemographic == "AGE"
                ? selectedAge
                : selectedSex}
          </p>
          <ConfidenceCircle percentage={selectedConfidence} />
        </div>
        <div className="flex flex-4 flex-col justify-center">
          <div className="flex flex-1 items-center justify-between px-2 text-sm font-semibold">
            <span className="">{selectedDemographic}</span>
            <span className="">A.I. CONFIDENCE</span>
          </div>
          <div className="flex flex-9 flex-col [&_img]:size-3 [&>*]:flex [&>*]:h-1/9 [&>*]:cursor-pointer [&>*]:items-center [&>*]:justify-between [&>*]:px-2 [&>*:not(.bg-black)]:hover:bg-gray-200">
            {selectedDemographic == "RACE"
              ? racePredictions
                  .map((prediction, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedRace(prediction[0]);
                        setSelectedRaceConfidence(prediction[1]);
                        setSelectedConfidence(prediction[1]);
                      }}
                      className={
                        selectedRace == prediction[0]
                          ? "bg-black text-white"
                          : "bg-gray-100"
                      }
                    >
                      <div className="flex items-center gap-x-3">
                        <img
                          src={
                            selectedRace == prediction[0]
                              ? SelectedRadioButton
                              : RadioButton
                          }
                        />
                        <p className="text-sm">{prediction[0]}</p>
                      </div>
                      <p className="text-sm">{prediction[1]}%</p>
                    </button>
                  ))
                  .sort((a, b) => b - a)
              : selectedDemographic == "AGE"
                ? agePredictions.map((prediction, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedAge(prediction[0]);
                        setSelectedAgeConfidence(prediction[1]);
                        setSelectedConfidence(prediction[1]);
                      }}
                      className={
                        selectedAge == prediction[0]
                          ? "bg-black text-white"
                          : "bg-gray-100"
                      }
                    >
                      <div className="flex items-center gap-x-3">
                        <img
                          src={
                            selectedAge == prediction[0]
                              ? SelectedRadioButton
                              : RadioButton
                          }
                        />
                        <p className="text-sm">{prediction[0]}</p>
                      </div>
                      <p className="text-sm">{prediction[1]}%</p>
                    </button>
                  ))
                : sexPredictions.map((prediction, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedSex(prediction[0]);
                        setSelectedSexConfidence(prediction[1]);
                        setSelectedConfidence(prediction[1]);
                      }}
                      className={
                        selectedSex == prediction[0]
                          ? "bg-black text-white"
                          : "bg-gray-100"
                      }
                    >
                      <div className="flex items-center gap-x-3">
                        <img
                          src={
                            selectedSex == prediction[0]
                              ? SelectedRadioButton
                              : RadioButton
                          }
                        />
                        <p className="text-sm">{prediction[0]}</p>
                      </div>
                      <p className="text-sm">{prediction[1]}%</p>
                    </button>
                  ))}
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
