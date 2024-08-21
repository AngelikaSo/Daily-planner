// Create a function that will display a list of hours from 6am to 10pm

import { useState } from "react";

const hours = [];
for (let i = 6; i <= 22; i++) {
  let hour = i > 12 ? i - 12 : i;
  let period = i >= 12 ? "PM" : "AM";
  let formatedHours = `${hour} ${period}`;
  hours.push(formatedHours);
}

console.log(hours);

const DayPlan = () => {
  const [hourly, setHourly] = useState([]);
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
