import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function OdwiertyPage() {
    return (
        <div>
            <Helmet>
                <title>Odwierty poszukiwawcze — minimalizacja ryzyka | studnie.biz</title>
                <meta name="description" content="Małośrednicowe odwierty poszukiwawcze — określenie wydajności ujęcia i składu wody przed budową studni. Minimalizacja ryzyka suchego odwiertu." />
                <meta property="og:title" content="Odwierty poszukiwawcze — minimalizacja ryzyka | studnie.biz" />
                <meta property="og:description" content="Małośrednicowe odwierty poszukiwawcze — określenie wydajności ujęcia i składu wody przed budową studni." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/odwierty" />
                <link rel="canonical" href="https://studnie.biz/odwierty" />
            </Helmet>
            <PageHero title="Odwierty poszukiwawcze" subtitle="Małośrednicowe otwory poszukiwawcze pozwalające określić wydajność ujęcia i skład fizykochemiczny wody — minimalizacja ryzyka." icon={Icons.search} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="max-w-[700px]">
                            <h2 className="section-title !text-[32px]">Minimalizacja ryzyka „suchego odwiertu"</h2>
                            <p className="text-gray-500 leading-relaxed text-base mb-6">
                                W ostatnich latach częstotliwość występowania suszy rośnie wraz z postępującymi zmianami klimatycznymi. Odwierty poszukiwawcze pozwalają określić wydajność przyszłego ujęcia oraz skład fizykochemiczny wody przed wykonaniem właściwej studni.
                            </p>
                            <p className="text-gray-500 leading-relaxed text-base mb-7">
                                W przypadku negatywnego otworu (braku wody) otwór podlega likwidacji. Wykonujemy odwierty poszukiwawcze również dla jednostek samorządu terytorialnego borykających się z brakiem wody.
                            </p>
                            <CheckList items={[
                                "Małośrednicowe otwory poszukiwawcze",
                                "Określenie wydajności przyszłego ujęcia",
                                "Analiza składu fizykochemicznego wody",
                                "Likwidacja w przypadku braku wody",
                                "Usługi dla samorządów i klientów indywidualnych",
                            ]} />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
