export function FeatureItem({ icon, title, description }) {
    return (
        <div className="flex gap-4 mb-7">
            <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue/10 to-accent/10 flex items-center justify-center text-blue">
                {icon}
            </div>
            <div>
                <h4 className="font-heading font-bold text-[17px] mb-1.5 text-navy">{title}</h4>
                <p className="text-gray-500 leading-relaxed text-[15px]">{description}</p>
            </div>
        </div>
    );
}
