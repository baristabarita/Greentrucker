import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountLogs } from "@/util/data/sampleAccountLogs";
import ViewAccountLogModal from "@/components/modals/admin/ViewAccountLogModal";
import { BiSolidUserBadge } from "react-icons/bi";

const AdminAccountLogs = () => {

    const [logs, setLogs] = useState(accountLogs);
    const [currentPage, setCurrentPage] = useState(1);
    const logsPerPage = 10;
    const [filterType, setFilterType] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLog, setSelectedLog] = useState(null);

    const typeOptions = ["All", "Client", "Trucker"];
    const statusOptions = ["All", "Activated", "Deactivated", "Deleted"];

    const getFilteredLogs = () => {
        return logs.filter(log => {
            const typeMatches = filterType === "All" || filterType === '' ? true : log.user_type === filterType;
            const statusMatches = filterStatus === "All" || filterStatus === '' ? true : log.status === filterStatus;
            return typeMatches && statusMatches;
        });
    };

    const totalPages = Math.ceil(getFilteredLogs().length / logsPerPage);

    const indexOfLastLog = currentPage * logsPerPage;
    const indexOfFirstLog = indexOfLastLog - logsPerPage;
    const currentLogs = getFilteredLogs().slice(indexOfFirstLog, indexOfLastLog);

    // Function to navigate to the next and previous page
    const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

    // Function to determine if the next or previous buttons should be disabled
    const nextButtonDisabled = currentPage >= totalPages;
    const prevButtonDisabled = currentPage <= 1;

    const handleViewDetails = (logId) => {
        const logDetails = logs.find(log => log.id === logId);
        setSelectedLog(logDetails);
        setIsModalOpen(true);
    };

    return (
        <div className="animate-fade-in p-5">
            <section className="flex items-center mb-4 text-primarycolor">
                <BiSolidUserBadge className="text-3xl mr-2" />
                <h2 className="text-3xl font-bold">Account Logs</h2>
            </section>
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
                    <div>
                        <select
                            value={filterType}
                            onChange={(e) => setFilterType(e.target.value)}
                            className="select select-bordered select-sm bg-useradmin text-secondarycolor"
                        >
                            {typeOptions.map((user_type) => (
                                <option key={user_type} value={user_type}>{user_type}</option>
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
                            <th scope="col" className="py-3 px-6">ACCOUNT ID</th>
                            <th scope="col" className="py-3 px-6">USER NAME</th>
                            <th scope="col" className="py-3 px-6">EMAIL ADDRESS</th>
                            <th scope="col" className="py-3 px-6">USER TYPE</th>
                            <th scope="col" className="py-3 px-6">LAST LOGGED</th>
                            <th scope="col" className="py-3 px-6">STATUS</th>
                            <th scope="col" className="py-3 px-6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentLogs.length > 0 ? (
                            currentLogs.map((log) => (
                                <tr key={log.id} className="bg-useradmin border-b">
                                    <td className="py-4 px-6 text-primarycolor">{log.id}</td>
                                    <td className="py-4 px-6 text-primarycolor">{log.username}</td>
                                    <td className="py-4 px-6 text-primarycolor">{log.email_address}</td>
                                    <td className="py-4 px-6 text-primarycolor">{log.user_type}</td>
                                    <td className="py-4 px-6 text-primarycolor">{log.last_login}</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex justify-center items-center">
                                            <span className={`inline-flex items-center justify-center font-bold rounded-full py-1 px-3 text-sm 
                                                ${log.status === "Deactivated" ? "bg-pending bg-opacity-30 text-orange-400" :
                                                    log.status === "Activated" ? "bg-complete bg-opacity-30 text-green-400" :
                                                        log.status === "Deleted" ? "bg-cancelled bg-opacity-30 text-red-400" :
                                                            "bg-gray-100 text-gray-800"}`}>
                                                {log.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 flex justify-center items-center">
                                        <button className="font-bold px-4 py-1 rounded-lg bg-secondarycolor text-userclient hover:bg-primarycolor hover:underline mr-2"
                                            onClick={() => handleViewDetails(log.id)}

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
                <span className="text-primarycolor font-bold">Showing {currentLogs.length} of {logs.length} Account Logs</span>
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
            <ViewAccountLogModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                log = {selectedLog}
            />
        </div>
    )
}

export default AdminAccountLogs;