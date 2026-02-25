export function PageHero({ title, subtitle, icon }) {
    return (
        <section className="pt-40 pb-20 px-6 bg-gradient-to-br from-navy to-deep-blue relative overflow-hidden">
            <div className="noise-overlay" />
            <div className="absolute top-[20%] right-[10%] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.08),transparent_70%)] pointer-events-none" />
            <div className="max-w-[800px] mx-auto relative z-1">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/15 text-accent mb-6">
                    {icon}
                </div>
                <h1 className="font-heading font-black text-[clamp(32px,5vw,52px)] text-white leading-tight mb-5">
                    {title}
                </h1>
                <p className="text-lg text-white/65 leading-relaxed max-w-[600px]">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}
