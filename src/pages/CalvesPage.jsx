import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import CalvesPic from "/calf.png";

export default function CalfsPage() {
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

        <img src={CalvesPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "stand calf raises" && (
          <img
            src="/cr.png"
            alt="Calf Raise"
            className="pic"
          />
        )}

          {selectedExercise === "leg press calf raise" && (
          <img
            src="/lcr.png"
            alt="leg press calf raise"
            className="pic"
          />
        )}

          {selectedExercise === "ab machine crunch" && (
          <img
            src="/mc.png"
            alt="Decline Bench Press"
            className="pic"
          />
        )}

        {selectedExercise === "Jump Rope" && (
          <img
            src="/jumprope.png"
            alt="jump rope"
            className="pic"
          />
        )}

        {selectedExercise === "single leg calf raises" && (
          <img
            src="/1lcr.png"
            alt="single leg calf raises"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("stand calf raises")}>
           Standing Calf Raises
          </li>
          <li onClick={() => setSelectedExercise("leg press calf raise")}>
            Leg Press Calf Raises
          </li>
        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("Jump Rope")}>Jump Rope</li>
          <li onClick={() => setSelectedExercise("single leg calf raises")}>Single Leg Calf Raises</li>
        </ul>
      </div>

      
    </div>
  );
}
