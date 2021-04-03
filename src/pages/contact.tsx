import React from "react";

import { Banner } from "../components/common";

import personelList from "../assets/personel-list";

export default function Contact() {
    return (
        <section className="contact-wrapper">
            <Banner title="Contact" />
            <div className="contact-main container">
                <div className="contact">
                    <h1 className="title"> Address </h1>
                    <div className="address">
                        124, Vouliagmenis Ave,
                        <br />
                        GR16674, Glyfada, Athens, Greece
                        <br />
                        <br />
                        <span className="bold">Phone: </span>+30 210 8982019
                        <br />
                        <span className="bold">Fax: </span>+30 210 8982474
                        <br />
                        <span className="bold">Email: </span>medcare@medcare.gr
                    </div>
                </div>
                <div className="personel">
                    <h1 className="title"> Personel </h1>
                    <div className="personel-grid-container">
                        {personelList.map((personel, index) => (
                            <div className="personel-container" key={index}>
                                <h1>{personel.title}</h1>
                                <ul className="personel-name-container">
                                    {personel.names.map((name, index) => (
                                        <li key={index}>{name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
