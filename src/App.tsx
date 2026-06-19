//Fonts

import "@fontsource/geist/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./Pages/landingPage/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
