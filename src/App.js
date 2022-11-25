import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";

import { Viamo } from "./components/Details/Viamo";
import { Nebula } from "./components/Details/Nebula";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Viamo" element={<Viamo />} />
          <Route path="/Nebula" element={<Nebula />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
