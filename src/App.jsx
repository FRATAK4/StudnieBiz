import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { Footer } from "./components/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import StudniePage from "./pages/StudniePage.jsx";
import PompyPage from "./pages/PompyPage.jsx";
import OdwiertyPage from "./pages/OdwiertyPage.jsx";
import PiezometryPage from "./pages/PiezometryPage.jsx";
import RealizacjePage from "./pages/RealizacjePage.jsx";
import ONasPage from "./pages/ONasPage.jsx";
import KontaktPage from "./pages/KontaktPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import "./styles/global.css";

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <div>
            <ScrollToTop />
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/studnie" element={<StudniePage />} />
                    <Route path="/pompy-ciepla" element={<PompyPage />} />
                    <Route path="/odwierty" element={<OdwiertyPage />} />
                    <Route path="/piezometry" element={<PiezometryPage />} />
                    <Route path="/realizacje" element={<RealizacjePage />} />
                    <Route path="/o-nas" element={<ONasPage />} />
                    <Route path="/kontakt" element={<KontaktPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
