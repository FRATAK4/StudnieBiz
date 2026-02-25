import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>404 — Nie znaleziono strony | studnie.biz</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-deep-blue pt-30 pb-20 px-6 text-center">
                <div className="max-w-[520px]">
                    <div className="font-heading font-black text-[clamp(80px,15vw,140px)] leading-none bg-gradient-to-br from-blue to-accent bg-clip-text text-transparent mb-4">
                        404
                    </div>
                    <h1 className="font-heading font-bold text-[clamp(22px,3vw,32px)] text-white mb-4">
                        Nie znaleziono strony
                    </h1>
                    <p className="text-[17px] text-white/60 leading-relaxed mb-10">
                        Strona, której szukasz, nie istnieje lub została przeniesiona.
                    </p>
                    <button
                        className="btn-primary !py-4 !px-9 !text-base"
                        onClick={() => navigate("/")}
                    >
                        Wróć na stronę główną
                    </button>
                </div>
            </section>
        </div>
    );
}
