import React from "react";

const ViewDocumentModal = ({ isOpen, documentUrl, altText = "Document", onClose }) => {
  // Early return if the modal is not open or documentUrl is not provided
  if (!isOpen || !documentUrl) {
    return null;
  }

  // Handle background click to close the modal
  const handleBackgroundClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose(); // Only close if the click is on the overlay
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center overflow-auto"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded shadow-lg max-w-3xl h-[75%] w-full m-4 overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h5 className="text-xl font-medium">Viewing Document</h5>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <img src={documentUrl} alt={altText} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ViewDocumentModal;
