import React from "react";
import {  Link } from "react-router-dom";

const sideBarLinks = [
    {
        title: 'History',
        path: "/company/history"
    },
    {
        title: "Mission Statement",
        path: "/company/mission-statement"
    },
    {
        title: 'Quality',
        path: "/company/quality"
    },
    {
        title: 'Health, Safety and Environment',
        path: "/company/health-safety"
    },
    {
        title: 'Whistleblower Policy',
        path: "/company/whistleblower"
    },
    {
        title: 'Business Ethics Policy / Disciplinary Policy',
        path: "/company/policies"
    }
];

export default function SideBar() {
    return (
            <div className="sidebar-content-container">
                <div className="sidebar-title">
                    Company Statements
                </div>
                <div className="sidebar-content-list">
                    <ul>
                        { sideBarLinks.map(( link, index ) => (
                            <li key={index}>
                                <Link to={link.path}> {link.title} </Link>
                            </li>
                        )) }
                    </ul>
                </div>
            </div>
    ) 
}
