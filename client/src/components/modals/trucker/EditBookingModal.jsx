import React, { useState } from 'react';

const EditBookingModal = ({ isOpen, onClose, onSave, initialStatus = '', initialDate = '' }) => {
  const [status, setStatus] = useState(initialStatus);
  const [arrivalDate, setArrivalDate] = useState(initialDate);
  const [proofOfCompletion, setProofOfCompletion] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ status, arrivalDate, proofOfCompletion });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 max-w-md mx-auto">
        <h2 className="text-xl font-bold">Edit Booking Details</h2>
        <p className="mt-2">DISCLAIMER: Only specific data can be modified.</p>
        
        {/* Booking Status Selection */}
        <label className="block mt-4">
          <span className="text-gray-700">Select Booking Status</span>
          <select 
            className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            {/* Option values should correspond to your booking statuses */}
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Reserved">Reserved</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </label>

        {/* Est. Arrival Date Selection */}
        <label className="block mt-4">
          <span className="text-gray-700">Set Est. Arrival Date</span>
          <input 
            type="date" 
            className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm" 
            value={arrivalDate} 
            onChange={(e) => setArrivalDate(e.target.value)}
          />
        </label>

        {/* Conditional Proof of Completion Document Upload */}
        {status === 'Completed' && (
          <label className="block mt-4">
            <span className="text-gray-700">Submit Proof of Completion Document</span>
            <input 
              type="file" 
              className="form-input mt-1 block w-full" 
              onChange={(e) => setProofOfCompletion(e.target.files[0])}
            />
          </label>
        )}

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

export default EditBookingModal;
