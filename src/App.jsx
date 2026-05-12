import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import Play from "./pages/Play";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<GamePlay />} />
        <Route path="/rankings" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}
