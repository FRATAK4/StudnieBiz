import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function KontaktPage() {
    return (
        <div>
            <Helmet>
                <title>Kontakt — Zakład Usług Studziennych Kielce | studnie.biz</title>
                <meta name="description" content="Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Tel. 602 333 745. Zakład Usług Studziennych, ul. Spacerowa 5, 25-026 Kielce." />
                <meta property="og:title" content="Kontakt — Zakład Usług Studziennych Kielce | studnie.biz" />
                <meta property="og:description" content="Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Tel. 602 333 745, ul. Spacerowa 5, 25-026 Kielce." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/kontakt" />
                <link rel="canonical" href="https://studnie.biz/kontakt" />
            </Helmet>
            <PageHero title="Kontakt" subtitle="Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Dział techniczny zawsze do Twojej dyspozycji." icon={Icons.phone} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[700px] mx-auto">
                    <AnimatedSection>
                        <div className="section-tag">Dane kontaktowe</div>
                        <h2 className="section-title !text-[28px]">Zakład Usług Studziennych</h2>
                        <p className="text-gray-500 text-base mb-8">
                            Bernard Marian Wójcik Sp. z o.o.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { icon: Icons.mapPin, label: "Adres", value: "ul. Spacerowa 5, 25-026 Kielce" },
                                { icon: Icons.phone, label: "Telefon", value: "602 333 745 / 602 333 992" },
                                { icon: Icons.phone, label: "Telefon stacjonarny", value: "(41) 361 55 15" },
                                { icon: Icons.mail, label: "Email", value: "studnie1@gmail.com" },
                                { icon: Icons.globe, label: "Strona www", value: "www.studnie.biz" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-12 h-12 rounded-xl shrink-0 bg-gradient-to-br from-blue/10 to-accent/10 flex items-center justify-center text-blue">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-heading font-semibold text-[13px] text-gray-500 mb-1">{item.label}</div>
                                        <div className="font-semibold text-base text-navy">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
