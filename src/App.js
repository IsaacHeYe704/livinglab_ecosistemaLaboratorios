import "./App.css";
import Ecosistems from "./pages/Ecosistems.jsx/Ecosistems";
import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import LabDetail from "./pages/LabDetail/LabDetail";
import unisabanaLogo from "./Assets/ecolabs.png";
import BottomLeftMenu from "./components/BottomLeftMenu/BottomLeftMenu";
import { useEffect, useState } from "react";
function App() {

  const [faculties, setfaculties] = useState([]);
  useEffect(() => {
    fetch('https://laboratorios.livinglabsabana.com/api/faculty')
  .then(response => response.json())
  .then(data => {
    let aux = [...data]
    aux.splice(5,0,{
      id:-1,
      color: "white",
      nombre: "Laboratorios por Facultad",
      center: true,
    })
    setfaculties(aux)});
  }, []);
  return (
    <div className="App">
      <div className="App-leftSide">
        <img className="App-logo" src={unisabanaLogo} />
        <Ecosistems faculties={faculties} />
      </div>
      <div className="App-rightSide">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/lab/:labName" element={<LabDetail  faculties ={faculties} />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
