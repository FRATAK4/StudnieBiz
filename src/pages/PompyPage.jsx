import { Helmet } from "react-helmet-async";
import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { FeatureItem } from "../components/FeatureItem.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function PompyPage() {
    return (
        <div>
            <Helmet>
                <title>Pompy ciepła — odwierty pod gruntowe wymienniki | studnie.biz</title>
                <meta name="description" content="Odwierty pod gruntowe pompy ciepła klasy A+++. Współpraca ze STIEBEL ELTRON i AGH. Certyfikat DVGW BAU W 120-2. Członek PORT PC." />
                <meta property="og:title" content="Pompy ciepła — odwierty pod gruntowe wymienniki | studnie.biz" />
                <meta property="og:description" content="Odwierty pod gruntowe pompy ciepła klasy A+++. Współpraca ze STIEBEL ELTRON i AGH. Certyfikat DVGW BAU W 120-2." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/pompy-ciepla" />
                <link rel="canonical" href="https://studnie.biz/pompy-ciepla" />
            </Helmet>
            <PageHero title="Pompy ciepła" subtitle="Odwierty pod gruntowe wymienniki ciepła. Bezkonkurencyjna efektywność, niezawodność i komfort ogrzewania. Klasa energetyczna A+++." icon={Icons.flame} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <div className="section-tag">Dlaczego gruntowa pompa ciepła?</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Najwyższa efektywność energetyczna</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    W porównaniu z powietrznymi, gruntowe pompy ciepła osiągają lepsze współczynniki efektywności. Temperatura gruntu jest stabilna i w zimie osiąga wyższe wartości niż powietrza. Żywotność pomp ciepła szacowana jest na 30 lat.
                                </p>
                                <FeatureItem icon={Icons.shield} title="Bezkonkurencyjność" description="Najwyższa klasa energetyczna A+++. Dofinansowanie z funduszy unijnych. Stabilna temperatura gruntu." />
                                <FeatureItem icon={Icons.award} title="Niezawodność" description="Pompa ciepła jest sercem instalacji. Żywotność 30 lat. Brak niebezpieczeństwa wybuchu." />
                                <FeatureItem icon={Icons.home} title="Komfort" description="Bezobsługowe użytkowanie. Brak hałasu, brak jednostki zewnętrznej, brak specjalnego pomieszczenia." />
                            </div>
                            <div>
                                <ImgPlaceholder label="Schemat gruntowej pompy ciepła" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div style={{ background: COLORS.offWhite, borderRadius: 16, padding: 28 }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: COLORS.navy, marginBottom: 12 }}>Wymogi prawne (powyżej 30m):</h4>
                                    <CheckList items={[
                                        "Projekt robót geologicznych",
                                        "Zgłoszenie do administracji geologicznej",
                                        "Plan ruchu zakładu (powyżej 100m)",
                                        "Pomiar termiczny otworów",
                                        "Dokumentacja powykonawcza",
                                    ]} />
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Realizacje pomp */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Realizacje</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Wybrane realizacje odwiertów</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginTop: 32 }}>
                            {[
                                { loc: "Chęciny", desc: "76 otworów × 120m — Europejskie Centrum Edukacji Geologicznej", km: "9,1 km" },
                                { loc: "Zagnańsk", desc: "49 otworów × 100m — Zespół Szkoły Podstawowej i Hala", km: "4,9 km" },
                                { loc: "Sobów", desc: "37 otworów × 200m — Dom Pomocy Społecznej", km: "6,5 km" },
                                { loc: "Piekoszów", desc: "50 otworów × 100m — Hala produkcyjna WW TECH", km: "5,0 km" },
                                { loc: "Zamość", desc: "44 otwory × 100m — Zespół Szkół Ponadgimnazjalnych nr 4", km: "4,4 km" },
                                { loc: "Mariówka", desc: "48 otworów × 100m — Dom Generalny Zgromadzenia Sióstr Służek NMP Niepokalanej", km: "4,8 km" },
                                { loc: "Osiny", desc: "40 otworów × 100m — Zakład Opiekuńczo-Leczniczy", km: "4,0 km" },
                                { loc: "Miechów", desc: "26 otworów × 100m — Plebania i Dom Sióstr Parafii Grobu Bożego", km: "2,6 km" },
                                { loc: "Dziekanowice", desc: "22 otwory × 100m — Budynek Szkoły", km: "2,2 km" },
                                { loc: "Tarnów", desc: "12 otworów × 100m — Budynek mieszkalny wielorodzinny", km: "1,2 km" },
                                { loc: "Baćkowice", desc: "5 otworów × 195m — Budynek wielofunkcyjny Urzędu Gminy", km: "0,9 km" },
                            ].map((item, i) => (
                                <div key={i} style={{
                                    background: "white", borderRadius: 14, padding: 24,
                                    border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 18, color: COLORS.navy, marginBottom: 8 }}>{item.loc}</div>
                                    <p style={{ color: COLORS.gray, fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
                                    <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: COLORS.accent, fontSize: 15 }}>{item.km} łącznie</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Współpraca */}
            <section style={{ padding: "60px 24px", background: "white" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
                    <AnimatedSection>
                        <p style={{ color: COLORS.gray, fontSize: 16, lineHeight: 1.8 }}>
                            Jesteśmy członkiem <strong style={{ color: COLORS.navy }}>PORT PC</strong> — Polskiej Organizacji Rozwoju Pomp Ciepła.
                            Współpracujemy z producentem gruntowych pomp ciepła <strong style={{ color: COLORS.navy }}>STIEBEL ELTRON</strong>.
                            Wykonujemy testy TRT we współpracy z <strong style={{ color: COLORS.navy }}>AGH</strong>.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
