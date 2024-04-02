import React from "react";
import truckIcon from "@/assets/icons/transport.png"; // Adjust path as necessary
import trailerIcon from "@/assets/icons/trailer.png"; // Adjust path as necessary

const AssignedAssetDetailsCard = ({ asset }) => {
    // Determine which icon to use based on asset_type
    const icon = asset.asset_type === "Truck" ? truckIcon : trailerIcon;

    return (
        <div className="flex items-center space-x-4 bg-white rounded-lg shadow-md p-4 mb-4">
            {/* Asset Icon */}
            <div className="flex-shrink-0">
                <div className="p-2 bg-primarycolor rounded-lg">
                    <img src={icon} alt={asset.asset_type} className="h-8 w-8" />
                </div>
            </div>

            {/* Asset Details */}
            <div className="flex-grow flex flex-wrap items-center">
                <div className="flex-1 min-w-[160px]">
                    <p className="font-bold">Asset Type:</p>
                    <p>{asset.asset_type}</p>
                </div>
                <div className="flex-1 min-w-[160px]">
                    <p className="font-bold">{asset.asset_type === "Truck" ? "Brand:" : "Measurement:"}</p>
                    <p>{asset.asset_type === "Truck" ? asset.brand : asset.measurement}</p>
                </div>
                <div className="flex-1 min-w-[160px]">
                    <p className="font-bold">{asset.asset_type === "Truck" ? "Truck Type:" : "Trailer Type:"}</p>
                    <p>{asset.asset_type === "Truck" ? asset.truck_type : asset.trailer_type}</p>
                </div>
                <div className="flex-1 min-w-[160px]">
                    <p className="font-bold">Plate Number:</p>
                    <p>{asset.plate_number}</p>
                </div>
            </div>
        </div>
    );
};

export default AssignedAssetDetailsCard;
