import "./App.css";
import Ecosistems from "./pages/Ecosistems.jsx/Ecosistems";
import Home from "./pages/Home.jsx";
import {  Routes, Route} from "react-router-dom";
import LabDetail from "./pages/LabDetail/LabDetail";
function App() {
  return (
    <div className="App">
      <div className="App-leftSide">
        <Ecosistems />
      </div>
      <div className="App-rightSide">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lab/:labName" element={<LabDetail/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
