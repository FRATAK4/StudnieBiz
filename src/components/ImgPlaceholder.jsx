export function ImgPlaceholder({ label, height = 300, style = {} }) {
    return (
        <div className="img-placeholder rounded-xl" style={{ height, ...style }}>
            <span className="relative z-1">{label}</span>
        </div>
    );
}
