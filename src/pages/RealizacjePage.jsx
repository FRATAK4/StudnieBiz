import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { PageHero } from "../components/PageHero.jsx";

const locations = [
    "Kluczbork", "Przykory", "Iwaniska", "Niemodlin", "Serock", "Prostki",
    "Racławice Śl.", "Pawłów", "Olesno", "Herby", "Skierniewice", "Pawłowiczki",
    "Głogów", "Czyżew", "Chocianowice", "Adamów", "Biechów", "Lubaczów",
    "Łyszkowice", "Zabierzów", "Bierawa", "Myszków", "Damnica", "Albertów",
    "Gałkowice Ocin", "Łukaszowice", "Dziurków", "Opole", "Zwonowice", "Sarnaki",
];

export default function RealizacjePage() {
    return (
        <div>
            <Helmet>
                <title>Realizacje i referencje — ponad 35 000 odwiertów | studnie.biz</title>
                <meta name="description" content="Ponad 35 000 wykonanych otworów na terenie całej Polski. Realizacje dla Zbyszko, Hortex, Sokpol, INDUSTRIA i wielu innych. Referencje klientów." />
                <meta property="og:title" content="Realizacje i referencje — ponad 35 000 odwiertów | studnie.biz" />
                <meta property="og:description" content="Ponad 35 000 wykonanych otworów na terenie całej Polski. Referencje od Zbyszko, Hortex, Sokpol i wielu innych." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/realizacje" />
                <link rel="canonical" href="https://studnie.biz/realizacje" />
            </Helmet>
            <PageHero title="Nasze realizacje" subtitle="Ponad 35 000 wykonanych otworów na terenie całej Polski. Od studni dla domów jednorodzinnych po wielkie projekty publiczne." icon={Icons.award} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Mapa realizacji</div>
                        <h2 className="section-title !text-[32px]">Działamy na terenie całej Polski</h2>
                        <p className="text-gray-500 leading-relaxed text-base mb-10">
                            Nasze realizacje obejmują setki lokalizacji — od małych studni przy domach jednorodzinnych po dziesiątki otworów dla obiektów publicznych i przemysłowych.
                        </p>

                        <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
                            {locations.map((loc, i) => (
                                <div key={i} className="bg-off-white rounded-[10px] py-3.5 px-4 font-heading font-semibold text-sm text-navy text-center border border-black/4">
                                    {loc}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Zaufali nam */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[900px] mx-auto text-center">
                    <AnimatedSection>
                        <div className="section-tag">Zaufali nam</div>
                        <h2 className="section-title !text-[32px]">Referencje klientów</h2>
                        <div className="flex flex-wrap justify-center gap-6 mt-8">
                            {["Zbyszko", "Życkowiacz", "Jamar", "Sokpol", "Hortex", "INDUSTRIA", "Andrzej Stępień LASPOL MAX"].map((name, i) => (
                                <div key={i} className="bg-white rounded-xl py-5 px-7 font-heading font-bold text-base text-navy border border-black/6">
                                    {name}
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
