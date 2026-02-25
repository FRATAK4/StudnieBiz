import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function PiezometryPage() {
    return (
        <div>
            <Helmet>
                <title>Piezometry obserwacyjne — monitoring wód podziemnych | studnie.biz</title>
                <meta name="description" content="Piezometry obserwacyjne do monitoringu wód podziemnych. Pomiar poziomu zwierciadła wody, pobieranie próbek, kontrola odwodnienia i zasięgu leja depresji." />
                <meta property="og:title" content="Piezometry obserwacyjne — monitoring wód podziemnych | studnie.biz" />
                <meta property="og:description" content="Piezometry obserwacyjne do monitoringu wód podziemnych. Pomiar poziomu zwierciadła wody i analiza zanieczyszczeń." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/piezometry" />
                <link rel="canonical" href="https://studnie.biz/piezometry" />
            </Helmet>
            <PageHero title="Piezometry obserwacyjne" subtitle="Otwory hydrogeologiczne badawcze służące do monitoringu wód podziemnych — pomiar poziomu zwierciadła wody i analiza zanieczyszczeń." icon={Icons.gauge} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                            <div>
                                <h2 className="section-title !text-[32px]">Monitoring wód podziemnych</h2>
                                <p className="text-gray-500 leading-relaxed text-base mb-6">
                                    Piezometr to małośrednicowy otwór hydrogeologiczny służący do pomiaru głębokości zwierciadła wody oraz zanieczyszczeń wód podziemnych. W odróżnieniu od studni, nie zabudowuje się w nich pomp — służą jedynie do okresowego pobierania próbek wody.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base mb-7">
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
                                <div className="bg-off-white rounded-2xl p-7">
                                    <h4 className="font-heading font-bold text-navy mb-3">Kto potrzebuje piezometrów?</h4>
                                    <p className="text-gray-500 leading-relaxed text-[15px]">
                                        Zakłady przemysłowe, składowiska odpadów, kopalnie, stacje paliw i inne obiekty mogące wpływać na stan wód podziemnych.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
