import "./decoration.scss";

interface DecorationProps {
    id?: string;
    figure: "rectangle" | "circle" | "mosaic";
    size?: number;
}

export const Decoration = ({ id, figure, size }: DecorationProps) => {
    return (
        <div className="decoration" id={id}>
            {figure === "circle" && (
                <div
                    className="decoration__circle"
                    style={{ width: size + "px", height: size + "px" }}
                ></div>
            )}
            {figure === "rectangle" && (
                <div
                    className="decoration__rectangle"
                    style={{ width: size + "px", height: size + "px" }}
                ></div>
            )}
            {figure === "mosaic" && (
                <div className="decoration__mosaic">
                    {Array.from({ length: 54 }).map((_, i) => (
                        <span key={i} className="decoration__mosaic--dot" />
                    ))}
                </div>
            )}
        </div>
    );
};
