import { useRef, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { Download } from "lucide-react";
import PersonCard from "./PersonCard";
import { getResponsivePositions, biodata } from "../data/biodata";

export interface Position {
    x: number;
    y: number;
}

const { family } = biodata;

export default function FamilyTree() {
    const ref = useRef<HTMLDivElement>(null);
    const [positions, setPositions] = useState<Record<string, Position>>(getResponsivePositions());

    // 🔹 Auto-adjust on resize for live responsiveness
    useEffect(() => {
        const handleResize = () => setPositions(getResponsivePositions());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 🔹 Download family tree as PNG
    const downloadPng = async () => {
        if (!ref.current) return;
        const dataUrl = await toPng(ref.current, {
            cacheBust: true,
            pixelRatio: 2,
            backgroundColor: "#f8fafc",
        });
        const link = document.createElement("a");
        link.download = "family-tree.png";
        link.href = dataUrl;
        link.click();
    };

    // 🔹 Dynamic node styling
    const nodeStyle = (key: string): React.CSSProperties => {
        const pos = positions[key];
        return {
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            position: "absolute",
            transform: "translate(-50%, -50%) scale(0.95)",
            transition: "all 0.3s ease-in-out",
        };
    };

    return (
        <div>
            {/* Header */}
            <header className="sticky top-0 z-10">
                <div className="max-w-6xl mx-auto px-4 py-4 flex flex-row items-center justify-between gap-3">
                    <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent text-center sm:text-left">
                        My Family Tree
                    </h1>
                    <button
                        onClick={downloadPng}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-[1.02] transition"
                    >
                        <Download className="w-5 h-5" /> Download PNG
                    </button>
                </div>
            </header>

            <main
                ref={ref}
                className="relative flex items-center justify-center overflow-hidden "
            >
                <div
                    className="relative w-full shadow-inner min-h-[600px] sm:min-h-[750px]"
                    style={{
                        position: "relative",
                        overflow: "visible",
                    }}
                >
                    {(Object.keys(family) as Array<keyof typeof family>).map((key) => (
                        <div key={key} style={nodeStyle(key)}>
                            <PersonCard person={family[key]} highlight={key === "me"} />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
