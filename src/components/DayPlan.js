// Create a function that will display a list of hours from 6am to 10pm

const DayPlan = () => {
  return (
    <div className="day-plan">
      <h2>Today's Plan</h2>
      <div className="time-slots">
        <span className="time">6:00 AM</span>
        <input className="activity" placeholder="Add activity..." />
      </div>
    </div>
  );
};

export default DayPlan;
