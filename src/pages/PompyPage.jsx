import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { FeatureItem } from "../components/FeatureItem.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { InquiryForm } from "../components/InquiryForm.jsx";
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
            <PageHero title="Pompy ciepła" subtitle="Odwierty pod gruntowe wymienniki ciepła. Bezkonkurencyjna efektywność, niezawodność i komfort ogrzewania. Klasa energetyczna A+++." icon={Icons.flame}>
                <a href="#formularz" className="btn-primary">
                    Zamów wycenę {Icons.arrowRight}
                </a>
            </PageHero>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                            <div>
                                <div className="section-tag">Dlaczego gruntowa pompa ciepła?</div>
                                <h2 className="section-title !text-[32px]">Najwyższa efektywność energetyczna</h2>
                                <p className="text-gray-500 leading-relaxed text-base mb-7">
                                    W porównaniu z powietrznymi, gruntowe pompy ciepła osiągają lepsze współczynniki efektywności. Temperatura gruntu jest stabilna i w zimie osiąga wyższe wartości niż powietrza. Żywotność pomp ciepła szacowana jest na 30 lat.
                                </p>
                                <FeatureItem icon={Icons.shield} title="Bezkonkurencyjność" description="Najwyższa klasa energetyczna A+++. Dofinansowanie z funduszy unijnych. Stabilna temperatura gruntu." />
                                <FeatureItem icon={Icons.award} title="Niezawodność" description="Pompa ciepła jest sercem instalacji. Żywotność 30 lat. Brak niebezpieczeństwa wybuchu." />
                                <FeatureItem icon={Icons.home} title="Komfort" description="Bezobsługowe użytkowanie. Brak hałasu, brak jednostki zewnętrznej, brak specjalnego pomieszczenia." />
                            </div>
                            <div>
                                <ImgPlaceholder label="Schemat gruntowej pompy ciepła" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                                <div className="bg-off-white rounded-2xl p-7">
                                    <h4 className="font-heading font-bold text-navy mb-3">Wymogi prawne (powyżej 30m):</h4>
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
            </section>

            {/* Realizacje pomp */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Realizacje</div>
                        <h2 className="section-title !text-[32px]">Wybrane realizacje odwiertów</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 mt-8">
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
                                <div key={i} className="bg-white rounded-[14px] p-6 border border-black/6">
                                    <div className="font-heading font-extrabold text-lg text-navy mb-2">{item.loc}</div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                                    <div className="font-heading font-bold text-accent text-[15px]">{item.km} łącznie</div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Formularz */}
            <section id="formularz" className="py-20 px-6 bg-white scroll-mt-24">
                <div className="max-w-[600px] mx-auto">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <div className="section-tag">Zapytanie ofertowe</div>
                            <h2 className="section-title !text-[32px]">Zamów wycenę odwiertów</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Wypełnij formularz, a nasz dział techniczny skontaktuje się z Tobą w celu omówienia szczegółów.
                            </p>
                        </div>
                        <InquiryForm variant="pompa" />
                    </AnimatedSection>
                </div>
            </section>

            {/* Współpraca */}
            <section className="py-15 px-6 bg-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <AnimatedSection>
                        <p className="text-gray-500 text-base leading-relaxed">
                            Jesteśmy członkiem <strong className="text-navy">PORT PC</strong> — Polskiej Organizacji Rozwoju Pomp Ciepła.
                            Współpracujemy z producentem gruntowych pomp ciepła <strong className="text-navy">STIEBEL ELTRON</strong>.
                            Wykonujemy testy TRT we współpracy z <strong className="text-navy">AGH</strong>.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
