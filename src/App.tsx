import "./App.css";
import LP from "./pages/LP";

function App() {
  return (
    <>
      <div className="h-14"></div>
      <div className="m-20 flex justify-center">
        <div className="bg-slate-600a flex w-[840px] max-w-6xl flex-col items-center">
          <LP />
        </div>
      </div>
    </>
  );
}

export default App;
