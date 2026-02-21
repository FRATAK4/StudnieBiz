export function ImgPlaceholder({ label, height = 300, style = {} }) {
    return (
        <div className="img-placeholder" style={{ height, borderRadius: 12, ...style }}>
            <span style={{ position: "relative", zIndex: 1 }}>{label}</span>
        </div>
    );
}
