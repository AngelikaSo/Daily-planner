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
  return (
    <>
      <div className="day-plan">
        <h2>Today's Plan</h2>
        <ul className="time-slots">
          {hours.map((hour) => (
            <li>
              <label className="time">{hour} </label>
              <div className="activity-container">
                <input className="activity" placeholder="Add activity..." />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DayPlan;
