import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { paymentsList } from "@/util/data/samplePaymentsData";
import CustomAlertModal from "@/components/modals/CustomAlertModal";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SelectedPayment = () => {
    const navigate = useNavigate();
    const [payment, setPayment] = useState(null);
    const [showAlertModal, setShowAlertModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {
        const paymentId = localStorage.getItem('selectedPaymentId');
        if (paymentId) {
            const selectedPayment = paymentsList.find(b => b.payment_id === parseInt(paymentId, 10));
            setPayment(selectedPayment);
        }
    }, []);

    if (!payment) {
        return <div>Loading payment details...</div>;
    }

    const handleShowAlertModal = () => {
        setShowAlertModal(true);
    };
    const handleCloseAlertModal = () => {
        setShowAlertModal(false);
    };
    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);

    return (
        <div className="animate-fade-in p-5">
            {/* Page title and buttons */}
            <div className="flex justify-between mb-4">
                <h3
                    className="text-userclient cursor-pointer py-[1%] font-bold flex items-center xl:max-2xl:text-[1.2em] xl:max-2xl:py-[0.5%]"
                    onClick={() => navigate('/trucker/truckerpayments')}
                >
                    <AiOutlineArrowLeft className="text-black hover:text-primarycolor" />
                    Back to Payments Overview
                </h3>
                <div>
                    <button className="mb-2 mr-2 px-4 py-2 bg-alert text-white hover:bg-red-500  rounded-lg font-bold"
                        onClick={handleShowAlertModal}>Delete Payment</button>
                    <button className="mb-2 px-4 py-2 bg-usertrucker text-white hover:bg-primarycolor hover:text-userclient  rounded-lg font-bold"
                        onClick={handleShowEditModal}>Edit Payment</button>
                </div>
            </div>
            {/* Main contents */}
            <div className="bg-white rounded-lg shadow-lg p-6">
                {/* Overview Title */}
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <hr className="mb-6" />

                {/* Invoice and Date Details */}
                <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200 mb-6">
                    {/* Invoice Details Column */}
                    <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-2 py-2 px-4 w-[45%] rounded-xl bg-primarycolor text-white">Invoice Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Payment ID:</span> <span>{payment.payment_id}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Booking ID:</span> <span>{payment.booking_id}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Client Name:</span> <span>{payment.client_name}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Payment Status:</span> <span>{payment.payment_status}</span>
                        </div>
                    </div>

                    {/* Date Details Column */}
                    <div className="md:w-1/2 py-4 px-20">
                        <h3 className="font-semibold text-lg mb-2 py-2 px-4 w-[45%] rounded-xl bg-primarycolor text-white">Dates Details</h3>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Invoice Date:</span> <span>{payment.invoice_date}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Due Date:</span> <span>{payment.due_date}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-bold">Paid Date:</span> <span>{payment.paid_date || 'N/A'}</span>
                        </div>
                    </div>
                </div>

                {/* Charges and Balance */}
                <h3 className="font-semibold text-lg mb-2 ml-20 py-2 px-4 w-[25%] rounded-xl bg-primarycolor text-white">Charges and Balance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Charges Column */}
                    <div className="px-20">
                        
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Service Charge:</span> <span>₱ {payment.service_charge.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Distance Charge:</span> <span>₱ {payment.distance_charge.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Total Container Charge:</span> <span>₱ {payment.container_charge.toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Balance Column */}
                    <div className="px-20">
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Total Balance:</span> <span>₱ {payment.total_balance.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Remaining Balance:</span> <span>₱ {payment.remaining_balance.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Paid Amount:</span> <span>₱ {payment.paid_amount.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectedPayment;