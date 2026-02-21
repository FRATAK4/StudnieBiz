import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { PageHero } from "../components/PageHero.jsx";

const locations = [
    "Kluczbork", "Przykory", "Iwaniska", "Niemodlin", "Serock", "Prostki",
    "Racławice Śl.", "Pawłów", "Olesno", "Herby", "Skierniewice", "Pawłowiczki",
    "Głogów", "Czyżew", "Chocianowice", "Adamów", "Biechów", "Lubaczów",
    "Łyszkowice", "Zabierzów", "Bierawa", "Myszków", "Damnica", "Albertów",
    "Gałkowice Ocin", "Łukaszowice", "Dziurków", "Opole", "Zwonowice", "Sarnaki",
];

export default function RealizacjePage() {
    return (
        <div>
            <PageHero title="Nasze realizacje" subtitle="Ponad 35 000 wykonanych otworów na terenie całej Polski. Od studni dla domów jednorodzinnych po wielkie projekty publiczne." icon={Icons.award} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Mapa realizacji</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Działamy na terenie całej Polski</h2>
                        <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 40 }}>
                            Nasze realizacje obejmują setki lokalizacji — od małych studni przy domach jednorodzinnych po dziesiątki otworów dla obiektów publicznych i przemysłowych.
                        </p>

                        <div style={{
                            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
                            gap: 12,
                        }}>
                            {locations.map((loc, i) => (
                                <div key={i} style={{
                                    background: COLORS.offWhite, borderRadius: 10, padding: "14px 16px",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14,
                                    color: COLORS.navy, textAlign: "center",
                                    border: "1px solid rgba(0,0,0,0.04)",
                                }}>
                                    {loc}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Zaufali nam */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <AnimatedSection>
                        <div className="section-tag">Zaufali nam</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Referencje klientów</h2>
                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24, marginTop: 32 }}>
                            {["Zbyszko", "Życkowiacz", "Jamar", "Sokpol", "Hortex", "INDUSTRIA", "Andrzej Stępień LASPOL MAX"].map((name, i) => (
                                <div key={i} style={{
                                    background: "white", borderRadius: 12, padding: "20px 28px",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16,
                                    color: COLORS.navy, border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    {name}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
