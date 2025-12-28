import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import ArmPic from "/arm2.png";

export default function TricepPage() {
  const navigate = useNavigate();
  const [selectedExercise, setSelectedExercise] = useState(null);

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

        <img src={ArmPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "tricep pushdown" && (
          <img
            src="/pushdown.png"
            alt="Tricep Pushdown"
            className="pic"
          />
        )}

          {selectedExercise === "skull crushers" && (
          <img
            src="/skull.png"
            alt="Skull Crushers"
            className="pic"
          />
        )}

          {selectedExercise === "tri ext" && (
          <img
            src="/tricepext.png"
            alt="Tricep Extensions"
            className="pic"
          />
        )}

        {selectedExercise === "dips" && (
          <img
            src="/tridip.png"
            alt="dips"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("tricep pushdown")}>
            Tricep Pushdown
          </li>
          <li onClick={() => setSelectedExercise("skull crushers")}>
            Skull Crushers
          </li>
          <li onClick={() => setSelectedExercise("tri ext")}>
            Tricep Extensions
          </li>
        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("dips")}>Dips</li>
        </ul>
      </div>

      
    </div>
  );
}
