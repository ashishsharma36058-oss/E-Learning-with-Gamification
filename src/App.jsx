import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as AuthModule from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import GamePlay from "./pages/GamePlay";
import Leaderboard from "./pages/Leaderboard";
import Play from "./pages/Play";

const Auth = AuthModule.default || AuthModule.Auth || AuthModule.Login;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/game" element={<GamePlay />} />
        <Route path="/rankings" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}
