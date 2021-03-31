import React, { useState } from "react";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { ImageOverlay } from "./";
import { shipType } from "../../types";

interface shipTableProps {
    shipList: shipType[];
}

const TableHeader = () => {
    return (
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Year</th>
            <th>Flag</th>
            <th>DWT</th>
        </tr>
    );
};

const TableRow = ({ ship, index }: { ship: shipType; index: number }) => {
    const [isHidden, setHidden] = useState(true);

    const toggleHidden = () => {
        setHidden(!isHidden);
    };

    return (
        <tr key={index}>
            {ship.images.length === 0 ? (
                <td>
                    <span>{ship.name}</span>
                </td>
            ) : (
                <td onClick={() => toggleHidden()}>
                    <span>{ship.name}</span>
                    <ExpandMoreIcon  />
                </td>
            )}
            <td>
                <span>{ship.type}</span>
            </td>
            <td>
                <span>{ship.year}</span>
            </td>
            <td>
                <span>{ship.flag}</span>
            </td>
            <td>
                <span>{ship.dwt}</span>
            </td>
            <td className={`expanded-row-content ${isHidden && "hidden"}`}>
                {ship.images.map((image, index) => (
                    <ImageOverlay image={image} key={index} />
                ))}
            </td>
        </tr>
    );
};

export default function ShipTable({ shipList }: shipTableProps) {
    return (
        <>
            <div className="table-wrapper container">
                <table>
                    <thead>
                        <TableHeader />
                    </thead>
                    <tbody>
                        {shipList.map((ship, index) => (
                            <TableRow key={index} ship={ship} index={index} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
