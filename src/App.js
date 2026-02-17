import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedCard, setSelectedCard] = useState("");

  const handleClick = (card) => {
    setSelectedCard(card === selectedCard ? "" : card);
  };

  return (
    <div className="dashboard">
      <h1>🌿 Farm Operations Dashboard</h1>

      <div className="cards">
        <div className="card stat" onClick={() => handleClick("crops")}>
          <h3>Crops</h3>
          <p>5 Active</p>
        </div>

        <div className="card stat" onClick={() => handleClick("livestock")}>
          <h3>Livestock</h3>
          <p>42 Animals</p>
        </div>

        <div className="card stat" onClick={() => handleClick("tasks")}>
          <h3>Pending Tasks</h3>
          <p>3 Tasks</p>
        </div>

        <div className="card stat" onClick={() => handleClick("weather")}>
          <h3>Weather</h3>
          <p>28°C ☀️</p>
        </div>
      </div>

      <div className="info-box">
        {selectedCard === "crops" && (
          <div>
            <h2>🌱 Crops Info</h2>
            <p>Maize: Needs 7-10 days to germinate, water regularly, harvest after 90 days.</p>
            <p>Wheat: Plant in early spring, maintain moisture, harvest when golden brown.</p>
          </div>
        )}
        {selectedCard === "livestock" && (
          <div>
            <h2>🐄 Livestock Info</h2>
            <p>Dairy Cattle: Provide clean water, daily milking, proper feed for milk production.</p>
            <p>Chickens: Keep coops clean, feed balanced diet, collect eggs daily.</p>
          </div>
        )}
        {selectedCard === "tasks" && (
          <div>
            <h2>📋 Tasks Info</h2>
            <p>Vaccinate calves: Ensure health and growth of livestock.</p>
            <p>Water crops: Daily maintenance to keep crops healthy.</p>
          </div>
        )}
        {selectedCard === "weather" && (
          <div>
            <h2>☀️ Weather Info</h2>
            <p>Temperature: 28°C</p>
            <p>Humidity: 60%</p>
            <p>Wind: 10km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
