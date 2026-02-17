import React from "react";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <h1>🌿 Farm Operations Dashboard</h1>

      <div className="cards">
        <div className="card stat">
          <h3>Crops</h3>
          <p>5 Active</p>
        </div>

        <div className="card stat">
          <h3>Livestock</h3>
          <p>42 Animals</p>
        </div>

        <div className="card stat">
          <h3>Pending Tasks</h3>
          <p>3 Tasks</p>
        </div>

        <div className="card stat">
          <h3>Weather</h3>
          <p>28°C ☀️</p>
        </div>
      </div>

      <div className="section">
        <h2>🌱 Active Crops</h2>
        <div className="card">
          <p>Maize</p>
          <p>Progress: 70%</p>
          <p>Harvest: 20 March</p>
        </div>
      </div>

      <div className="section">
        <h2>🐄 Livestock</h2>
        <div className="card">
          <p>Dairy Cattle</p>
          <p>Count: 20</p>
          <p>Production: 120L/day</p>
        </div>
      </div>

      <div className="section">
        <h2>📋 Today’s Tasks</h2>
        <div className="card overdue">
          <p>Vaccinate calves</p>
          <p>Priority: High</p>
        </div>
      </div>
    </div>
  );
}

export default App;
