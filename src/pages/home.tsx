import React from "react";

export default function Home() {
    const aboutdesc =
        " Medcare Shipping S.A. is a Shipping Company operating Tanker & Bulk Carrier Ships. The company supports the need for a comprehensive and effective Quality & Environmental management system to ensure that the services offered by this organization meet customer requirements.";

    const servicedesc =
        "Medcare’s management services include operating, maintaining, crewing, and trading the vessels worldwide in a safe, efficient, economic and profitable way. The Management’s headquarters are located in Glyfada, Athens, Greece";

    const moredesc =
        "The Company Management System (CMS) is designed to operate within the requirements of ISO 9001:2008, ISO 14001:2004, the ISM code and the OCIMF TMSA.";

    return (
        <section className="landing">
            <div className="bg image-one"></div>
            <div className="about-info">
                <div className="container">
                    <h1> About </h1>
                    <p>{aboutdesc}</p>
                </div>
            </div>
            <div className="bg image-two"></div>
            <div className="service-info">
                <div className="container">
                    <h1> Services </h1>
                    <p> {servicedesc} </p>
                </div>
            </div>
            <div className="bg image-three"></div>
            <div className="more-info">
                <div className="container">
                    <h1> More Info </h1>
                    <p> {moredesc} </p>
                </div>
            </div>
        </section>
    );
}
