import { Routes, Route, HashRouter } from "react-router-dom";
import { Home } from "./components/Home/Home";
import {Nav} from "./components/Nav/Nav"
import { Viamo } from "./components/Details/Viamo";
import { Nebula } from "./components/Details/Nebula";
function App() { 
  return (
    <>
      
        <HashRouter basename='/challenge1'>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Viamo" element={<Viamo />} />
          <Route path="/Nebula" element={<Nebula />} />
        </Routes>
        </HashRouter>
      
    </>
  );
}

export default App;
