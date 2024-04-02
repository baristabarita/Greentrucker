import React from 'react';
import truckIcon from "@/assets/icons/transport.png";
import trailerIcon from "@/assets/icons/trailer.png";

const AssignAssetModal = ({ isOpen, onClose, assignedAssets, sampleAssetsData, onAddAsset, onRemoveAsset }) => {
  if (!isOpen) return null;

    // Function to select the correct icon based on the asset type
  const getAssetIcon = (assetType) => {
    switch(assetType) {
      case 'Truck':
        return truckIcon;
      case 'Trailer':
        return trailerIcon;
      default:
        return null; // default icon or null if you prefer no icon for unknown types
    }
  };

  return (
    // Overlay with blur effect on the background
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      {/* Modal content with rounded corners and white background */}
      <div className="bg-white rounded-lg p-5 max-w-lg w-full mx-auto">
        {/* Title and description */}
        <h2 className="text-xl font-bold">Set up Assigned Assets</h2>
        <p className="mt-2 mb-4">The following assets are assigned to this booking:</p>

        {/* List of assigned assets */}
        {assignedAssets.length > 0 ? (
          assignedAssets.map((asset, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-200 py-2">
              <div className="flex items-center">
                {/* Asset Icon */}
                <img 
                  src={getAssetIcon(asset.asset_type)} 
                  alt={asset.asset_type} 
                  className="w-6 h-6 mr-2 rounded-lg bg-primarycolor p-1" // Adjust w-6 h-6 to change the size of the icon
                />
                <p className="font-semibold">{asset.asset_type}: {asset.type} - Plate: {asset.plate_number}</p>
              </div>
              {/* Remove button */}
              <button
                onClick={() => onRemoveAsset(index)}
                className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm px-4 py-2"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>No assets assigned.</p>
        )}

        {/* Add existing asset section */}
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Add Existing Asset</h3>
          {/* Selectable input for adding assets */}
          <select
            className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={e => onAddAsset(e.target.value)}
          >
            {sampleAssetsData.map((asset, index) => (
              <option key={index} value={index}>
                {asset.asset_type} - {asset.type} {asset.plate_number ? `- Plate: ${asset.plate_number}` : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Action buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="font-roboto button text-usertrucker p-[0.7em] w-[45%] rounded-full border-solid border-2 border-usertrucker font-bold hover:bg-usertrucker hover:text-primarycolor transition-colors delay-250 duration-[3000] ease-in"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="button bg-usertrucker text-white p-[0.5em] w-[45%] rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignAssetModal;
