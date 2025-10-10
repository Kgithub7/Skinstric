import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { PredictionContext } from "./context/PredictionContext.jsx";
import Home from "./pages/Home.jsx";
import Testing from "./pages/Testing.jsx";
import Result from "./pages/Result.jsx";
import Select from "./pages/Select.jsx";
import Summary from "./pages/Summary.jsx";
import Camera from "./pages/Camera.jsx";

function App() {
  const [predictions, setPredictions] = useState({});
  return (
    <PredictionContext value={{ predictions, setPredictions }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/result" element={<Result />} />
          <Route path="/select" element={<Select />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/camera" element={<Camera />} />
        </Routes>
      </Router>
    </PredictionContext>
  );
}

export default App;
