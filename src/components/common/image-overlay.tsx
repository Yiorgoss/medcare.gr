import React, { useState } from "react";

interface ImageOverlayProps {
    image: string;
    style?: React.CSSProperties;
}
export default function ImageOverlay({ image, style }: ImageOverlayProps) {
    const [isOverlay, setOverlay] = useState(false);

    const toggleOverlay = () => {
        setOverlay(!isOverlay);
    };

    const inline = {
        ...style,
        backgroundImage: `url("${require(`../../assets/images/${image}`).default}")`,
    };

    return (
        <div
            className={`${isOverlay ? "show-overlay" : "overlay-image"}`}
            onClick={() => toggleOverlay()}
            style={inline}
        ></div>
    );
}
