import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import AbPic from "/ab.png";

export default function AbsPage() {
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

        <img src={AbPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "russian twist" && (
          <img
            src="/RT.png"
            alt="Russian Twist"
            className="pic"
          />
        )}

          {selectedExercise === "cable crunch" && (
          <img
            src="/cc.png"
            alt="Cable Crunch"
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

        {selectedExercise === "plank" && (
          <img
            src="/plank.png"
            alt="Plank"
            className="pic"
          />
        )}

        {selectedExercise === "sit ups" && (
          <img
            src="/situp.png"
            alt="sit ups"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("russian twist")}>
           Weighted Russian Twist
          </li>
          <li onClick={() => setSelectedExercise("cable crunch")}>
            Cable Crutch
          </li>
          <li onClick={() => setSelectedExercise("ab machine crunch")}>
            Ab Machine Crunch
          </li>
        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("plank")}>Plank</li>
          <li onClick={() => setSelectedExercise("sit ups")}>Sit Ups</li>
        </ul>
      </div>

      
    </div>
  );
}
