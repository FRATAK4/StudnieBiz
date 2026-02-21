import { useNavigate } from "react-router-dom";
import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { StatCounter } from "../components/StatCounter.jsx";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { FeatureItem } from "../components/FeatureItem.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";

export default function HomePage() {
    const navigate = useNavigate();

    const go = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <div>
            {/* Hero */}
            <section style={{
                minHeight: "100vh",
                background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.deepBlue} 50%, #0f3460 100%)`,
                display: "flex", alignItems: "center", position: "relative", overflow: "hidden",
                padding: "120px 24px 80px",
            }}>
                <div className="noise-overlay" />
                {/* Decorative circles */}
                <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
                <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,111,181,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="hero-grid">
                        <div>
                            <div className="animate-in animate-delay-1" style={{ marginBottom: 24 }}>
                <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(0,180,216,0.1)", border: "1px solid rgba(0,180,216,0.2)",
                    padding: "8px 16px", borderRadius: 50, color: COLORS.accent,
                    fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif",
                }}>
                  {Icons.shield} Od 1968 roku — ponad 35 000 odwiertów
                </span>
                            </div>

                            <h1 className="animate-in animate-delay-2" style={{
                                fontFamily: "'Outfit', sans-serif", fontWeight: 900,
                                fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.08,
                                color: "white", marginBottom: 24,
                            }}>
                                Wiercenia <br/>
                                <span style={{ background: "linear-gradient(135deg, #3d9be9, #00b4d8, #48cae4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  studni głębinowych
                </span><br/>
                                i odwierty pod<br/>
                                pompy ciepła
                            </h1>

                            <p className="animate-in animate-delay-3" style={{
                                fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.8,
                                maxWidth: 500, marginBottom: 36,
                            }}>
                                Jedyna firma wiertnicza w Polsce z niemieckim certyfikatem DVGW BAU.
                                Kompleksowa obsługa — od projektu, przez wiercenie, po dokumentację.
                            </p>

                            <div className="animate-in animate-delay-4" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                <button className="btn-primary" onClick={() => go("/kontakt")}>
                                    Bezpłatna wycena {Icons.arrowRight}
                                </button>
                                <button className="btn-outline" onClick={() => go("/realizacje")}>
                                    Nasze realizacje
                                </button>
                            </div>
                        </div>

                        <div className="animate-in animate-delay-5 hero-image-col">
                            <div style={{ position: "relative" }}>
                                <ImgPlaceholder label="Zdjęcie wiertnicy w terenie" height={480} style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.08)" }} />
                                {/* Floating stat card */}
                                <div className="glass" style={{
                                    position: "absolute", bottom: -20, left: -20,
                                    padding: "20px 24px", borderRadius: 16,
                                    animation: "float 4s ease-in-out infinite",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 32, color: COLORS.accent }}>60+</div>
                                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, fontWeight: 500 }}>Lat doświadczenia</div>
                                </div>
                                <div className="glass" style={{
                                    position: "absolute", top: 20, right: -10,
                                    padding: "16px 20px", borderRadius: 14,
                                    animation: "float 5s ease-in-out infinite",
                                    animationDelay: "1s",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 14, color: COLORS.accent }}>Certyfikat DVGW BAU</div>
                                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12 }}>W 120-1 & W 120-2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-image-col { display: none !important; }
          }
        `}</style>
            </section>

            {/* Stats bar */}
            <section className="water-gradient" style={{ padding: "60px 24px" }}>
                <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>
                    <StatCounter value={35000} suffix="+" label="wykonanych otworów" />
                    <StatCounter value={60} suffix="+" label="lat doświadczenia" />
                    <StatCounter value={10} label="lat gwarancji na studnię" />
                    <StatCounter value={1968} label="rok założenia" />
                </div>
            </section>

            {/* Services */}
            <section style={{ padding: "100px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <AnimatedSection style={{ textAlign: "center", marginBottom: 60 }}>
                        <div className="section-tag">Nasze usługi</div>
                        <h2 className="section-title">Kompleksowe usługi wiertnicze</h2>
                        <p className="section-subtitle" style={{ margin: "0 auto" }}>
                            Od studni głębinowych po odwierty pod pompy ciepła — realizujemy projekty na terenie całej Polski.
                        </p>
                    </AnimatedSection>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.water}
                                title="Studnie głębinowe"
                                description="Wiercenie, budowa i renowacja studni. Metoda udarowa na sprężone powietrze dla maksymalnej wydajności. 10 lat gwarancji."
                                onClick={() => go("/studnie")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.flame}
                                title="Pompy ciepła"
                                description="Odwierty pod gruntowe wymienniki ciepła. Klasa energetyczna A+++. Współpraca z STIEBEL ELTRON."
                                onClick={() => go("/pompy-ciepla")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.search}
                                title="Odwierty poszukiwawcze"
                                description="Małośrednicowe otwory określające wydajność ujęcia i skład wody. Minimalizacja ryzyka suchego odwiertu."
                                onClick={() => go("/odwierty")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.gauge}
                                title="Piezometry"
                                description="Otwory obserwacyjne do monitoringu wód podziemnych. Pobór próbek do analiz fizykochemicznych."
                                onClick={() => go("/piezometry")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.camera}
                                title="Kamerowanie studni"
                                description="Inspekcja TV stanu technicznego studni. Ocena filtra, zarurowania i elementów zatopionych w otworze."
                                onClick={() => go("/studnie")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.wrench}
                                title="Renowacja i likwidacja"
                                description="Renowacje mechaniczne i chemiczne. Usuwanie osadów żelazistych i manganowych. Likwidacja starych studni."
                                onClick={() => go("/studnie")}
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section style={{ padding: "100px 24px", background: "white" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="why-us-grid">
                        <AnimatedSection>
                            <ImgPlaceholder label="Zespół wiertniczy przy wiertnicy" height={500} style={{ borderRadius: 20 }} />
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="section-tag">Dlaczego my?</div>
                            <h2 className="section-title">Ponad pół wieku doświadczenia w branży wiertniczej</h2>
                            <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 36 }}>
                                Zakład Usług Studziennych działa nieprzerwanie od 1968 roku.
                                Jako jedyna firma wiertnicza w Polsce posiadamy niemiecki certyfikat DVGW BAU.
                            </p>
                            <FeatureItem icon={Icons.layers} title="Kompleksowość" description="Od projektu geologicznego, przez wiercenie, po dokumentację powykonawczą. Darmowa wizja lokalna." />
                            <FeatureItem icon={Icons.award} title="Certyfikat DVGW BAU" description="Certyfikaty W 120-1 (geotermia) i W 120-2 (budowa studni). Jedyna taka firma w Polsce." />
                            <FeatureItem icon={Icons.users} title="Doświadczony zespół" description="Wykwalifikowani pracownicy z wieloletnim stażem. Współpraca z AGH i PORT PC." />
                        </AnimatedSection>
                    </div>
                </div>
                <style>{`
          @media (max-width: 768px) {
            .why-us-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
            </section>

            {/* CTA */}
            <section style={{
                padding: "100px 24px",
                background: `linear-gradient(135deg, ${COLORS.navy}, ${COLORS.deepBlue})`,
                position: "relative", overflow: "hidden", textAlign: "center",
            }}>
                <div className="noise-overlay" />
                <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
                    <AnimatedSection>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(28px, 4vw, 44px)", color: "white", marginBottom: 20, lineHeight: 1.2 }}>
                            Potrzebujesz studni lub odwiertu pod pompę ciepła?
                        </h2>
                        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 36 }}>
                            Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna.
                            Działamy na terenie całej Polski.
                        </p>
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }} onClick={() => go("/kontakt")}>
                                {Icons.phone} Zadzwoń: 602 333 745
                            </button>
                            <button className="btn-outline" style={{ fontSize: 16, padding: "16px 36px" }} onClick={() => go("/kontakt")}>
                                {Icons.mail} Napisz do nas
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
