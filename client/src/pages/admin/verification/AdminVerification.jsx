import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewRequestModal from "@/components/modals/admin/ViewRequestModal";
import { verifyRequests } from "@/util/data/sampleVerificationsData";
import { BsCheckSquareFill } from "react-icons/bs";
import defaultImage from '@/assets/images/defaultpfp.jpg';

const AdminVerification = () => {

    const navigate = useNavigate();
    const [requests, setRequests] = useState(verifyRequests);
    const [currentPage, setCurrentPage] = useState(1);
    const requestsPerPage = 10;
    const [filterStatus, setFilterStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRequest, setSelectedRequest] = useState(null);

    const statusOptions = ["All", "Pending", "Verified", "Declined"];

    const getFilteredRequests = () => {
        return requests.filter(request => {
            const statusMatches = filterStatus === "All" || filterStatus === '' ? true : request.status === filterStatus;
            return statusMatches;
        });
    };

    const totalPages = Math.ceil(getFilteredRequests().length / requestsPerPage);

    const indexOfLastRequest = currentPage * requestsPerPage;
    const indexOfFirstRequest = indexOfLastRequest - requestsPerPage;
    const currentRequests = getFilteredRequests().slice(indexOfFirstRequest, indexOfLastRequest);

    // Function to navigate to the next and previous page
    const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

    // Function to determine if the next or previous buttons should be disabled
    const nextButtonDisabled = currentPage >= totalPages;
    const prevButtonDisabled = currentPage <= 1;

    const handleViewDetails = (requestId) => {
        const requestDetails = requests.find(request => request.id === requestId);
        setSelectedRequest(requestDetails);
        setIsModalOpen(true);
    };

    return (
        <div className="animate-fade-in p-5">
            <div className="flex items-center mb-4 text-primarycolor">
                <BsCheckSquareFill className="text-3xl mr-2" />
                <h2 className="text-3xl font-bold">Account Verification Requests</h2>
            </div>
            {/* Filter */}
            <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3 bg-useradmin rounded-lg p-3 shadow-sm">
                    <span className="font-medium text-primarycolor">Filter by:</span>
                    <div>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="select select-bordered select-sm bg-useradmin text-secondarycolor"
                        >
                            {statusOptions.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Table to display requests */}
            <div className="overflow-y-auto mt-4 bg-useradmin rounded-lg drop-shadow-lg shadow-lg opacity-1">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-primarycolor">
                        <tr>
                            <th scope="col" className="py-3 px-6">Company Name</th>
                            <th scope="col" className="py-3 px-6">Owner Name</th>
                            <th scope="col" className="py-3 px-6">Email Address</th>
                            <th scope="col" className="py-3 px-6">Request Date</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRequests.length > 0 ? (
                            currentRequests.map((request) => (
                                <tr key={request.id} className="bg-useradmin border-b">
                                    <td className="py-4 px-6 text-primarycolor">{request.company_name}</td>
                                    <td className="py-4 px-6 text-primarycolor">{request.contact_name}</td>
                                    <td className="py-4 px-6 text-primarycolor">{request.email_address}</td>
                                    <td className="py-4 px-6 text-primarycolor">{request.sent_date}</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex justify-center items-center">
                                            <span className={`inline-flex items-center justify-center font-bold rounded-full py-1 px-3 text-sm 
                                                ${request.status === "Pending" ? "bg-pending bg-opacity-30 text-orange-400" :
                                                    request.status === "Verified" ? "bg-complete bg-opacity-30 text-green-400" :
                                                        request.status === "Declined" ? "bg-cancelled bg-opacity-30 text-red-400" :
                                                            "bg-gray-100 text-gray-800"}`}>
                                                {request.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 flex justify-center items-center">
                                        <button className="font-bold px-4 py-1 rounded-lg bg-secondarycolor text-userclient hover:bg-primarycolor hover:underline mr-2"
                                            onClick={() => handleViewDetails(request.id)}

                                        >View Details
                                        </button>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No Requests right now</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Pagination and Showing X of Y requests */}
            <div className="flex justify-between items-center mt-4">
                <span className="text-primarycolor font-bold">Showing {currentRequests.length} of {requests.length} Verification Requests</span>
                <div className="flex">
                    <button
                        onClick={goToPreviousPage}
                        disabled={prevButtonDisabled}
                        className={`px-4 py-2 bg-useradmin text-secondarycolor font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${prevButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        &#8592;
                    </button>

                    <div className="flex items-center justify-center">
                        <span className="px-4 py-2 bg-useradmin text-primarycolor font-semibold rounded-md">
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={nextButtonDisabled}
                        className={`px-4 py-2 bg-useradmin text-secondarycolor font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${nextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        &#8594;
                    </button>
                </div>
            </div>
            <ViewRequestModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                request={selectedRequest} 
            />
        </div>
    )
}

export default AdminVerification;