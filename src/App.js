import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import DayPlan from "./components/DayPlan.js";
import Goals from "./components/Goals.js";
import NotesComponent from "./components/NotesComponent.js";
import Todo from "./components/ToDoList.js";
import DailyAffirmations from "./components/DailyAffirmations.js";
import Metrics from "./components/Metrics.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <Sidebar />
        <Metrics />
        <DayPlan />
        <Goals />
        <Todo />
        <DailyAffirmations />
        <div className="app__notes">
          <NotesComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
