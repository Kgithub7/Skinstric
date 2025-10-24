import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PredictionContext } from "./context/PredictionContext.jsx";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Home from "./pages/Home.jsx";
import Testing from "./pages/Testing.jsx";
import Result from "./pages/Result.jsx";
import Select from "./pages/Select.jsx";
import Summary from "./pages/Summary.jsx";
import Camera from "./pages/Camera.jsx";
import Capture from "./pages/Capture.jsx";

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
          <Route path="/camera/capture" element={<Capture />} />
        </Routes>
        <ToastContainer limit={1} autoClose={3000} pauseOnFocusLoss={false} />
      </Router>
    </PredictionContext>
  );
}

export default App;
