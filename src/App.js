import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import DayPlan from "./components/DayPlan.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <DayPlan />
      </div>
    </div>
  );
}

export default App;
