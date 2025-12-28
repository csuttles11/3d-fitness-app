import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "/src/App.css";
import "/src/button.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BodyModel from "/src/bodyModel";
import HamPic from "/ham.png";

export default function HamsPage() {
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

        <img src={HamPic} alt="Logo" className="pic"/>

        {/* IMAGE DISPLAY */}
        {selectedExercise === "rdls" && (
          <img
            src="/rdl.png"
            alt="RDL"
            className="pic"
          />
        )}

          {selectedExercise === "seated curls" && (
          <img
            src="/seatedcurl.png"
            alt="Seated Curls"
            className="pic"
          />
        )}

          {selectedExercise === "lying curls" && (
          <img
            src="/lycurl.png"
            alt="Lying Leg"
            className="pic"
          />
        )}

        {selectedExercise === "hamstring walkouts" && (
          <img
            src="/hamstringwalk.png"
            alt="Hamstring Walkouts"
            className="pic"
          />
        )}

        {selectedExercise === "ball curls" && (
          <img
            src="/ball.png"
            alt="Stability Ball Hamstring Curls"
            className="pic"
          />
        )}

        {/* EXERCISE LIST */}
        <ul className="wk">
          <li onClick={() => setSelectedExercise("rdls")}>
           RDL
          </li>
          <li onClick={() => setSelectedExercise("seated curls")}>
            Seated Leg Curls
          </li>
            <li onClick={() => setSelectedExercise("lying curls")}>
            Lying Leg Curls
          </li>

        </ul>

        <p className="wk">Body Weight</p>
        <ul className="wk">
          <li onClick={() => setSelectedExercise("hamstring walkouts")}>Hamstring Walkouts</li>
          <li onClick={() => setSelectedExercise("ball curls")}>Stability Ball Hamstring Curls</li>
        </ul>
      </div>

      
    </div>
  );
}
