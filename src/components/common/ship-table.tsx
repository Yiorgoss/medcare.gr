import React, { useState, lazy, Suspense } from "react";

import { YouTube, ExpandMore } from "@material-ui/icons/";

import { ImageOverlay } from "./";
import { shipType } from "../../types";

const ShipIFrame = lazy(() => import("./ship-iframe"));

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
                <td onClick={() => toggleHidden()} className="clickable">
                    <div>
                        <span>{ship.name}</span>
                        <ExpandMore />
                    </div>
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
                    <ImageOverlay image={image.name} style={image.style} key={index} />
                ))}
                {ship.iframe && (
                    <Suspense fallback={<IFrameLoading />}>
                        <ShipIFrame title={ship.iframe.title} ytURL={ship.iframe.yturl} />
                    </Suspense>
                )}
            </td>
        </tr>
    );
};

const IFrameLoading = () => {
    return (
        <div className="iframe-loading">
            <YouTube />
        </div>
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
