import "./App.css";
import Ecosistems from "./pages/Ecosistems.jsx/Ecosistems";
import Home from "./pages/Home.jsx";
import ecolabs from "./Assets/ecolabs.png";
import BottomLeftMenu from "./components/BottomLeftMenu/BottomLeftMenu";

function App() {
  return (
    <div className="App">
      
      <div className="App-leftSide">
        <img className="App-logo" src={ecolabs} />
        <Ecosistems />
        <BottomLeftMenu/>
      </div>
      <div className="App-rightSide">
        <Home />
      </div>
    </div>
  );
}

export default App;
