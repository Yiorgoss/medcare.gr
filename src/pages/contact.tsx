import React from "react";

import { Banner } from "../components/common";

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
                        <div className="personel-container">
                            <h1>General Manager</h1>
                            <span>Grigoris Moutzouris</span>
                        </div>
                        <div className="personel-container">
                            <h1>Environmental / Safety Marine Manager</h1>
                            <span>Isidoros Koukloubakos</span>
                        </div>
                        <div className="personel-container">
                            <h1>Chartering departnent</h1>
                            <span>Richard Marns</span>
                        </div>
                        <div className="personel-container">
                            <h1> Operation department</h1>
                            <span>Cpt. Ioannis Karaiskakis</span>
                            <span>Mary Parisi</span>
                        </div>
                        <div className="personel-container">
                            <h1>Technical department</h1>
                            <span>Grigoris Moutzouris</span>
                            <span>Panagiotis Perivolarakis</span>
                        </div>
                        <div className="personel-container">
                            <h1>Marine Supt.</h1>
                            <span>Kimon Demertzis</span>
                        </div>
                        <div className="personel-container">
                            <h1>Purchasing department</h1>
                            <span>Giannis Stergiopoulos</span>
                        </div>
                        <div className="personel-container">
                            <h1>Crew department</h1>
                            <span>Kalliopi Lagoumtzi</span>
                        </div>
                        <div className="personel-container">
                            <h1>Accounting department</h1>
                            <span>Magda Vlassiadou</span>
                            <span>Georgios Korlos</span>
                            <span>Efthymia Kardasi</span>
                        </div>
                        <div className="personel-container">
                            <h1>Secretary</h1>
                            <span>Konstantina Afali</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
