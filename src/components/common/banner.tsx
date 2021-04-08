import React from "react";

interface BannerProps {
    title?: string;
    image?: string;
    style?: React.CSSProperties;
}

export default function Banner({ title, image, style }: BannerProps) {
    if (image) {
        style = {
            ...style,
            backgroundImage: `url(${require(`../../assets/images/${image}`).default})`,
        };
    }

    return (
        <div className="banner-section">
            <div style={style} className="banner">
                <div className="title-background">{title && <span className="title">{title}</span>}</div>
            </div>
        </div>
    );
}
