import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import ChestPic from "/chestpic.png";

export default function ChestPage() {
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

        <p className="wk"  style={{ marginTop: "50px" }}>Compound</p>

        <img src={ChestPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "bench" && (
          <img
            src="/bpd.jpg"
            alt="Bench Press"
            className="pic"
          />
        )}

          {selectedExercise === "incline" && (
          <img
            src="/inc.png"
            alt="Incline Bench Press"
            className="pic"
          />
        )}

          {selectedExercise === "decline" && (
          <img
            src="/dec.png"
            alt="Decline Bench Press"
            className="pic"
          />
        )}

        {selectedExercise === "pushup" && (
          <img
            src="/push.png"
            alt="Push Up"
            className="pic"
          />
        )}

        {selectedExercise === "dips" && (
          <img
            src="/dips.png"
            alt="dips"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("bench")}>
            Bench Press
          </li>
          <li onClick={() => setSelectedExercise("incline")}>
            Incline Bench Press
          </li>
          <li onClick={() => setSelectedExercise("decline")}>
            Decline Bench Press
          </li>
        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("pushup")}>Push-Ups</li>
          <li onClick={() => setSelectedExercise("dips")}>Dips</li>
        </ul>
      </div>

      
    </div>
  );
}
