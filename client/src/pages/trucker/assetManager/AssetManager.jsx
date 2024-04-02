import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { truckerAssets } from "@/util/data/sampleAssetsData";
import AddNewAssetModal from "@/components/modals/trucker/AddNewAssetModal";
import EditAssetModal from "@/components/modals/trucker/EditAssetModal";
import CustomAlertModal from "@/components/modals/CustomAlertModal";
import { BiSolidTruck, BiSolidAddToQueue } from "react-icons/bi";


const AssetManager = () => {

    const navigate = useNavigate();
    const [truckPage, setTruckPage] = useState(0);
    const [trailerPage, setTrailerPage] = useState(0);
    const [isNewAssetModalOpen, setIsNewAssetModalOpen] = useState(false);
    const [editAsset, setEditAsset] = useState(null); // Initially, no asset is selected for editing
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const rowsPerPage = 3;
    const filteredTruckAssets = truckerAssets.filter(asset => asset.asset_type === 'Truck');
    const filteredTrailerAssets = truckerAssets.filter(asset => asset.asset_type === 'Trailer');
    const truckAssetsToShow = filteredTruckAssets.slice(truckPage * rowsPerPage, (truckPage + 1) * rowsPerPage);
    const trailerAssetsToShow = filteredTrailerAssets.slice(trailerPage * rowsPerPage, (trailerPage + 1) * rowsPerPage);
    const totalTruckPages = Math.ceil(filteredTruckAssets.length / rowsPerPage);
    const totalTrailerPages = Math.ceil(filteredTrailerAssets.length / rowsPerPage);
    // Truck Pagination Controls
    const goToPreviousTruckPage = () => setTruckPage(Math.max(0, truckPage - 1));
    const goToNextTruckPage = () => setTruckPage(Math.min(totalTruckPages - 1, truckPage + 1));

    // Trailer Pagination Controls
    const goToPreviousTrailerPage = () => setTrailerPage(Math.max(0, trailerPage - 1));
    const goToNextTrailerPage = () => setTrailerPage(Math.min(totalTrailerPages - 1, trailerPage + 1));

    // Render Pagination for both Truck and Trailer assets
    const renderPaginationControls = (currentPage, totalPages, goToPreviousPage, goToNextPage) => (
        <div className="flex justify-between items-center mt-4">
            <span className="text-gray-600 font-bold">
                Showing {Math.min(rowsPerPage, currentPage === totalPages - 1 ? (currentPage + 1) * rowsPerPage - filteredTruckAssets.length : rowsPerPage)} of {filteredTruckAssets.length} assets
            </span>
            <div className="flex">
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage <= 0}
                    className={`px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${currentPage <= 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    &#8592;
                </button>
                <div className="flex items-center justify-center">
                    <span className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400">
                        Page {currentPage + 1} of {totalPages}
                    </span>
                </div>
                <button
                    onClick={goToNextPage}
                    disabled={currentPage >= totalPages - 1}
                    className={`px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${currentPage >= totalPages - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    &#8594;
                </button>
            </div>
        </div>
    );

    const handleOpenNewAssetModal = () => setIsNewAssetModalOpen(true);
    const handleCloseNewAssetModal = () => setIsNewAssetModalOpen(false);

    // Function to handle adding a new asset
    const handleAddAsset = (assetType, assetDetails) => {
        // Here you would add logic to process the new asset data,
        // such as updating state or sending it to a server.
        console.log(assetType, assetDetails);
    };
    const handleEditAsset = (asset) => {
        setEditAsset(asset); // Set the currently selected asset for editing
        setIsEditModalOpen(true); // Open the modal
    };

    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
        setEditAsset(null); // Reset the edit asset state
    };

    const handleShowAlertModal = () => {
        setShowAlertModal(true);
    };
    const handleCloseAlertModal = () => {
        setShowAlertModal(false);
    };

    return (
        <div className="animate-fade-in p-5">
            <div className="mt-4 mb-8 flex font-bold items-center">
                <p className="flex text-[2em]"><BiSolidTruck className="mr-2 mt-1" />Assets Overview</p>
                <button
                    className="flex ml-auto items-center bg-usertrucker text-white hover:bg-primarycolor hover:text-userclient font-bold px-4 py-3 rounded"
                    onClick={handleOpenNewAssetModal}
                >
                    <BiSolidAddToQueue className="mt-[5%] mr-2" /> Add New Asset
                </button>
            </div>

            {/* Truck Assets Table */}
            <h2 className="font-bold text-lg">Truck Assets</h2>
            <div className="overflow-y-auto mt-4 bg-white rounded-lg drop-shadow-lg shadow-lg opacity-1">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-primarycolor">
                        <tr>
                            <th scope="col" className="py-3 px-6">ID</th>
                            <th scope="col" className="py-3 px-6">TRUCK NAME</th>
                            <th scope="col" className="py-3 px-6">BRAND</th>
                            <th scope="col" className="py-3 px-6">TYPE</th>
                            <th scope="col" className="py-3 px-6">PLATE NUMBER</th>
                            <th scope="col" className="py-3 px-6">STATUS</th>
                            <th scope="col" className="py-3 px-6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {truckAssetsToShow.length > 0 ? (
                            truckAssetsToShow.map((asset, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                    <td className="py-4 px-6">{asset.id}</td>
                                    <td className="py-4 px-6">{asset.truck_name}</td>
                                    <td className="py-4 px-6">{asset.brand}</td>
                                    <td className="py-4 px-6">{asset.truck_type}</td>
                                    <td className="py-4 px-6">{asset.plate_number}</td>
                                    <td className="py-4 px-6"><p
                                        className={`font-bold rounded-full mt-1 py-[2%] w-full xl:max-2xl:text-[0.9em] 
                                            ${asset.status == "Idle"
                                                ? "bg-cancelled bg-opacity-30 text-red-600"
                                                : "bg-complete bg-opacity-30 text-green-600"
                                            }`}
                                    >
                                        {asset.status}
                                    </p></td>
                                    <td className="py-4 px-6 flex justify-center items-center">
                                        <button className="font-bold px-4 py-1 rounded-lg bg-secondarycolor text-userclient hover:bg-primarycolor hover:underline mr-2"
                                            onClick={() => handleEditAsset(asset)}
                                        >Edit Details
                                        </button>
                                        <button className="font-bold px-4 py-1 rounded-lg bg-alert text-white hover:bg-red-500 hover:underline mr-2"
                                            onClick={handleShowAlertModal}
                                        >Delete Asset
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5" className="text-center py-4">No truck assets found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination for Truck Assets */}
            {renderPaginationControls(truckPage, totalTruckPages, goToPreviousTruckPage, goToNextTruckPage)}

            {/* Trailer Assets Table */}
            <h2 className="font-bold text-lg mt-6">Trailer Assets</h2>
            <div className="overflow-y-auto mt-8 bg-white rounded-lg drop-shadow-lg shadow-lg opacity-1">
                <table className="w-full text-sm text-center text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-primarycolor">
                        <tr>
                            <th scope="col" className="py-3 px-6">ID</th>
                            <th scope="col" className="py-3 px-6">TRAILER TYPE</th>
                            <th scope="col" className="py-3 px-6">MEASUREMENTS</th>
                            <th scope="col" className="py-3 px-6">WEIGHT</th>
                            <th scope="col" className="py-3 px-6">PLATE NUMBER</th>
                            <th scope="col" className="py-3 px-6">STATUS</th>
                            <th scope="col" className="py-3 px-6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trailerAssetsToShow.length > 0 ? (
                            trailerAssetsToShow.map((asset, index) => (
                                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                    <td className="py-4 px-6">{asset.id}</td>
                                    <td className="py-4 px-6">{asset.trailer_type}</td>
                                    <td className="py-4 px-6">{asset.measurement}</td>
                                    <td className="py-4 px-6">{asset.weight}</td>
                                    <td className="py-4 px-6">{asset.plate_number}</td>
                                    <td className="py-4 px-6"><p
                                        className={`font-bold rounded-full mt-1 py-[2%] w-full xl:max-2xl:text-[0.9em] 
                                            ${asset.status == "Idle"
                                                ? "bg-cancelled bg-opacity-30 text-red-600"
                                                : "bg-complete bg-opacity-30 text-green-600"
                                            }`}
                                    >
                                        {asset.status}
                                    </p></td>
                                    <td className="py-4 px-6 flex justify-center items-center">
                                        <button className="font-bold px-4 py-1 rounded-lg bg-secondarycolor text-userclient hover:bg-primarycolor hover:underline mr-2"
                                            onClick={() => handleEditAsset(asset)}
                                        >Edit Details
                                        </button>
                                        <button className="font-bold px-4 py-1 rounded-lg bg-alert text-white hover:bg-red-500 hover:underline mr-2"
                                            onClick={handleShowAlertModal}
                                        >Delete Asset
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr><td colSpan="5" className="text-center py-4">No trailer assets found</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Pagination and Showing X of Y bookings */}
            {renderPaginationControls(trailerPage, totalTrailerPages, goToPreviousTrailerPage, goToNextTrailerPage)}
            <AddNewAssetModal
                isOpen={isNewAssetModalOpen}
                onClose={handleCloseNewAssetModal}
                onAddAsset={handleAddAsset}
            />
            <EditAssetModal
                isOpen={isEditModalOpen}
                onClose={handleCloseEditModal}
                onSave={(assetId, assetDetails) => {
                    // Implement saving logic here
                    console.log(assetId, assetDetails); // Example implementation
                    handleCloseEditModal();
                }}
                asset={editAsset}
            />
            <CustomAlertModal
                isOpen={showAlertModal}
                onClose={handleCloseAlertModal}
                title="Delete Selected Asset"
                description="Are you sure you want to delete Asset? This action cannot be undone."
                buttonOneText="Cancel"
                buttonOneOnClick={handleCloseAlertModal}
                buttonTwoText="Delete"
                buttonTwoOnClick={() => { navigate("/trucker/truckerassets") }}
            />
        </div>
    );
}

export default AssetManager;