import React from "react";

import { Banner } from "../components/common"

export default function Services() {
    return (
        <section className="services">
            <Banner title="Services" />
            <div className="services-wrapper container">
                <div className="services-main-text">
                    <p>
                        One of the most vital services that Medcare has to
                        provide to the ship owning companies, whose vessels it
                        manages, is the employment of those vessels in
                        accordance with their Owners’ instructions and wishes.
                        The company’s commercial department which consists of
                        experienced brokers is responsible to achieve this task
                        by:
                    </p>
                    <ul className="services-main-list">
                        <li>
                            Securing employment for the fleet in order to
                            maximise the earnings from the freight market.
                        </li>
                        <li>
                            Following closely the freight market in terms of
                            supply and demand for tonnage, both in short term
                            and long term view.
                        </li>
                        <li>
                            Marketing and fixing the ships through a network of
                            international ship brokers world wide and through
                            direct contact with charterers / cargo owners on the
                            spot or period charter basis.
                        </li>
                        <li>
                            Analysing / negotiating / reviewing all charter
                            parties prior to fixing to ensure the company has
                            received all possible benefits and protection, and
                            to ensure compliance with P&I club rules and
                            approved forms of contract.
                        </li>
                        <li>
                            Liaising with Marine & Operations departments for
                            availability / suitability of vessels and for
                            subsequent post-fixture activity.
                        </li>
                    </ul>
                </div>
            </div>
            <Banner title="" />
        </section>
    );
}
