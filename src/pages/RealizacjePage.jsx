import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { LogoGrid } from "../components/LogoGrid.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { PolandMap } from "../components/PolandMap.jsx";
import { stats, references, locations, voivodeships } from "../data/content.js";

export default function RealizacjePage() {
    const boreholesFormatted = stats.boreholes.toLocaleString("pl-PL");

    return (
        <div>
            <Helmet>
                <title>{`Realizacje i referencje — ponad ${boreholesFormatted} odwiertów | studnie.biz`}</title>
                <meta name="description" content={`Ponad ${boreholesFormatted} wykonanych otworów na terenie całej Polski. Realizacje dla ${references.slice(0, 4).map(r => r.name).join(", ")} i wielu innych. Referencje klientów.`} />
                <meta property="og:title" content={`Realizacje i referencje — ponad ${boreholesFormatted} odwiertów | studnie.biz`} />
                <meta property="og:description" content={`Ponad ${boreholesFormatted} wykonanych otworów na terenie całej Polski. Referencje od ${references.slice(0, 3).map(r => r.name).join(", ")} i wielu innych.`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/realizacje" />
                <link rel="canonical" href="https://studnie.biz/realizacje" />
            </Helmet>
            <PageHero title="Nasze realizacje" subtitle={`Ponad ${boreholesFormatted} wykonanych otworów na terenie całej Polski. Od studni dla domów jednorodzinnych po wielkie projekty publiczne.`} icon={Icons.award} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Mapa realizacji</div>
                        <h2 className="section-title !text-[32px]">Działamy na terenie całej Polski</h2>
                        <p className="text-gray-500 leading-relaxed text-base mb-10">
                            Nasze realizacje obejmują setki lokalizacji — od małych studni przy domach jednorodzinnych po dziesiątki otworów dla obiektów publicznych i przemysłowych.
                        </p>

                        <PolandMap voivodeships={voivodeships} />

                        {/* Ukryta lista miast dla SEO */}
                        <ul className="sr-only">
                            {locations.map((loc) => (
                                <li key={loc.name}>{loc.name}</li>
                            ))}
                        </ul>
                    </AnimatedSection>
                </div>
            </section>

            {/* Zaufali nam */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <AnimatedSection>
                        <div className="section-tag">Zaufali nam</div>
                        <h2 className="section-title !text-[32px]">Referencje klientów</h2>
                        <LogoGrid items={references} />
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
