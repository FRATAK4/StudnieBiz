import { Helmet } from "react-helmet-async";
import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { FeatureItem } from "../components/FeatureItem.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function StudniePage() {
    return (
        <div>
            <Helmet>
                <title>Studnie głębinowe — wiercenie, budowa, renowacja | studnie.biz</title>
                <meta name="description" content="Wiercenie studni głębinowych metodą udarową na sprężone powietrze. Budowa, renowacja, kamerowanie i likwidacja studni. 10 lat gwarancji. Działamy od 1968 roku." />
                <meta property="og:title" content="Studnie głębinowe — wiercenie, budowa, renowacja | studnie.biz" />
                <meta property="og:description" content="Wiercenie studni głębinowych metodą udarową na sprężone powietrze. Budowa, renowacja, kamerowanie i likwidacja. 10 lat gwarancji." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/studnie" />
                <link rel="canonical" href="https://studnie.biz/studnie" />
            </Helmet>
            <PageHero title="Studnie głębinowe" subtitle="Wiercenie, budowa, renowacja i likwidacja studni głębinowych. Metoda udarowa na sprężone powietrze dla maksymalnej wydajności." icon={Icons.water} />

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }} className="content-grid">
                            <div>
                                <div className="section-tag">Budowa studni</div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Kompleksowa budowa studni głębinowych</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
                                    Woda jest jednym z tych dóbr, bez których życie jest zupełnie niemożliwe.
                                    Coraz chętniej decydujemy się na własną studnię, nawet jeśli istnieje możliwość przyłączenia z sieci wodociągowej.
                                    Jedyny koszt użytkowania to energia zasilająca pompę głębinową.
                                </p>
                                <CheckList items={[
                                    "Rozpoznanie hydrogeologiczne",
                                    "Opracowanie projektu robót geologicznych",
                                    "Wiercenie na sprężone powietrze, udarowo-okrętnie lub na płuczkę wiertniczą",
                                    "Opracowanie dokumentacji hydrogeologicznej",
                                    "Opracowanie operatu wodnoprawnego",
                                    "Uzbrojenie i obudowa studni",
                                    "Pompowania oczyszczające i pomiarowe",
                                    "Analizy fizykochemiczne i bakteriologiczne wody",
                                ]} />
                            </div>
                            <div>
                                <ImgPlaceholder label="Wiercenie na sprężone powietrze" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div style={{ background: "linear-gradient(135deg, rgba(26,111,181,0.08), rgba(0,180,216,0.08))", borderRadius: 16, padding: 28, marginBottom: 24, border: "1px solid rgba(26,111,181,0.12)" }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 16, color: COLORS.navy, marginBottom: 8 }}>
                                        Wiercenie w zagospodarowanym ogrodzie?
                                    </h4>
                                    <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 14 }}>
                                        Posiadamy również niewielkie urządzenia wiertnicze, które poradzą sobie nawet w zagospodarowanym ogrodzie — bez konieczności niszczenia terenu.
                                    </p>
                                </div>
                                <div style={{ background: COLORS.offWhite, borderRadius: 16, padding: 28 }}>
                                    <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: COLORS.navy, marginBottom: 12 }}>
                                        Wykonujemy studnie dla:
                                    </h4>
                                    <CheckList items={[
                                        "Klientów indywidualnych (gospodarstwa domowe)",
                                        "Jednostek samorządowych i wodociągów",
                                        "Rolnictwa i nawadniania obiektów sportowych",
                                        "Przemysłu (zakłady mleczarskie, rozlewnie wód)",
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

            {/* Dlaczego własna studnia */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Korzyści</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Co daje własna studnia?</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 40 }} className="benefits-grid">
                            <div style={{ background: "white", borderRadius: 16, padding: 32, border: "1px solid rgba(0,0,0,0.06)" }}>
                                <div style={{ color: COLORS.blue, marginBottom: 16 }}>{Icons.shield}</div>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, color: COLORS.navy, marginBottom: 12 }}>Oszczędność</h3>
                                <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15 }}>
                                    Jedyny koszt użytkowania studni głębinowej to energia elektryczna zasilająca pompę głębinową oraz jej amortyzacja.
                                </p>
                            </div>
                            <div style={{ background: "white", borderRadius: 16, padding: 32, border: "1px solid rgba(0,0,0,0.06)" }}>
                                <div style={{ color: COLORS.blue, marginBottom: 16 }}>{Icons.water}</div>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, color: COLORS.navy, marginBottom: 12 }}>Niezależność</h3>
                                <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15 }}>
                                    Bez względu na pogodę, porę roku czy suszę nie martwisz się brakiem wody, spadkiem ciśnienia w sieci wodociągowej oraz wahaniami cenowymi.
                                </p>
                            </div>
                            <div style={{ background: "white", borderRadius: 16, padding: 32, border: "1px solid rgba(0,0,0,0.06)" }}>
                                <div style={{ color: COLORS.blue, marginBottom: 16 }}>{Icons.gauge}</div>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, color: COLORS.navy, marginBottom: 12 }}>Wydajność i pewność</h3>
                                <p style={{ color: COLORS.gray, lineHeight: 1.7, fontSize: 15 }}>
                                    Jeśli przyłączenie do sieci wodociągowej jest niemożliwe lub nieopłacalne, własna studnia jest doskonałym sposobem na zapewnienie wody na terenie inwestycji.
                                </p>
                            </div>
                        </div>

                        {/* Informacja prawna */}
                        <div style={{
                            marginTop: 40, background: "linear-gradient(135deg, rgba(26,111,181,0.08), rgba(0,180,216,0.08))",
                            borderRadius: 16, padding: 32, border: "1px solid rgba(26,111,181,0.12)",
                        }}>
                            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 18, color: COLORS.navy, marginBottom: 12 }}>
                                Warto wiedzieć
                            </h4>
                            <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 15 }}>
                                Brak konieczności opracowania projektu robót geologicznych dla otworów o głębokości do 30 m
                                w celu wykonywania ujęć wód podziemnych na potrzeby poboru wód podziemnych
                                w ilości nieprzekraczającej 5 m³ na dobę.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
                <style>{`
          @media (max-width: 768px) { .benefits-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>

            {/* Kamerowanie i renowacja */}
            <section style={{ padding: "80px 24px", background: COLORS.offWhite }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div className="section-tag">Serwis</div>
                        <h2 className="section-title" style={{ fontSize: 32 }}>Kamerowanie, renowacja i likwidacja studni</h2>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 40 }} className="content-grid">
                            <div>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    W studniach głębinowych podczas eksploatacji zachodzi wiele procesów fizykochemicznych wpływających na zmianę przepustowości filtra. Oferujemy inspekcję kamerą TV jako podstawową formę oceny stanu technicznego studni.
                                </p>
                                <FeatureItem icon={Icons.camera} title="Inspekcja TV" description="Kamerowanie to podstawowa forma oceny stanu technicznego studni — jej konstrukcji, zarurowania i zatopionych elementów." />
                                <FeatureItem icon={Icons.wrench} title="Renowacja" description="Metody mechaniczne (szczotkowanie, tłokowanie, airlift) oraz chemiczne — usuwanie osadów żelazistych, manganowych i węglanowych." />
                                <FeatureItem icon={Icons.layers} title="Likwidacja" description="Profesjonalna likwidacja studni, które nie nadają się już do renowacji. Pełna dokumentacja." />
                                <FeatureItem icon={Icons.shield} title="Prace ratunkowe" description="Usunięcie ze studni zerwanej pompy głębinowej oraz innych zatopionych w otworze elementów (rurociąg, lina stalowa)." />
                            </div>
                            <div>
                                <ImgPlaceholder label="Inspekcja TV studni" height={300} style={{ borderRadius: 16, marginBottom: 16 }} />
                                <ImgPlaceholder label="Prace renowacyjne" height={200} style={{ borderRadius: 16 }} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Gwarancja */}
            <section style={{ padding: "60px 24px", background: "linear-gradient(135deg, #0d2847, #1a6fb5)" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", color: "white" }}>
                    <AnimatedSection>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(36px, 5vw, 56px)", marginBottom: 12 }}>
                            10 lat gwarancji
                        </div>
                        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)" }}>
                            Na wykonaną studnię głębinową. Stosowane materiały posiadają atest higieniczny do kontaktu z wodą pitną.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
