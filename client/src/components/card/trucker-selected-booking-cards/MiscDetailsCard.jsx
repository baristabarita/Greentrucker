import React, { useState } from "react";

const MiscDetailsCard = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold">{title}</h3>
                <button>
                    {isOpen ? '▲' : '▼'}
                </button>
            </div>
            <hr className="border-t border-gray-300 my-2"/>
            {isOpen && (
                <div className="text-left">
                    {children}
                </div>
            )}
        </div>
    );
};

export default MiscDetailsCard;
