import React from "react";

import logo from "../assets/images/MedcareShipping.gif";

export default function LoadingPage() {
    return (
        <div className="loading-page-container">
            <img src={logo} alt="medcare logo" />
        </div>
    );
}
