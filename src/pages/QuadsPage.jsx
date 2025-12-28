import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import QuadPic from "/quad.png";

export default function QuadsPage() {
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

        <img src={QuadPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "back squat" && (
          <img
            src="/backsquat.png"
            alt="Back Squat"
            className="pic"
          />
        )}

          {selectedExercise === "leg extensions" && (
          <img
            src="/legext.png"
            alt="leg extensions"
            className="pic"
          />
        )}

          {selectedExercise === "barbell lunges" && (
          <img
            src="/lunge.png"
            alt="Barbell Lunges"
            className="pic"
          />
        )}

        {selectedExercise === "wall sit" && (
          <img
            src="/wallsit.png"
            alt="Wall Sit"
            className="pic"
          />
        )}

        {selectedExercise === "step up" && (
          <img
            src="/stepup.png"
            alt="Step Ups"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("back squat")}>
           Back Squat
          </li>
          <li onClick={() => setSelectedExercise("leg extensions")}>
            Leg Extensions
          </li>
            <li onClick={() => setSelectedExercise("barbell lunges")}>
            Barbell Lunges
          </li>

        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("wall sit")}>Wall Sit</li>
          <li onClick={() => setSelectedExercise("step up")}>Step Ups</li>
        </ul>
      </div>

      
    </div>
  );
}
