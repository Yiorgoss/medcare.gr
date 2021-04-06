import React from "react";

interface shipIFrameProps {
    title: string;
    ytURL: string;
}

export default function shipIFrame({ title, ytURL }: shipIFrameProps) {
    //only so that it can be loadde lazily
    return (
        <div
            className="yt-iframe"
            dangerouslySetInnerHTML={{
                __html: `<iframe src='${ytURL}' title='${title} video' frameborder='0'; clipboard-write; encrypted-media; picture-in-picture' allowfullscreen></iframe>`,
            }}
        ></div>
    );
}
