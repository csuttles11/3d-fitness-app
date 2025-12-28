import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import GlutesPic from "/glutes.png";

export default function GlutesPage() {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);

  function handleSelect(region) {
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

      <div
        style={{
          width: "40%",
          padding: "40px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
   
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

        <p className="wk"  style={{ marginTop: "50px" }}>Compound</p>

        <img src={GlutesPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "hip thrust" && (
          <img
            src="/hip.png"
            alt="Hip Thrust"
            className="pic"
          />
        )}

          {selectedExercise === "glute bridges" && (
          <img
            src="/gbridges.png"
            alt="Glute Bridges"
            className="pic"
          />
        )}

          {selectedExercise === "cable kick" && (
          <img
            src="/kickbacks.png"
            alt="cable Kickbacks"
            className="pic"
          />
        )}

        {selectedExercise === "sumo deadlift" && (
          <img
            src="/sumodead.png"
            alt="Sumo deadlift"
            className="pic"
          />
        )}

        {selectedExercise === "reverse lunge" && (
          <img
            src="/revlunge.png"
            alt="Reverse Lunge"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("hip thrust")}>
            Hip Thrust
          </li>
          <li onClick={() => setSelectedExercise("cable kick")}>
            Cable Kickbacks
          </li>
          <li onClick={() => setSelectedExercise("sumo deadlift")}>
            Sumo Deadlifts
          </li>
        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("glute bridges")}>Glute Bridges</li>
          <li onClick={() => setSelectedExercise("reverse lunge")}>Reverse Lunges</li>
        </ul>
      </div>

      
    </div>
  );
}
