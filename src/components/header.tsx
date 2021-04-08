import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

//import logoHeader from "../assets/images/logo-header.svg";
//import logoSmall from "../assets/images/logo-small.svg";
//import logoHeader from "../assets/images/logo-header.svg";

//import LogoSmall from "../logo.svg";

const headerLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Company",
        path: "/company/history",
    },
    {
        title: "Fleet",
        path: "/fleet",
    },
    {
        title: "Services",
        path: "/services/commercial",
    },
    {
        title: "Contact",
        path: "/contact",
    },
];

export default function Header() {
    const node = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handleClickOutside = (e: MouseEvent) => {
        if (node.current && node.current.contains(e.target as Node)) {
            // inside click
            return;
        }
        // outside click
        setOpen(false);
    };

    useEffect(() => {
        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <section className="header-container">
            <div className={`header-wrapper ${open && "active"}`} ref={node}>
                <div className="header-logo">
                    <a href="/">
                        <i aria-hidden="true"> </i>
                    </a>
                </div>
                <div className="header">
                    <ul className="header-list">
                        {headerLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path} onClick={() => setOpen(false)}>
                                    {" "}
                                    {link.title}{" "}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <MenuIcon onClick={() => setOpen(!open)} />
            </div>
        </section>
    );
}
