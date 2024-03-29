import React from 'react';
import { FiX } from 'react-icons/fi';

const CustomConfirmationModal = ({
    isOpen,
    onClose,
    title,
    description,
    buttonOneText,
    buttonOneOnClick,
    buttonTwoText,
    buttonTwoOnClick
}) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
                <div className="flex justify-end p-2">
                    <button onClick={onClose}>
                        <FiX className="text-black hover:text-red-600" />
                    </button>
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg font-roboto mb-2 text-left">{title}</h3>
                    <p className="font-light font-roboto text-left">{description}</p>
                </div>
                <div className="flex justify-evenly pb-4">
                    <button
                        onClick={buttonOneOnClick}
                        className="font-roboto button text-usertrucker p-[0.7em] w-[45%] rounded-full border-solid border-2 border-usertrucker font-bold hover:bg-usertrucker hover:text-primarycolor transition-colors delay-250 duration-[3000] ease-in"
                    >
                        {buttonOneText}
                    </button>
                    <button
                        onClick={buttonTwoOnClick}
                        className="button bg-usertrucker text-white p-[0.5em] w-[45%] rounded-full hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in"
                    >
                        {buttonTwoText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomConfirmationModal;
