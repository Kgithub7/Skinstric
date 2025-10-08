import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Home from "./pages/Home.jsx";
import Testing from "./pages/Testing.jsx";
import Result from "./pages/Result.jsx";
import Select from "./pages/Select.jsx";

export const PredictionContext = createContext({
  predictions: {},
  setPredictions: () => {},
});
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
        </Routes>
      </Router>
    </PredictionContext>
  );
}

export default App;
