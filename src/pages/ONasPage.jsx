import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { CheckList } from "../components/CheckList.jsx";
import { ImgPlaceholder } from "../components/ImgPlaceholder.jsx";
import { LogoGrid } from "../components/LogoGrid.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { company, stats, partnerships } from "../data/content.js";

export default function ONasPage() {
    return (
        <div>
            <Helmet>
                <title>{`O nas — ${company.name} od ${stats.foundedYear} | studnie.biz`}</title>
                <meta name="description" content={`${company.fullName} — ponad ${new Date().getFullYear() - stats.foundedYear} lat tradycji wiertniczej. Jedyna firma w Polsce z niemieckim certyfikatem DVGW BAU W 120-1 i W 120-2.`} />
                <meta property="og:title" content={`O nas — ${company.name} od ${stats.foundedYear} | studnie.biz`} />
                <meta property="og:description" content={`Ponad ${new Date().getFullYear() - stats.foundedYear} lat tradycji wiertniczej. Jedyna firma w Polsce z certyfikatem DVGW BAU. Współpraca z ${partnerships.map(p => p.name).join(", ")}.`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/o-nas" />
                <link rel="canonical" href="https://studnie.biz/o-nas" />
            </Helmet>
            <PageHero title="O nas" subtitle={`${company.fullName} — ponad ${new Date().getFullYear() - stats.foundedYear} lat tradycji wiertniczej, nowoczesne technologie i niemiecki certyfikat DVGW BAU.`} icon={Icons.users} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                            <div>
                                <div className="section-tag">Nasza historia</div>
                                <h2 className="section-title !text-[32px]">Od {stats.foundedYear} roku nieprzerwanie</h2>
                                <p className="text-gray-500 leading-relaxed text-base mb-5">
                                    {company.name} to firma, w której właściciel wykonuje roboty wiertnicze nieprzerwanie od {stats.foundedYear} roku. Odwierty wykonujemy w różnych technologiach w zależności od warunków geologicznych.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base mb-5">
                                    Dysponujemy wiedzą i urządzeniami pozwalającymi pracować w każdych warunkach. Wdrażamy nowoczesne technologie oraz wykorzystujemy materiały chroniące środowisko.
                                </p>
                                <p className="text-gray-500 leading-relaxed text-base mb-7">
                                    Swoją działalność opieramy na wykwalifikowanych pracownikach, z którymi współpracujemy nawet od kilkunastu lat. Doskonały personel stanowi fundament naszej firmy i gwarancję dobrze wykonanej pracy.
                                </p>
                            </div>
                            <div>
                                <ImgPlaceholder label="Bernard i Marian Wójcik" height={400} style={{ borderRadius: 16, marginBottom: 24 }} />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Certyfikat */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[1100px] mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
                            <div>
                                <ImgPlaceholder label="Certyfikat DVGW BAU W 120-1 / W 120-2" height={350} style={{ borderRadius: 16 }} />
                            </div>
                            <div>
                                <div className="section-tag">Certyfikat</div>
                                <h2 className="section-title !text-[32px]">Jedyna firma w Polsce z certyfikatem DVGW BAU</h2>
                                <p className="text-gray-500 leading-relaxed text-base mb-6">
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
            <section className="py-15 px-6 bg-white">
                <div className="max-w-[800px] mx-auto text-center">
                    <AnimatedSection>
                        <div className="section-tag">Członkostwa i współpraca</div>
                        <h2 className="section-title !text-[28px]">Współpracujemy z najlepszymi</h2>
                        <LogoGrid items={partnerships} />
                    </AnimatedSection>
                </div>
            </section>

            {/* Materiały */}
            <section className="py-20 px-6 bg-off-white">
                <div className="max-w-[900px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Jakość</div>
                        <h2 className="section-title !text-[28px]">Stosowane materiały</h2>
                        <p className="text-gray-500 leading-relaxed text-base mb-6">
                            Na każdym etapie świadczonych usług wykorzystujemy wyłącznie produkty najwyższej jakości renomowanych producentów.
                            Gotowe sondy gruntowe i studnie rozdzielaczowe posiadają Krajowe Deklaracje Właściwości Użytkowych.
                            Rury PCV do studni posiadają aktualny atest higieniczny do kontaktu z wodą pitną.
                        </p>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
                            {["Rury studzienne PCV", "Rury osłonowe", "Sondy gruntowe PE", "Obsypka żwirowa"].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-5 text-center font-heading font-semibold text-[15px] text-navy border border-black/6">
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
