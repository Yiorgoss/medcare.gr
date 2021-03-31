import React from "react";

import { ShipTable, Banner } from "../components/common";

import shipList from "../assets/ship-list";

export default function Fleet() {
    return (
        <section className="fleet">
            <Banner title="Fleet" />
            <ShipTable shipList={shipList} />
            <Banner title="" />
        </section>
    );
}
