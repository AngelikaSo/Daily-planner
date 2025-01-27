import React, { useState } from "react";

const Goals = () => {
  const [goals, setGoals] = useState(["", "", ""]);
  const handleGoalChange = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  return (
    <div className="goals">
      <h2 className="goals__title">Goals:</h2>
      <ol className="goals__list">
        {goals.map((goal, index) => (
          <li className="goals__listItem" key={index}>
            <input
              className="goals__listInput"
              type="text"
              value={goal}
              onChange={(e) => handleGoalChange(index, e.target.value)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Goals;
