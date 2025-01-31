const Metrics = () => {
  return (
    <div className="metrics">
      <label>
        Weather
        <input className="metrics__listInput" type="text" />
      </label>
      <label>
        Mood
        <input className="metrics__listInput" type="text" />
      </label>
      <label>
        Health
        <input className="metrics__listInput" type="text" />
      </label>
      <label>
        Water
        <input className="metrics__listInput" type="text" />
      </label>
      <label>
        Exercise
        <input className="metrics__listInput" type="text" />
      </label>
      <label>
        Productivity
        <input className="metrics__listInput" type="text" />
      </label>
    </div>
  );
};

export default Metrics;
