import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function ONasPage() {
    return (
        <div>
            <PageHero title="O nas" subtitle="Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o. — ponad 55 lat tradycji wiertniczej, nowoczesne technologie i niemiecki certyfikat DVGW BAU." icon={Icons.users} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <div className="section-tag">Nasza historia</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Od 1968 roku nieprzerwanie</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                                    Zakład Usług Studziennych to firma, w której właściciel wykonuje roboty wiertnicze nieprzerwanie od 1968 roku. Odwierty wykonujemy w różnych technologiach w zależności od warunków geologicznych.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                                    Dysponujemy wiedzą i urządzeniami pozwalającymi pracować w każdych warunkach. Wdrażamy nowoczesne technologie oraz wykorzystujemy materiały chroniące środowisko.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    Swoją działalność opieramy na wykwalifikowanych pracownikach, z którymi współpracujemy nawet od kilkunastu lat. Doskonały personel stanowi fundament naszej firmy i gwarancję dobrze wykonanej pracy.
                                </p>
                            </div>
                            <div>
                                <ImgPlaceholder label="Bernard i Marian Wójcik" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Certyfikat */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }} className="content-grid">
                            <div>
                                <ImgPlaceholder label="Certyfikat DVGW BAU W 120-1 / W 120-2" height={350} style={{ borderRadius: 16 }} />
                            </div>
                            <div>
                                <div className="section-tag">Certyfikat</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Jedyna firma w Polsce z certyfikatem DVGW BAU</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    Jako jedyna i pierwsza firma wiertnicza w Polsce posiadamy niemiecki certyfikat BAU.
                                    Certyfikaty W 120-1 (Brunnenbau — budowa studni) i W 120-2 (Geothermie — geotermia) otrzymują wyłącznie firmy spełniające rygorystyczne wymogi formalne, personalne i rzeczowe.
                                </p>
                                <CheckList items={[
                                    "W 120-1 — budowa, regeneracja, renowacja i likwidacja studni",
                                    "W 120-2 — technika wiercenia płytkiej energii geotermalnej",
                                    "Liczne referencje z wykonanych prac",
                                    "Specjalistyczny nadzór i kierownictwo",
                                    "Regularne szkolenia wiertaczy",
                                ]} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Członkostwa */}
            <section style={{ padding: "60px 24px", background: "white" }}>
                <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
                    <AnimatedSection>
                        <div className="section-tag">Członkostwa i współpraca</div>
                        <h2 className="section-title" style={{ fontSize: 28 }}>Współpracujemy z najlepszymi</h2>
                        <div style={{ display: "flex", justifyContent: "center", gap: 40, flexWrap: "wrap", marginTop: 32 }}>
                            {["PORT PC", "STIEBEL ELTRON", "AGH Kraków"].map((name, i) => (
                                <div key={i} style={{
                                    background: COLORS.offWhite, borderRadius: 14, padding: "24px 36px",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: COLORS.navy,
                                }}>
                                    {name}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Materiały */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 900, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Jakość</div>
                        <h2 className="section-title" style={{ fontSize: 28 }}>Stosowane materiały</h2>
                        <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                            Na każdym etapie świadczonych usług wykorzystujemy wyłącznie produkty najwyższej jakości renomowanych producentów.
                            Gotowe sondy gruntowe i studnie rozdzielaczowe posiadają Krajowe Deklaracje Właściwości Użytkowych.
                            Rury PCV do studni posiadają aktualny atest higieniczny do kontaktu z wodą pitną.
                        </p>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16 }}>
                            {["Rury studzienne PCV", "Rury osłonowe", "Sondy gruntowe PE", "Obsypka żwirowa"].map((item, i) => (
                                <div key={i} style={{
                                    background: "white", borderRadius: 12, padding: 20, textAlign: "center",
                                    fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 15,
                                    color: COLORS.navy, border: "1px solid rgba(0,0,0,0.06)",
                                }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
