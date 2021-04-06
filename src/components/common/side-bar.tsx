import React from "react";
import { Link } from "react-router-dom";

import { linkType } from "../../types";

interface SideBarProps {
    title: string
    linkList: linkType[];
}

export default function SideBar({ linkList, title }: SideBarProps) {
    return (
        <div className="sidebar-content-container">
            <div className="sidebar-title">{title} Statements</div>
            <div className="sidebar-content-list">
                <ul>
                    {linkList.map((link) => (
                        <li>
                            <Link to={link.path}> {link.title} </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
