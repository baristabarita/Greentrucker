import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentRevenueChart from "@/components/charts/trucker/PaymentRevenueChart";
import { paymentsList } from "@/util/data/samplePaymentsData";
import { MdPayments, MdEditSquare } from "react-icons/md";


const PaymentManager = () => {
    const navigate = useNavigate();
    const [payments, setPayments] = useState(paymentsList);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterDate, setFilterDate] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    
    const paymentsGraphData = [
        {
            id: "Graph Data",
            data: [
                { x: "2024-03-07", y: 10000 },
                { x: "2024-03-14", y: 10151 },
                { x: "2024-03-21", y: 15000 },
                { x: "2024-03-28", y: 30000 },
                { x: "2024-04-04", y: 23000 },
                { x: "2024-04-11", y: 27000 },
                { x: "2024-04-18", y: 28000 },
                
            ],
        },
    ];

    const paymentsPerPage = 5;
    // Status options for the dropdown
    const statusOptions = ["All", "Pending", "Paid", "Cancelled"];

    // Function to filter payments based on selected filters
    const getFilteredPayments = () => {
        return payments.filter(payment => {
            const dateMatches = filterDate ? payment.invoice_date === filterDate : true;
            const statusMatches = filterStatus === "All" || filterStatus === '' ? true : payment.payment_status === filterStatus;
            return dateMatches && statusMatches;
        });
    };

    const totalPages = Math.ceil(getFilteredPayments().length / paymentsPerPage);

    // Calculate the currently displayed payments
    const indexOfLastPayment = currentPage * paymentsPerPage;
    const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
    const currentPayments = getFilteredPayments().slice(indexOfFirstPayment, indexOfLastPayment);


    // Function to navigate to the next and previous page
    const goToNextPage = () => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    const goToPreviousPage = () => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

    // Function to determine if the next or previous buttons should be disabled
    const nextButtonDisabled = currentPage >= totalPages;
    const prevButtonDisabled = currentPage <= 1;

    const handleSetCharges = () => {
        alert("this sets the charges");
    }

    const handleViewDetails = (paymentId) => {
        localStorage.setItem('selectedPaymentId', paymentId);
        navigate('/trucker/truckerpayments/payment');
    };

    return (
        <div className="animate-fade-in p-5">
            <div className="flex items-center mb-4">
                <MdPayments className="text-3xl mr-2" />
                <h2 className="text-3xl font-bold">Payments Overview</h2>
            </div>
             {/* Graph Section */}
             <section className="container my-5 bg-[white] rounded-md border shadow-lg drop-shadow-lg ">
                <div className="flex items-center justify-between py-2 px-4 border-b-2 border-gray-300">
                    <h2 className="text-[1.5em] font-bold">Weekly Revenue</h2>
                </div>
                <div className="h-[50vh] mx-auto pb-5">
                    <PaymentRevenueChart data={paymentsGraphData} />
                </div>
            </section>
            {/* Filter and  Set payment charges button*/}
            <section className="flex justify-between items-center">
                <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
                    <span className="font-medium">Filter by:</span>
                    <div>
                        <input
                            type="date"
                            value={filterDate}
                            onChange={(e) => setFilterDate(e.target.value)}
                            className="input input-bordered input-sm"
                        />
                    </div>
                    <div>
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="select select-bordered select-sm"
                        >
                            {statusOptions.map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <button onClick={handleSetCharges} className="btn btn-sm px-4 py-2 rounded-md bg-usertrucker text-white hover:bg-primarycolor hover:text-usertrucker btn-primary">Set Payment Charges</button>
                </div>

            </section>
            {/* Table to display paymeents */}
            <section className="overflow-y-auto mt-4 bg-white rounded-lg drop-shadow-lg shadow-lg opacity-1">
                <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-primarycolor">
                        <tr>
                            <th scope="col" className="py-3 px-6">CLIENT NAME</th>
                            <th scope="col" className="py-3 px-6">INVOICE SENT DATE</th>
                            <th scope="col" className="py-3 px-6">TOTAL BALANCE (₱)</th>
                            <th scope="col" className="py-3 px-6">REMAINING BALANCE (₱)</th>
                            <th scope="col" className="py-3 px-6">STATUS</th>
                            <th scope="col" className="py-3 px-6">ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPayments.length > 0 ? (
                            currentPayments.map((payment) => (
                                <tr key={payment.payment_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="py-4 px-6">{payment.client_name}</td>
                                    <td className="py-4 px-6">{payment.invoice_date}</td>
                                    <td className="py-4 px-6">{payment.total_balance}</td>
                                    <td className="py-4 px-6">{payment.remaining_balance}</td>
                                    <td className="py-4 px-6 text-center">
                                        <div className="flex justify-center items-center">
                                            <span className={`inline-flex items-center justify-center font-bold rounded-full py-1 px-3 text-sm 
                                                ${payment.payment_status === "Pending" ? "bg-pending bg-opacity-30 text-orange-600" :
                                                    payment.payment_status === "Paid" ? "bg-complete bg-opacity-30 text-green-600" :
                                                        payment.payment_status === "Cancelled" ? "bg-cancelled bg-opacity-30 text-red-600" :
                                                            "bg-gray-100 text-gray-800"}`}>
                                                {payment.payment_status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 flex justify-center items-center">
                                        <button className="font-bold px-4 py-1 rounded-lg bg-secondarycolor text-userclient hover:bg-primarycolor hover:underline mr-2"
                                            onClick={() => handleViewDetails(payment.payment_id)}

                                        >View Details
                                        </button>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center py-4">No bookings found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
            {/* Pagination and Showing X of Y bookings */}
            <section className="flex justify-between items-center mt-4">
                <span className="text-gray-600 font-bold">Showing {currentPayments.length} of {payments.length} payments</span>
                <div className="flex">
                    <button
                        onClick={goToPreviousPage}
                        disabled={prevButtonDisabled}
                        className={`px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${prevButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        &#8592;
                    </button>

                    <div className="flex items-center justify-center">
                        <span className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400">
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={nextButtonDisabled}
                        className={`px-4 py-2 bg-white text-gray-800 font-semibold rounded-md border border-gray-400 hover:bg-gray-300 ${nextButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        &#8594;
                    </button>
                </div>
            </section>
        </div>
    )
}

export default PaymentManager;