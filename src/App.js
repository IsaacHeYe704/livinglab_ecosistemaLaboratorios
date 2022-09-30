import "./App.css";
import Ecosistems from "./pages/Ecosistems.jsx/Ecosistems";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import LabDetail from "./pages/LabDetail/LabDetail";
import unisabanaLogo from "./Assets/ecolabs.png";
import BottomLeftMenu from "./components/BottomLeftMenu/BottomLeftMenu";
function App() {
  return (
    <div className="App">
      <div className="App-leftSide">
        <img className="App-logo" src={unisabanaLogo} />
        <Ecosistems />
        <BottomLeftMenu/>
      </div>
      <div className="App-rightSide">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lab/:labName" element={<LabDetail />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
