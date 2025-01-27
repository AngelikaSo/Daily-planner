import React, { useEffect, useState } from "react";

const WeekDateRange = () => {
  const [weekRange, setWeekRange] = useState("");

  useEffect(() => {
    const today = new Date();
    const dayOffset = today.getDay() === 0 ? -6 : 1 - today.getDay();
    const monday = new Date(today);
    monday.setDate(today.getDate() + dayOffset);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const options = { month: "short", day: "numeric" };
    const formattedRange = `Week of: ${monday.toLocaleDateString(
      "en-US",
      options
    )} - ${sunday.toLocaleDateString("en-US", options)}`;

    setWeekRange(formattedRange);
  }, []);

  return <p className="header__content">{weekRange}</p>;
};

export default WeekDateRange;
