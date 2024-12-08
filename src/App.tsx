import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LP from "./pages/LP";
import Estimate from "./pages/Estimate";

function App() {
  return (
    <>
      <div className="h-14"></div>
      <div className="m-20 flex justify-center">
        <div className="bg-slate-600a flex w-[840px] max-w-6xl flex-col items-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LP />} />
              <Route path="/estimate" element={<Estimate />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
