import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import BackPic from "/back.png";

export default function BackPage() {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);

  function handleSelect(region) {
    // optional: handle body region clicks
  }

  return (
    <div
      style={{
        width: "175vw",
        height: "100vh",
        color: "white",
        display: "flex",
      }}
    >
      {/* LEFT PANEL */}
      <div
        style={{
          width: "40%",
          padding: "40px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* BUTTON AT BOTTOM */}
        <button
          style={{ marginTop: "auto", marginBottom: "20px" }}
          onClick={() => navigate("/")}
        >
          <div className="text">
            <span>Go</span>
            <span>Back</span>
          </div>

          <div className="clone">
            <span>Go</span>
            <span>Back</span>
          </div>

          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            width="20px"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className="wk"  style={{ marginTop: "50px" }}>Weighted</p>

        <img src={BackPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "lat pull downs" && (
          <img
            src="/latpulldowns.png"
            alt="Lat Pull Downs"
            className="pic"
          />
        )}

          {selectedExercise === "barbell rows" && (
          <img
            src="/bentoverrow.png"
            alt="barbell rows"
            className="pic"
          />
        )}

          {selectedExercise === "seated cable rows" && (
          <img
            src="/seatrow.png"
            alt="Decline Bench Press"
            className="pic"
          />
        )}

        {selectedExercise === "pull up" && (
          <img
            src="/pullup.png"
            alt="Pull Up"
            className="pic"
          />
        )}

        {selectedExercise === "back extensions" && (
          <img
            src="/backext.png"
            alt="Back Extensions"
            className="pic"
          />
        )}

            {selectedExercise === "deadlift" && (
          <img
            src="/deadlift.png"
            alt="deadlifts"
            className="pic"
          />
        )}


        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("lat pull downs")}>
           Lat Pulldowns
          </li>
          <li onClick={() => setSelectedExercise("barbell rows")}>
            Barbell Rows
          </li>
            <li onClick={() => setSelectedExercise("seated cable rows")}>
            Seated Cable Rows
          </li>
        <li onClick={() => setSelectedExercise("deadlift")}>
            Dead Lifts
          </li>


        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("pull up")}>Pull Ups</li>
          <li onClick={() => setSelectedExercise("back extensions")}>Back Extensions</li>
        </ul>
      </div>

      
    </div>
  );
}