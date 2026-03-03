import { Helmet } from "react-helmet-async";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { PageHero } from "../components/PageHero.jsx";
import { company } from "../data/content.js";

export default function KontaktPage() {
    return (
        <div>
            <Helmet>
                <title>Kontakt — Zakład Usług Studziennych Kielce | studnie.biz</title>
                <meta name="description" content={`Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Tel. ${company.phone.mobile1}. ${company.name}, ${company.address}.`} />
                <meta property="og:title" content={`Kontakt — ${company.name} ${company.city} | studnie.biz`} />
                <meta property="og:description" content={`Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Tel. ${company.phone.mobile1}, ${company.address}.`} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://studnie.biz/kontakt" />
                <link rel="canonical" href="https://studnie.biz/kontakt" />
            </Helmet>
            <PageHero title="Kontakt" subtitle="Skontaktuj się z nami — darmowe rozpoznanie warunków i wizja lokalna. Dział techniczny zawsze do Twojej dyspozycji." icon={Icons.phone} />

            <section className="py-20 px-6 bg-white">
                <div className="max-w-[1100px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-15">
                        <AnimatedSection>
                            <div className="section-tag">Dane kontaktowe</div>
                            <h2 className="section-title !text-[28px]">{company.name}</h2>
                            <p className="text-gray-500 text-base mb-8">
                                {company.owner}
                            </p>

                            <div className="flex flex-col gap-6">
                                {[
                                    { icon: Icons.mapPin, label: "Adres", value: company.address },
                                    { icon: Icons.phone, label: "Telefon", value: `${company.phone.mobile1} / ${company.phone.mobile2}` },
                                    { icon: Icons.phone, label: "Telefon stacjonarny", value: company.phone.landline },
                                    { icon: Icons.mail, label: "Email", value: company.email },
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

                        <AnimatedSection>
                            <div className="rounded-2xl overflow-hidden border border-black/6 h-full min-h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8!2d20.6286!3d50.8661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47178260c4a2d34f%3A0x5e2b12c3f87c3d8a!2sSpacerowa%205%2C%2025-026%20Kielce!5e0!3m2!1spl!2spl!4v1709500000000!5m2!1spl!2spl"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: 400 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokalizacja firmy — ul. Spacerowa 5, Kielce"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>
        </div>
    );
}
