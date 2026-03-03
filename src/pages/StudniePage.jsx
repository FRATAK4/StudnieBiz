import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { stats } from "../data/content.js";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { FeatureItem } from "../components/FeatureItem.jsx";
import { InquiryForm } from "../components/InquiryForm.jsx";
import { PageHero } from "../components/PageHero.jsx";
import wiercenieOgrod from "../assets/images/studnie/wiercenie-ogrod.jpg";
import wiercenieLas from "../assets/images/studnie/wiercenie-las-jesien.jpg";
import kameraOtworowa from "../assets/images/studnie/kamera-otworowa.jpg";

export default function StudniePage() {
    return (
        <div>
            <Helmet>
                <title>Studnie głębinowe — wiercenie, budowa, renowacja | studnie.biz</title>
                <meta name="description" content={`Wiercenie studni głębinowych metodą udarową na sprężone powietrze. Budowa, renowacja, kamerowanie i likwidacja studni. ${stats.warrantyYears} lat gwarancji. Działamy od ${stats.foundedYear} roku.`} />
                <meta property="og:title" content="Studnie głębinowe — wiercenie, budowa, renowacja | studnie.biz" />
                <meta property="og:description" content={`Wiercenie studni głębinowych metodą udarową na sprężone powietrze. Budowa, renowacja, kamerowanie i likwidacja. ${stats.warrantyYears} lat gwarancji.`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/studnie" />
                <link rel="canonical" href="https://studnie.biz/studnie" />
            </Helmet>
            <PageHero title="Studnie głębinowe" subtitle="Wiercenie, budowa, renowacja i likwidacja studni głębinowych. Metoda udarowa na sprężone powietrze dla maksymalnej wydajności." icon={Icons.water}>
                <a href="#formularz" className="btn-primary">
                    Zamów wycenę {Icons.arrowRight}
                </a>
            </PageHero>

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-start">
                            <div>
                                <div className="section-tag">Budowa studni</div>
                                <h2 className="section-title !text-[32px]">Kompleksowa budowa studni głębinowych</h2>
                                <p className="text-gray-500 leading-relaxed text-base mb-7">
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
                                <div className="bg-gradient-to-br from-blue/8 to-accent/8 rounded-2xl p-7 mt-7 mb-6 border border-blue/12">
                                    <h4 className="font-heading font-bold text-base text-navy mb-2">
                                        Wiercenie w zagospodarowanym ogrodzie?
                                    </h4>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        Posiadamy również niewielkie urządzenia wiertnicze, które poradzą sobie nawet w zagospodarowanym ogrodzie — bez konieczności niszczenia terenu.
                                    </p>
                                </div>
                                <div className="bg-off-white rounded-2xl p-7">
                                    <h4 className="font-heading font-bold text-lg text-navy mb-3">
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
                            <div>
                                <img src={wiercenieOgrod} alt="Wiercenie studni głębinowej na terenie ogrodu przydomowego" loading="lazy" className="rounded-2xl w-full" />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Dlaczego własna studnia */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Korzyści</div>
                        <h2 className="section-title !text-[32px]">Co daje własna studnia?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                            {[
                                { icon: Icons.shield, title: "Oszczędność", text: "Jedyny koszt użytkowania studni głębinowej to energia elektryczna zasilająca pompę głębinową oraz jej amortyzacja." },
                                { icon: Icons.water, title: "Niezależność", text: "Bez względu na pogodę, porę roku czy suszę nie martwisz się brakiem wody, spadkiem ciśnienia w sieci wodociągowej oraz wahaniami cenowymi." },
                                { icon: Icons.gauge, title: "Wydajność i pewność", text: "Jeśli przyłączenie do sieci wodociągowej jest niemożliwe lub nieopłacalne, własna studnia jest doskonałym sposobem na zapewnienie wody na terenie inwestycji." },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-2xl p-8 border border-black/6">
                                    <div className="text-blue mb-4">{item.icon}</div>
                                    <h3 className="font-heading font-bold text-xl text-navy mb-3">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-[15px]">{item.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Informacja prawna */}
                        <div className="mt-10 bg-gradient-to-br from-blue/8 to-accent/8 rounded-2xl p-8 border border-blue/12">
                            <h4 className="font-heading font-bold text-lg text-navy mb-3">
                                Warto wiedzieć
                            </h4>
                            <p className="text-gray-500 leading-relaxed text-[15px]">
                                Brak konieczności opracowania projektu robót geologicznych dla otworów o głębokości do 30 m
                                w celu wykonywania ujęć wód podziemnych na potrzeby poboru wód podziemnych
                                w ilości nieprzekraczającej 5 m³ na dobę.
                            </p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Kamerowanie i renowacja */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Serwis</div>
                        <h2 className="section-title !text-[32px]">Kamerowanie, renowacja i likwidacja studni</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-10">
                            <div>
                                <p className="text-gray-500 leading-relaxed text-base mb-6">
                                    W studniach głębinowych podczas eksploatacji zachodzi wiele procesów fizykochemicznych wpływających na zmianę przepustowości filtra. Oferujemy inspekcję kamerą TV jako podstawową formę oceny stanu technicznego studni.
                                </p>
                                <FeatureItem icon={Icons.camera} title="Inspekcja TV" description="Kamerowanie to podstawowa forma oceny stanu technicznego studni — jej konstrukcji, zarurowania i zatopionych elementów." />
                                <FeatureItem icon={Icons.wrench} title="Renowacja" description="Metody mechaniczne (szczotkowanie, tłokowanie, airlift) oraz chemiczne — usuwanie osadów żelazistych, manganowych i węglanowych." />
                                <FeatureItem icon={Icons.layers} title="Likwidacja" description="Profesjonalna likwidacja studni, które nie nadają się już do renowacji. Pełna dokumentacja." />
                                <FeatureItem icon={Icons.shield} title="Prace ratunkowe" description="Usunięcie ze studni zerwanej pompy głębinowej oraz innych zatopionych w otworze elementów (rurociąg, lina stalowa)." />
                            </div>
                            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory rounded-2xl">
                                <img src={wiercenieLas} alt="Wiercenie studni w lesie jesienią — wiertnica w terenie" loading="lazy" className="rounded-2xl snap-center shrink-0 w-full object-cover" />
                                <img src={kameraOtworowa} alt="Kamera otworowa do inspekcji TV studni głębinowej" loading="lazy" className="rounded-2xl snap-center shrink-0 w-full object-cover" />
                            </div>
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
                            <h2 className="section-title !text-[32px]">Zamów wycenę studni</h2>
                            <p className="text-gray-500 text-base leading-relaxed">
                                Wypełnij formularz, a nasz dział techniczny skontaktuje się z Tobą w celu omówienia szczegółów.
                            </p>
                        </div>
                        <InquiryForm variant="studnia" />
                    </AnimatedSection>
                </div>
            </section>

            {/* Gwarancja */}
            <section className="py-15 px-6 bg-gradient-to-br from-deep-blue to-blue">
                <div className="max-w-[900px] mx-auto text-center text-white">
                    <AnimatedSection>
                        <div className="font-heading font-black text-[clamp(36px,5vw,56px)] mb-3">
                            {stats.warrantyYears} lat gwarancji
                        </div>
                        <p className="text-lg text-white/70">
                            Na wykonaną studnię głębinową. Stosowane materiały posiadają atest higieniczny do kontaktu z wodą pitną.
                        </p>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
