import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import ArmPic from "/arm.png";

export default function BicepPage() {
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

        <img src={ArmPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "dumbell curl" && (
          <img
            src="/dumcurl.png"
            alt="Curl"
            className="pic"
          />
        )}

          {selectedExercise === "preacher curl" && (
          <img
            src="/preach.png"
            alt="Precher Curl"
            className="pic"
          />
        )}

          {selectedExercise === "concentration curl" && (
          <img
            src="/concentrate.png"
            alt="Concentration Curl"
            className="pic"
          />
        )}

        {selectedExercise === "cable curls" && (
          <img
            src="/cablecurl.png"
            alt="Cable Curls"
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
          <li onClick={() => setSelectedExercise("dumbell curl")}>
            Dumbell Curl
          </li>
          <li onClick={() => setSelectedExercise("preacher curl")}>
            Preacher Curl
          </li>
          <li onClick={() => setSelectedExercise("concentration curl")}>
            Concentration Curls
          </li>
          <li onClick={() => setSelectedExercise("cable curls")}>
            Cable Curls
          </li>
        </ul>
      </div>

      
    </div>
  );
}
