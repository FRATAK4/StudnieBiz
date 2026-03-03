import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { StatCounter } from "../components/StatCounter.jsx";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { FeatureItem } from "../components/FeatureItem.jsx";
import zespolGrupowe from "../assets/images/ogolne/zespol-grupowe.jpg";
import zespolWiertnica from "../assets/images/ogolne/zespol-przy-wiertnicy.jpg";

export default function HomePage() {
    const navigate = useNavigate();

    const go = (path) => {
        navigate(path);
        if (!path.includes("#")) {
            window.scrollTo(0, 0);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Studnie głębinowe i pompy ciepła — wiercenie od 1968 | studnie.biz</title>
                <meta name="description" content="Zakład Usług Studziennych — wiercenie studni głębinowych, odwierty pod pompy ciepła, piezometry. Jedyna firma w Polsce z certyfikatem DVGW BAU. Ponad 35 000 odwiertów." />
                <meta property="og:title" content="Studnie głębinowe i pompy ciepła — wiercenie od 1968 | studnie.biz" />
                <meta property="og:description" content="Wiercenie studni głębinowych, odwierty pod pompy ciepła, piezometry. Ponad 35 000 odwiertów od 1968 roku. Certyfikat DVGW BAU." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/" />
                <link rel="canonical" href="https://studnie.biz/" />
            </Helmet>
            {/* Hero */}
            <section className="min-h-screen bg-gradient-to-br from-navy via-deep-blue to-[#0f3460] flex items-center relative overflow-hidden pt-30 pb-20 px-6">
                <div className="noise-overlay" />
                {/* Decorative circles */}
                <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.08),transparent_70%)] pointer-events-none" />
                <div className="absolute bottom-[10%] -left-[5%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(26,111,181,0.1),transparent_70%)] pointer-events-none" />

                <div className="max-w-[1200px] mx-auto w-full relative z-1">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-center">
                        <div>
                            <div className="animate-in animate-delay-1 mb-6">
                                <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 py-2 px-4 rounded-full text-accent text-[13px] font-semibold font-heading">
                                    {Icons.shield} Od 1968 roku — ponad 35 000 odwiertów
                                </span>
                            </div>

                            <h1 className="animate-in animate-delay-2 font-heading font-black text-[clamp(36px,5vw,64px)] leading-[1.08] text-white mb-6">
                                Wiercenia <br/>
                                <span className="bg-gradient-to-br from-light-blue via-accent to-water bg-clip-text text-transparent">
                                    studni głębinowych
                                </span><br/>
                                i odwierty pod<br/>
                                pompy ciepła
                            </h1>

                            <p className="animate-in animate-delay-3 text-lg text-white/65 leading-relaxed max-w-[500px] mb-9">
                                Jedyna firma wiertnicza w Polsce z niemieckim certyfikatem DVGW BAU.
                                Kompleksowa obsługa — od projektu, przez wiercenie, po dokumentację.
                            </p>

                            <div className="animate-in animate-delay-4 flex gap-4 flex-wrap">
                                <button className="btn-primary" onClick={() => go("/studnie#formularz")}>
                                    Bezpłatna wycena {Icons.arrowRight}
                                </button>
                                <button className="btn-outline" onClick={() => go("/realizacje")}>
                                    Nasze realizacje
                                </button>
                            </div>
                        </div>

                        <div className="animate-in animate-delay-5 hidden lg:block">
                            <div className="relative">
                                <img src={zespolGrupowe} alt="Zespół pracowników Zakładu Usług Studziennych przed wiertnicą" className="rounded-[20px] border border-white/8 w-full h-[480px] object-cover" />
                                {/* Floating stat card */}
                                <div className="glass absolute -bottom-5 -left-5 p-5 px-6 rounded-2xl animate-float">
                                    <div className="font-heading font-black text-[32px] text-accent">60+</div>
                                    <div className="text-white/70 text-[13px] font-medium">Lat doświadczenia</div>
                                </div>
                                <div className="glass absolute top-5 -right-2.5 py-4 px-5 rounded-[14px] animate-float" style={{ animationDelay: "1s" }}>
                                    <div className="font-heading font-extrabold text-sm text-accent">Certyfikat DVGW BAU</div>
                                    <div className="text-white/60 text-xs">W 120-1 & W 120-2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats bar */}
            <section className="water-gradient py-15 px-6">
                <div className="max-w-[1000px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10">
                    <StatCounter value={35000} suffix="+" label="wykonanych otworów" />
                    <StatCounter value={60} suffix="+" label="lat doświadczenia" />
                    <StatCounter value={10} label="lat gwarancji na studnię" />
                    <StatCounter value={1968} label="rok założenia" />
                </div>
            </section>

            {/* Services */}
            <section className="py-25 px-6 bg-off-white">
                <div className="max-w-[1200px] mx-auto">
                    <AnimatedSection className="text-center mb-15">
                        <div className="section-tag">Nasze usługi</div>
                        <h2 className="section-title">Kompleksowe usługi wiertnicze</h2>
                        <p className="section-subtitle mx-auto">
                            Od studni głębinowych po odwierty pod pompy ciepła — realizujemy projekty na terenie całej Polski.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.water}
                                title="Studnie głębinowe"
                                description="Wiercenie, budowa i renowacja studni. Metoda udarowa na sprężone powietrze dla maksymalnej wydajności. 10 lat gwarancji."
                                onClick={() => go("/studnie")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.flame}
                                title="Pompy ciepła"
                                description="Odwierty pod gruntowe wymienniki ciepła. Klasa energetyczna A+++. Współpraca z STIEBEL ELTRON."
                                onClick={() => go("/pompy-ciepla")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.search}
                                title="Odwierty poszukiwawcze"
                                description="Małośrednicowe otwory określające wydajność ujęcia i skład wody. Minimalizacja ryzyka suchego odwiertu."
                                onClick={() => go("/odwierty")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.gauge}
                                title="Piezometry"
                                description="Otwory obserwacyjne do monitoringu wód podziemnych. Pobór próbek do analiz fizykochemicznych."
                                onClick={() => go("/piezometry")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.camera}
                                title="Kamerowanie studni"
                                description="Inspekcja TV stanu technicznego studni. Ocena filtra, zarurowania i elementów zatopionych w otworze."
                                onClick={() => go("/studnie")}
                            />
                        </AnimatedSection>
                        <AnimatedSection>
                            <ServiceCard
                                icon={Icons.wrench}
                                title="Renowacja i likwidacja"
                                description="Renowacje mechaniczne i chemiczne. Usuwanie osadów żelazistych i manganowych. Likwidacja starych studni."
                                onClick={() => go("/studnie")}
                            />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-25 px-6 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                        <AnimatedSection>
                            <img src={zespolWiertnica} alt="Trzech pracowników w kamizelkach odblaskowych przy wiertnicy gąsienicowej" loading="lazy" className="rounded-[20px] w-full" />
                        </AnimatedSection>
                        <AnimatedSection>
                            <div className="section-tag">Dlaczego my?</div>
                            <h2 className="section-title">Ponad pół wieku doświadczenia w branży wiertniczej</h2>
                            <p className="text-gray-500 leading-relaxed text-base mb-9">
                                Zakład Usług Studziennych działa nieprzerwanie od 1968 roku.
                                Jako jedyna firma wiertnicza w Polsce posiadamy niemiecki certyfikat DVGW BAU.
                            </p>
                            <FeatureItem icon={Icons.layers} title="Kompleksowość" description="Od projektu geologicznego, przez wiercenie, po dokumentację powykonawczą. Darmowa wizja lokalna." />
                            <FeatureItem icon={Icons.award} title="Certyfikat DVGW BAU" description="Certyfikaty W 120-1 (Brunnenbau — budowa studni) i W 120-2 (Geothermie — geotermia). Jedyna taka firma w Polsce." />
                            <FeatureItem icon={Icons.users} title="Doświadczony zespół" description="Wykwalifikowani pracownicy z wieloletnim stażem. Współpraca z AGH i PORT PC." />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-25 px-6 bg-gradient-to-br from-navy to-deep-blue relative overflow-hidden text-center">
                <div className="noise-overlay" />
                <div className="relative z-1 max-w-[700px] mx-auto">
                    <AnimatedSection>
                        <h2 className="font-heading font-black text-[clamp(28px,4vw,44px)] text-white mb-5 leading-tight">
                            Potrzebujesz studni lub odwiertu pod pompę ciepła?
                        </h2>
                        <p className="text-lg text-white/65 leading-relaxed mb-9">
                            Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna.
                            Działamy na terenie całej Polski.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button className="btn-primary !text-base !py-4 !px-9" onClick={() => go("/studnie#formularz")}>
                                {Icons.water} Wycena studni
                            </button>
                            <button className="btn-outline !text-base !py-4 !px-9" onClick={() => go("/pompy-ciepla#formularz")}>
                                {Icons.flame} Wycena odwiertów
                            </button>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
