import React, { useState } from "react";

export default function ImageOverlay({ image }: { image: string }) {
    const [isOverlay, setOverlay] = useState(false)

    const toggleOverlay = () => {
        setOverlay(!isOverlay)
    }
    return (
        <div
            className={`${isOverlay ? "show-overlay" : "overlay-image"}`}
            onClick={() => toggleOverlay()}
            style={{
                backgroundImage: `url("${
                    require(`../../assets/images/${image}`).default
                }")`,
            }}
        ></div>
    );
}
