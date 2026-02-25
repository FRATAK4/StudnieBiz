import Icons from "../icons/Icons.jsx";

export function ServiceCard({ icon, title, description, onClick }) {
    return (
        <div
            className="card-hover bg-white rounded-2xl p-8 cursor-pointer border border-black/6 relative overflow-hidden"
            onClick={onClick}
        >
            <div className="absolute -top-5 -right-5 w-[100px] h-[100px] bg-gradient-to-br from-accent/6 to-transparent rounded-full" />
            <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-blue/10 to-accent/10 flex items-center justify-center text-blue mb-5">
                {icon}
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-navy">
                {title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                {description}
            </p>
            <div className="flex items-center gap-1.5 text-blue font-semibold text-sm font-heading">
                Dowiedz się więcej {Icons.arrowRight}
            </div>
        </div>
    );
}
