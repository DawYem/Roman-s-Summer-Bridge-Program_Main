import { Navigate, Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ImpactPage from "./pages/ImpactPage";
import JoinPage from "./pages/JoinPage";
import ProgramsPage from "./pages/ProgramsPage";
import ExecutivesPage from "./pages/ExecutivesPage";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="programs" element={<ProgramsPage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="executives" element={<ExecutivesPage />} />
        <Route path="join" element={<JoinPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
