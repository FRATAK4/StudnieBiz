import { Helmet } from "react-helmet-async";
import { COLORS } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
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

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <AnimatedSection>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                            <div>
                                <h2 className="section-title" style={{ fontSize: 32 }}>Minimalizacja ryzyka „suchego odwiertu"</h2>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 24 }}>
                                    W ostatnich latach częstotliwość występowania suszy rośnie wraz z postępującymi zmianami klimatycznymi. Odwierty poszukiwawcze pozwalają określić wydajność przyszłego ujęcia oraz skład fizykochemiczny wody przed wykonaniem właściwej studni.
                                </p>
                                <p style={{ color: COLORS.gray, lineHeight: 1.8, fontSize: 16, marginBottom: 28 }}>
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
                            <div>
                                <ImgPlaceholder label="Wiercenie otworu poszukiwawczego na sprężone powietrze" height={500} style={{ borderRadius: 16 }} />
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
