import React, { useState } from "react";

const Goals = () => {
  const [goals, setGoals] = useState([" ", " ", " "]); //Init state with empty string

  const handleGoalCahnge = (index, value) => {
    const newGoals = [...goals];
    newGoals[index] = value;
    setGoals(newGoals);
  };

  return (
    <div className="goals-container">
      <h1 className="goals-title">Goals:</h1>
      <ol className="golas">
        {goals.map((goal, index) => (
          <li className="goal" key={index}>
            <input
              className="goal-input"
              type="text"
              value={goal}
              onChange={(e) => handleGoalCahnge(index, e.target.value)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Goals;
