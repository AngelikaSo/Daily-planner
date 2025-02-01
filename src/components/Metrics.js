import { useState } from "react";

import { ReactComponent as WaterDrop } from "../assets/droplet-solid.svg";
import { ReactComponent as SmileFace } from "../assets/face-smile-regular.svg";
import { ReactComponent as SadFace } from "../assets/face-sad-cry-regular.svg";
import { ReactComponent as HappyFace } from "../assets/face-laugh-beam-regular.svg";
import { ReactComponent as LoveFace } from "../assets/face-grin-hearts-regular.svg";
import { ReactComponent as TiredFace } from "../assets/face-tired-regular.svg";
import { ReactComponent as Health } from "../assets/heart-pulse-solid.svg";
import { ReactComponent as Exercise } from "../assets/person-running-solid.svg";
import { ReactComponent as Productivity } from "../assets/star-solid.svg";
//import { ReactComponent as Sleep } from "../assets/bed-solid.svg";
import { ReactComponent as Reading } from "../assets/book-open-reader-solid.svg";
import { ReactComponent as Energy1 } from "../assets/battery-empty-solid.svg";
import { ReactComponent as Energy2 } from "../assets/battery-quarter-solid.svg";
import { ReactComponent as Energy3 } from "../assets/battery-half-solid.svg";
import { ReactComponent as Energy4 } from "../assets/battery-three-quarters-solid.svg";
import { ReactComponent as Energy5 } from "../assets/battery-full-solid.svg";

import { ReactComponent as Sun } from "../assets/sun-solid.svg";
import { ReactComponent as Storm } from "../assets/cloud-bolt-solid.svg";
import { ReactComponent as Rain } from "../assets/cloud-rain-solid.svg";
import { ReactComponent as Snow } from "../assets/snowflake-solid.svg";
import { ReactComponent as Wind } from "../assets/wind-solid.svg";

const Metrics = () => {
  const [selectedWater, setSelectedWater] = useState([]);
  const [selectedMood, setSelectedMood] = useState([]);
  const [selectedHealth, setSelectedHealth] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [selectedProductivity, setSelectedProductivity] = useState([]);
  const [selectedWeather, setSelectedWeather] = useState([]);
  const [selectedSleep, setSelectedSleep] = useState([]);
  const [selectedReading, setSelectedReading] = useState([]);

  const toggleSelection = (index, selected, setSelected) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="metrics">
      <h3 className="metrics__title">Sleep / Rest</h3>
      {[Energy1, Energy2, Energy3, Energy4, Energy5].map((Icon, index) => (
        <Icon
          className="metrics__icon metrics__icon-mood"
          key={index}
          onClick={() =>
            toggleSelection(index, selectedSleep, setSelectedSleep)
          }
          style={{
            fill: selectedSleep.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}

      <h3 className="metrics__title">Water</h3>
      {[...Array(6)].map((_, index) => (
        <WaterDrop
          className="metrics__icon"
          key={index}
          onClick={() =>
            toggleSelection(index, selectedWater, setSelectedWater)
          }
          style={{
            fill: selectedWater.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}

      <h3 className="metrics__title">Mood</h3>
      {[SmileFace, SadFace, LoveFace, HappyFace, TiredFace].map(
        (Icon, index) => (
          <Icon
            className="metrics__icon metrics__icon-mood"
            key={index}
            onClick={() =>
              toggleSelection(index, selectedMood, setSelectedMood)
            }
            style={{
              fill: selectedMood.includes(index) ? "#d89696" : "#e0e0e0",
            }}
          />
        )
      )}

      <h3 className="metrics__title">Health</h3>
      {[...Array(5)].map((_, index) => (
        <Health
          className="metrics__icon metrics__icon-health"
          key={index}
          onClick={() =>
            toggleSelection(index, selectedHealth, setSelectedHealth)
          }
          style={{
            fill: selectedHealth.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}

      <h3 className="metrics__title">Exercise</h3>
      {[...Array(5)].map((_, index) => (
        <Exercise
          className="metrics__icon metrics__icon-exercise"
          key={index}
          onClick={() =>
            toggleSelection(index, selectedExercise, setSelectedExercise)
          }
          style={{
            fill: selectedExercise.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}

      <h3 className="metrics__title">Productivity</h3>
      {[...Array(5)].map((_, index) => (
        <Productivity
          className="metrics__icon metrics__icon-exercise"
          key={index}
          onClick={() =>
            toggleSelection(
              index,
              selectedProductivity,
              setSelectedProductivity
            )
          }
          style={{
            fill: selectedProductivity.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}

      <h3 className="metrics__title">Reading</h3>
      {[...Array(5)].map((_, index) => (
        <Reading
          className="metrics__icon metrics__icon-reading"
          key={index}
          onClick={() =>
            toggleSelection(index, selectedReading, setSelectedReading)
          }
          style={{
            fill: selectedReading.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}

      <h3 className="metrics__title">Weather</h3>
      {[Sun, Rain, Storm, Snow, Wind].map((Icon, index) => (
        <Icon
          className="metrics__icon metrics__icon-mood"
          key={index}
          onClick={() =>
            toggleSelection(index, selectedWeather, setSelectedWeather)
          }
          style={{
            fill: selectedWeather.includes(index) ? "#d89696" : "#e0e0e0",
          }}
        />
      ))}
    </div>
  );
};

export default Metrics;
