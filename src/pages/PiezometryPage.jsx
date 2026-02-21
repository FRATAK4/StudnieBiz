import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function PiezometryPage() {
    return (
        <div>
            <PageHero title="Piezometry obserwacyjne" subtitle="Otwory hydrogeologiczne badawcze służące do monitoringu wód podziemnych — pomiar poziomu zwierciadła wody i analiza zanieczyszczeń." icon={Icons.gauge} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Monitoring wód podziemnych</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    Piezometr to małośrednicowy otwór hydrogeologiczny służący do pomiaru głębokości zwierciadła wody oraz zanieczyszczeń wód podziemnych. W odróżnieniu od studni, nie zabudowuje się w nich pomp — służą jedynie do okresowego pobierania próbek wody.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    Wszelkie obiekty, których funkcjonowanie może powodować zanieczyszczenie wód podziemnych, powinny wyposażyć swój teren w punkty obserwacyjne. Piezometry stanowią uzupełnienie systemu monitoringu służącego kontroli odwodnienia i zasięgu leja depresji.
                                </p>
                                <CheckList items={[
                                    "Pomiar poziomu zwierciadła wody",
                                    "Pobieranie próbek do analiz fizykochemicznych",
                                    "Kontrola odwodnienia górotworu",
                                    "Monitorowanie zasięgu leja depresji",
                                    "Opracowanie projektu robót geologicznych",
                                    "Dokumentacja geologiczna",
                                ]} />
                            </div>
                            <div>
                                <ImgPlaceholder label="Pobór próbek z piezometru" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div style={{ background: COLORS.offWhite, borderRadius: 16, padding: 28 }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>Kto potrzebuje piezometrów?</h4>
                                    <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15 }}>
                                        Zakłady przemysłowe, składowiska odpadów, kopalnie, stacje paliw i inne obiekty mogące wpływać na stan wód podziemnych.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>
        </div>
    );
}
