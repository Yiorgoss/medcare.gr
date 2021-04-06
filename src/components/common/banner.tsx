import React from "react";

export default function Banner({ image, title }: { image?: string; title?: string }) {
    let style = undefined;
    if (image) {
        style = {
            backgroundImage: `url(${require(`../../assets/images/${image}`).default})`,
        };
    }
    return (
        <div className="banner-section">
            <div style={style} className="banner">
                <div className="title-background">
                    <span className="title">{title ?? ""}</span>
                </div>
            </div>
        </div>
    );
}
