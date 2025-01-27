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
      <div className="sidebar__tabs">
        {daysOfWeek.map((day) => (
          <button key={day} className="sidebar__button">
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
