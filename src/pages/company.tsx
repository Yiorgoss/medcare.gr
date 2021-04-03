import React from 'react'
import { useParams } from "react-router-dom";

import { SideBar, Banner } from "../components/common";

import statementsList from "../assets/statements";
import { statementListType } from "../types";

interface CompanyParams {
    statement: string;
}


export default function Company() {
    // url parameter is used to locate the text to display from
    // the file assets/statements.js
    // unpack the text and display dangerously on page
    const url_params = useParams<CompanyParams>();
    const params = (statementsList as statementListType)[url_params.statement];

    const { title, text } = params ?? {title: "404", text: "Resource not found"}

    return (
        <section className="company">
            <SideBar/>
            <div className="company-container container">
                <div className="company-content">
                    <Banner title={title} />
                    <div className="company-text" dangerouslySetInnerHTML={{ __html: text }} />
                </div>
        </div>
        </section>
    )
}
