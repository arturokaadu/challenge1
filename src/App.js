import { Routes, Route} from "react-router-dom";
import { Home } from "./components/Home/Home";
import {Nav} from "./components/Nav/Nav"
import { Viamo } from "./components/Details/Viamo";
import { Nebula } from "./components/Details/Nebula";
function App() { 
  return (
    <>
         <Nav />
        <Routes>
          <Route path="/challenge1" element={<Home />} />
          <Route path="/challenge1/viamo" element={<Viamo />} />
          <Route path="/challenge1/nebula" element={<Nebula />} />
        </Routes>
      </>
  );
}

export default App;
