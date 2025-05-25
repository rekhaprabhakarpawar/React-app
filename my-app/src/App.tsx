import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="bg-red-100 shadow-lg">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
