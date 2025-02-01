import { useState } from "react";

import { ReactComponent as WaterDrop } from "../assets/droplet-solid.svg";
import { ReactComponent as SmileFace } from "../assets/face-smile-regular.svg";
import { ReactComponent as SadFace } from "../assets/face-sad-cry-regular.svg";
import { ReactComponent as HappyFace } from "../assets/face-laugh-beam-regular.svg";
import { ReactComponent as LoveFace } from "../assets/face-grin-hearts-regular.svg";
import { ReactComponent as TiredFace } from "../assets/face-tired-regular.svg";

const Metrics = () => {
  const [selectedWater, setSelectedWater] = useState([]);
  const [selectedMood, setSelectedMood] = useState([]);

  const toggleSelection = (index, selected, setSelected) => {
    if (selected.includes(index)) {
      setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  return (
    <div className="metrics">
      <p>Weather</p>
      {[...Array(5)].map((_, index) => (
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

      <p>Mood</p>
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
    </div>
  );
};

export default Metrics;
