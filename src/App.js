import './App.css';
import Header from "./Components/Header";
import TechnicalSkills from "./Components/TechnicalSkills";
import Education from "./Components/Education";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <TechnicalSkills />
      <hr />
      <div className="content-container">
      <Education />
      <Experience />
      </div>
    </div>
  );
}

export default App;
