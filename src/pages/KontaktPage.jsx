import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { COLORS, inputStyle } from "../data/content.js";
import Icons from "../icons/Icons.jsx";
import { AnimatedSection } from "../components/AnimatedSection.jsx";
import { PageHero } from "../components/PageHero.jsx";

export default function KontaktPage() {
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", service: "" });

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

            <section style={{ padding: "80px 24px", background: "white" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }} className="content-grid">
                        {/* Info */}
                        <AnimatedSection>
                            <div className="section-tag">Dane kontaktowe</div>
                            <h2 className="section-title" style={{ fontSize: 28 }}>Zakład Usług Studziennych</h2>
                            <p style={{ color: COLORS.gray, fontSize: 16, marginBottom: 32 }}>
                                Bernard Marian Wójcik Sp. z o.o.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                                {[
                                    { icon: Icons.mapPin, label: "Adres", value: "ul. Spacerowa 5, 25-026 Kielce" },
                                    { icon: Icons.phone, label: "Telefon", value: "602 333 745 / 602 333 992" },
                                    { icon: Icons.phone, label: "Telefon stacjonarny", value: "(41) 361 55 15" },
                                    { icon: Icons.mail, label: "Email", value: "studnie1@gmail.com" },
                                    { icon: Icons.globe, label: "Strona www", value: "www.studnie.biz" },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                        <div style={{
                                            width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                                            background: "linear-gradient(135deg, rgba(26,111,181,0.1), rgba(0,180,216,0.1))",
                                            display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.blue,
                                        }}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, color: COLORS.gray, marginBottom: 4 }}>{item.label}</div>
                                            <div style={{ fontWeight: 600, fontSize: 16, color: COLORS.navy }}>{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>

                        {/* Form */}
                        <AnimatedSection>
                            <div style={{
                                background: COLORS.offWhite, borderRadius: 20, padding: 36,
                                border: "1px solid rgba(0,0,0,0.06)",
                            }}>
                                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 22, marginBottom: 24, color: COLORS.navy }}>
                                    Wyślij zapytanie
                                </h3>
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    <select
                                        value={formData.service}
                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                        style={inputStyle}
                                    >
                                        <option value="">Wybierz usługę...</option>
                                        <option value="studnia">Studnia głębinowa</option>
                                        <option value="pompa">Pompa ciepła / odwierty</option>
                                        <option value="piezometr">Piezometr</option>
                                        <option value="renowacja">Renowacja studni</option>
                                        <option value="inne">Inne</option>
                                    </select>
                                    <input
                                        type="text" placeholder="Imię i nazwisko"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        style={inputStyle}
                                    />
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                                        <input
                                            type="email" placeholder="Email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            style={inputStyle}
                                        />
                                        <input
                                            type="tel" placeholder="Telefon"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            style={inputStyle}
                                        />
                                    </div>
                                    <textarea
                                        placeholder="Opisz swoje potrzeby..."
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        style={{ ...inputStyle, resize: "vertical" }}
                                    />
                                    <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px 32px" }}>
                                        Wyślij zapytanie {Icons.arrowRight}
                                    </button>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
                <style>{`
          @media (max-width: 768px) { .content-grid { grid-template-columns: 1fr !important; } }
        `}</style>
            </section>
        </div>
    );
}
