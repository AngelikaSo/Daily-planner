import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import DayPlan from "./components/DayPlan.js";
import Goals from "./components/Goals.js";
import NotesComponent from "./components/NotesComponent.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <DayPlan />
        <div className="app__aside">
          <Goals />
        </div>
      </div>
      <div className="app__notes">
        <NotesComponent />
      </div>
    </div>
  );
}

export default App;
