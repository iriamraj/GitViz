//Fonts

import "@fontsource/geist/latin-700.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-700.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./Pages/landingPage/LandingPage";
import { lazy, Suspense } from "react";

const DashboardPage = lazy(() => import("./Pages/dashboard/DashboardPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <Suspense>
              <DashboardPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
