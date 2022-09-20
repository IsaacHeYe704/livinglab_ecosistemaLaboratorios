import "./App.css"
import Ecosistems from "./pages/Ecosistems.jsx/Ecosistems";
import Home from "./pages/Home.jsx"
function App() {
  return (
    <div className="App">
      <div className="App-leftSide">  
      <Ecosistems/>
      </div>
      <div className="App-rightSide"> 
        <Home/>
      </div>
    </div>
  );
}

export default App;
