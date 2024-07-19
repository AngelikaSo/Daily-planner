const Sidebar = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="sidebar">
      <div className="tabs">
        {daysOfWeek.map((day) => (
          <button key={day} className="tab-button">
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
