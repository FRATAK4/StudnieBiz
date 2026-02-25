import Icons from "../icons/Icons.jsx";

export function CheckList({ items }) {
    return (
        <div className="flex flex-col gap-3">
            {items.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                    <div className="shrink-0 w-6 h-6 rounded-md bg-gradient-to-br from-accent/15 to-blue/15 flex items-center justify-center text-blue mt-0.5">
                        {Icons.check}
                    </div>
                    <span className="text-gray-900 leading-relaxed text-[15px]">{item}</span>
                </div>
            ))}
        </div>
    );
}
