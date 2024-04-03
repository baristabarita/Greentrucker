import React, { useState } from 'react';

const EditPaymentModal = ({ isOpen, onClose, onSave, initialStatus = '', initialInvoiceDate = '', initialDueDate = '', initialPaymentDate = '', initialPaidAmount = '' }) => {
    const [status, setStatus] = useState(initialStatus);
    const [invoiceDate, setInvoiceDate] = useState(initialInvoiceDate);
    const [dueDate, setDueDate] = useState(initialDueDate);
    const [paymentDate, setPaymentDate] = useState(initialPaymentDate);
    const [paidAmount, setPaidAmount] = useState(initialPaidAmount);
    

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ status, invoiceDate, dueDate, paymentDate, paidAmount });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-md mx-auto">
                <h2 className="text-xl font-bold">Edit Payment Details</h2>
                <p className="mt-2">DISCLAIMER: Only specific details can be modified.</p>

                {/* Booking Status Selection */}
                <label className="flex justify-between mt-4">
                    <span className="text-gray-700 py-3">Edit Payment Status</span>
                    <select
                        className="form-select mt-1 block w-[50%] rounded-md border-gray-300 shadow-sm"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        {/* Option values should correspond to your booking statuses */}
                        <option value="Pending">Pending</option>
                        <option value="Paid">Paid</option>
                        <option value="Cancelled">Cancelled</option>
                    </select>
                </label>

                {/* Invoice Date Selection */}
                <label className="flex justify-between mt-4">
                    <span className="text-gray-700 py-3">Edit Invoice Date</span>
                    <input
                        type="date"
                        className="form-input mt-1 block w-[50%] rounded-md border-gray-300 shadow-sm"
                        value={invoiceDate}
                        onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                </label>

                <label className="flex justify-between mt-4">
                    <span className="text-gray-700 py-3">Edit Due Date</span>
                    <input
                        type="date"
                        className="form-input mt-1 block w-[50%] rounded-md border-gray-300 shadow-sm"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </label>

                <label className="flex justify-between mt-4">
                    <span className="text-gray-700 py-3">Full Payment Date</span>
                    <input
                        type="date"
                        className="form-input mt-1 block w-[50%] rounded-md border-gray-300 shadow-sm"
                        value={paymentDate}
                        onChange={(e) => setPaymentDate(e.target.value)}
                    />
                </label>

                <label className="flex justify-between mt-4">
                    <span className="text-gray-700 py-3">Set Amount Paid</span>
                    <input
                        type="number"
                        step="0.01"
                        className="form-input mt-1 block w-[50%] rounded-md border-gray-300 shadow-sm"
                        value={paidAmount}
                        onChange={(e) => setPaidAmount(e.target.value ? parseFloat(e.target.value) : '')}

                    />
                </label>

                {/* Action Buttons */}
                <div className="flex justify-between mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="font-roboto button text-usertrucker p-[0.7em] w-[45%] rounded-lg border-solid border-2 border-gray-300 font-bold hover:bg-usertrucker hover:text-primarycolor transition-colors delay-250 duration-[3000] ease-in"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="button bg-primarycolor text-white p-[0.5em] w-[45%] rounded-lg hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                    >
                        Confirm
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPaymentModal;
