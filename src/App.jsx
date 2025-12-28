import { Routes, Route } from "react-router-dom";
import BodyScene from "./bodyScene";

import ChestPage from "./pages/ChestPage.jsx";
import AbsPage from "./pages/AbsPage.jsx";
import CalvesPage from "./pages/CalvesPage.jsx";
import BackPage from "./pages/BackPage.jsx";
import QuadsPage from "./pages/QuadsPage.jsx";
import HamsPage from "./pages/HamsPage.jsx";
import GlutesPage from "./pages/Glutes.jsx";
import BicepPage from "./pages/BicepPage.jsx";
import TricepPage from "./pages/TricepPage.jsx";

// ✅ if bkgrd.png is in src/assets:
import bkgrd from "./assets/bkgrd.png";

export default function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      {/* ✅ global background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `url(${bkgrd})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* optional dark overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ✅ all pages render above it */}
      <div style={{ position: "relative", zIndex: 2, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<BodyScene />} />
          <Route path="/chest" element={<ChestPage />} />
          <Route path="/abs" element={<AbsPage />} />
          <Route path="/calf" element={<CalvesPage />} />
          <Route path="/back" element={<BackPage />} />
          <Route path="/quads" element={<QuadsPage />} />
          <Route path="/hamstrings" element={<HamsPage />} />
          <Route path="/glutes" element={<GlutesPage />} />
          <Route path="/bicep" element={<BicepPage />} />
          <Route path="/tricep" element={<TricepPage />} />
        </Routes>
      </div>
    </div>
  );
}
