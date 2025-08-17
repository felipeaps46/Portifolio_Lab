import { useEffect, useRef } from "react";
import { startAnimation } from './animation02'

const AnimatedCanvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            startAnimation(canvasRef.current);
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            id="particle-canvas"
            style={{
                position: "absolute", 
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                opacity: 0.5
            }}
        />
    );
};

export default AnimatedCanvas;
