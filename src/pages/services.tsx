import React from "react";
import { useParams } from "react-router-dom";

import { SideBar, Banner } from "../components/common";

import { serviceList } from "../assets/data";
import { serviceListType } from "../types";

const links = [
    {
        title: "Commercial",
        path: "/services/commercial",
    },
    {
        title: "Operation",
        path: "/services/operation",
    },
    {
        title: "Technical",
        path: "/services/technical",
    },
    {
        title: "Marine-Safety-Quality & Environment",
        path: "/services/marine-safety-quality",
    },
    {
        title: "Crewing",
        path: "/services/crewing",
    },
];

export default function Services() {
    // url parameter is used to locate the text to display from
    // the file assets/statements.js
    // unpack the text and display dangerously on page
    const url_params = useParams<{ service: string }>();
    const params = (serviceList as serviceListType)[url_params.service];

    const { title, text, banner } = params ?? { title: "404", text: "Resource not Found", banner: "" };
    return (
        <section className="services">
            <SideBar linkList={links} title="Services" />
            <div className="services-container container">
                <div className="services-content">
                    <Banner title={title} image={banner?.image ?? undefined} style={banner?.style ?? undefined} />
                    <div className="services-text" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </section>
    );
}
