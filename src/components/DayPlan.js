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
      <div className="dayPlan">
        <h2 className="dayPlan__title">Today's Plan</h2>
        <ul className="dayPlan__list">
          {hours.map((hour) => (
            <li className="dayPlan__listItem">
              <label className="dayPlan__listItem-time">{hour} </label>
              <div className="dayPlan__listItem-inputContainer">
                <input
                  className="dayPlan__listItem-input"
                  placeholder="Add activity..."
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DayPlan;
