import { useNavigate } from "react-router-dom";
import Icons from "../icons/Icons.jsx";

export function Footer() {
    const navigate = useNavigate();

    const handleNav = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="bg-navy text-white py-20 px-6 pb-10 relative overflow-hidden">
            <div className="noise-overlay" />
            <div className="max-w-[1200px] mx-auto relative z-1">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12 mb-15">
                    {/* Col 1 - Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-5">
                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue to-accent flex items-center justify-center font-heading font-black text-xl text-white">
                                S
                            </div>
                            <div>
                                <div className="font-heading font-extrabold text-[22px]">
                                    studnie<span className="text-accent">.biz</span>
                                </div>
                            </div>
                        </div>
                        <p className="text-white/60 leading-relaxed text-sm">
                            Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o. — ponad 55 lat doświadczenia na rynku wiertniczym. Jedyna firma w Polsce z certyfikatem DVGW BAU.
                        </p>
                    </div>

                    {/* Col 2 - Usługi */}
                    <div>
                        <h4 className="font-heading font-bold text-base mb-5">Usługi</h4>
                        {[
                            { path: "/studnie", label: "Studnie głębinowe" },
                            { path: "/pompy-ciepla", label: "Pompy ciepła" },
                            { path: "/odwierty", label: "Odwierty poszukiwawcze" },
                            { path: "/piezometry", label: "Piezometry" },
                        ].map((item) => (
                            <div
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                                className="text-white/60 py-1.5 cursor-pointer text-sm transition-colors duration-200 hover:text-accent"
                            >
                                {item.label}
                            </div>
                        ))}
                    </div>

                    {/* Col 3 - Kontakt */}
                    <div>
                        <h4 className="font-heading font-bold text-base mb-5">Kontakt</h4>
                        <div className="flex flex-col gap-3">
                            {[
                                { icon: Icons.mapPin, text: "ul. Spacerowa 5, 25-026 Kielce" },
                                { icon: Icons.phone, text: "602 333 745 / 41 361 55 15" },
                                { icon: Icons.mail, text: "studnie1@gmail.com" },
                                { icon: Icons.globe, text: "www.studnie.biz" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2.5 text-white/60 text-sm">
                                    {item.icon} {item.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/8 pt-7 flex justify-between items-center flex-wrap gap-4">
                    <div className="text-white/40 text-[13px]">
                        © 2025 studnie.biz — Zakład Usług Studziennych Bernard Marian Wójcik Sp. z o.o.
                    </div>
                    <div className="text-white/40 text-[13px]">
                        Kielce, Polska | Działamy na terenie całej Polski
                    </div>
                </div>
            </div>
        </footer>
    );
}
