import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { COLORS } from "../data/content.js";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>404 — Nie znaleziono strony | studnie.biz</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <section style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.deepBlue} 100%)`,
                padding: "120px 24px 80px",
                textAlign: "center",
            }}>
                <div style={{ maxWidth: 520 }}>
                    <div style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(80px, 15vw, 140px)",
                        lineHeight: 1,
                        background: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.accent})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        marginBottom: 16,
                    }}>
                        404
                    </div>
                    <h1 style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(22px, 3vw, 32px)",
                        color: "white",
                        marginBottom: 16,
                    }}>
                        Nie znaleziono strony
                    </h1>
                    <p style={{
                        fontSize: 17,
                        color: "rgba(255,255,255,0.6)",
                        lineHeight: 1.7,
                        marginBottom: 40,
                    }}>
                        Strona, której szukasz, nie istnieje lub została przeniesiona.
                    </p>
                    <button
                        className="btn-primary"
                        style={{ padding: "16px 36px", fontSize: 16 }}
                        onClick={() => navigate("/")}
                    >
                        Wróć na stronę główną
                    </button>
                </div>
            </section>
        </div>
    );
}
