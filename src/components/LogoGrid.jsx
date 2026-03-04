export function LogoGrid({ items }) {
    return (
        <div className="flex flex-wrap justify-center gap-5 mt-8">
            {items.map((item) => (
                <div
                    key={item.name}
                    className="bg-white rounded-xl border border-black/6 p-6 flex items-center justify-center h-24 w-48 transition-all duration-300 hover:shadow-md group"
                >
                    <img
                        src={item.logo}
                        alt={item.name}
                        className="max-h-14 max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                </div>
            ))}
        </div>
    );
}
