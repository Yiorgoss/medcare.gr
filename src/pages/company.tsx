import React from "react";
import { useParams } from "react-router-dom";

import { SideBar, Banner } from "../components/common";

import { statementList } from "../assets/data/";
import { statementListType } from "../types";

const links = [
    {
        title: "History",
        path: "/company/history",
    },
    {
        title: "Mission Statement",
        path: "/company/mission-statement",
    },
    {
        title: "Quality",
        path: "/company/quality",
    },
    {
        title: "Health, Safety and Environment",
        path: "/company/health-safety",
    },
    {
        title: "Whistleblower Policy",
        path: "/company/whistleblower",
    },
    {
        title: "Business Ethics Policy / Disciplinary Policy",
        path: "/company/policies",
    },
];

export default function Company() {
    // url parameter is used to locate the text to display from
    // the file assets/statements.js
    // unpack the text and display dangerously on page
    const url_params = useParams<{ statement: string }>();
    const params = (statementList as statementListType)[url_params.statement];

    const { title, text, banner } = params ?? { title: "404", text: "Resource not found", banner: "" };

    return (
        <section className="company">
            <SideBar linkList={links} title="Company" />
            <div className="company-container container">
                <div className="company-content">
                    <Banner title={title} image={banner?.image ?? undefined} style={banner?.style ?? undefined} />
                    <div className="company-text" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
            </div>
        </section>
    );
}
