import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import {Nav} from "./components/Nav/Nav"
import { Viamo } from "./components/Details/Viamo";
import { Nebula } from "./components/Details/Nebula";
function App() {
  return (
    <>
      <div>
        <Nav />
        <BrowserRouter basename='/challenge1'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Viamo" element={<Viamo />} />
          <Route path="/Nebula" element={<Nebula />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
