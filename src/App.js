import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import DayPlan from "./components/DayPlan.js";
import Goals from "./components/Goals.js";
import NotesComponent from "./components/NotesComponent.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DayPlan />
        <div className="aside-container">
          <Goals />
        </div>
      </div>
      <div className="notes-container">
        <NotesComponent />
      </div>
    </div>
  );
}

export default App;
