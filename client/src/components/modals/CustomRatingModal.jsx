import React, { useState, useEffect } from 'react';

const CustomRatingModal = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      // Reset the form and submission state when the modal is closed
      setRating(5);
      setComment('');
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate a delay to show the submission success message
    setTimeout(() => {
      // After showing the success message, close the modal and reset
      onClose();
    }, 2000); // Adjust the delay as needed
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800 float-right">
          &times;
        </button>
        {isSubmitted ? (
          <div className="text-center p-6">
            <p>Rating Successfully Submitted!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-lg font-medium text-userclient">Rating Selected Service</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="3"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none"
              ></textarea>
            </div>
            <button type="submit" className="bg-usertrucker text-white py-2 px-4 rounded hover:bg-primarycolor">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CustomRatingModal;
