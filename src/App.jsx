import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import Play from "./pages/Play";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing / Welcome Screen */}
        <Route path="/" element={<Landing />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        {/* Main Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<GamePlay />} />
        <Route path="/rankings" element={<Leaderboard />} />

      </Routes>
    </BrowserRouter>
  );
}
