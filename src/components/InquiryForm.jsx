import { useState } from "react";
import Icons from "../icons/Icons.jsx";

const inputClasses =
    "w-full py-3.5 px-4 rounded-[10px] border border-black/10 text-[15px] font-body bg-white outline-none transition-colors duration-200 focus:border-blue";

const VARIANTS = {
    studnia: {
        title: "Zapytanie o studnię głębinową",
        specificField: {
            name: "zapotrzebowanie",
            label: "Orientacyjne zapotrzebowanie na wodę (m³/h)",
            placeholder: "np. 2,5",
            type: "text",
        },
    },
    pompa: {
        title: "Zapytanie o pompę ciepła",
        specificField: {
            name: "mocPompy",
            label: "Orientacyjna moc pompy ciepła",
            placeholder: "np. 10 kW",
            type: "text",
        },
    },
};

export function InquiryForm({ variant }) {
    const config = VARIANTS[variant];
    const [formData, setFormData] = useState({
        imie: "",
        nazwisko: "",
        telefon: "",
        email: "",
        [config.specificField.name]: "",
        gmina: "",
        miejscowosc: "",
        numerDzialki: "",
    });
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: podpiąć Formspree lub inny serwis po konsultacji z klientem
        setStatus("sent");
    };

    if (status === "sent") {
        return (
            <div className="bg-off-white rounded-[20px] p-9 border border-black/6 text-center">
                <div className="text-accent mb-4">{Icons.checkCircle}</div>
                <h3 className="font-heading font-bold text-[22px] mb-3 text-navy">
                    Dziękujemy za zapytanie!
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                    Skontaktujemy się z Tobą najszybciej jak to możliwe.
                </p>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-off-white rounded-[20px] p-9 border border-black/6"
        >
            <h3 className="font-heading font-bold text-[22px] mb-6 text-navy">
                {config.title}
            </h3>
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            Imię *
                        </label>
                        <input
                            type="text"
                            name="imie"
                            required
                            value={formData.imie}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            Nazwisko *
                        </label>
                        <input
                            type="text"
                            name="nazwisko"
                            required
                            value={formData.nazwisko}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            Numer kontaktowy *
                        </label>
                        <input
                            type="tel"
                            name="telefon"
                            required
                            value={formData.telefon}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            E-mail *
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                        {config.specificField.label} *
                    </label>
                    <input
                        type={config.specificField.type}
                        name={config.specificField.name}
                        required
                        placeholder={config.specificField.placeholder}
                        value={formData[config.specificField.name]}
                        onChange={handleChange}
                        className={inputClasses}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            Gmina *
                        </label>
                        <input
                            type="text"
                            name="gmina"
                            required
                            value={formData.gmina}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            Miejscowość *
                        </label>
                        <input
                            type="text"
                            name="miejscowosc"
                            required
                            value={formData.miejscowosc}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                    <div>
                        <label className="block font-heading font-semibold text-[13px] text-gray-500 mb-1.5">
                            Numer działki *
                        </label>
                        <input
                            type="text"
                            name="numerDzialki"
                            required
                            value={formData.numerDzialki}
                            onChange={handleChange}
                            className={inputClasses}
                        />
                    </div>
                </div>

                <button type="submit" className="btn-primary w-full justify-center !py-4 !px-8 mt-2">
                    Wyślij zapytanie {Icons.arrowRight}
                </button>
            </div>
        </form>
    );
}
