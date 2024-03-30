import React from 'react';
import { FiX } from 'react-icons/fi';

const CustomAlertModal = ({
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
                    <h3 className="font-bold text-lg text-alert font-roboto mb-2 text-left">{title}</h3>
                    <p className="font-light font-roboto text-left">{description}</p>
                </div>
                <div className="flex justify-evenly pb-4">
                    <button
                        onClick={buttonOneOnClick}
                        className="font-roboto button text-userclient p-[0.7em] w-[45%] rounded-full border-solid border-2 border-userclient font-bold hover:bg-primarycolor hover:text-userclient transition-colors delay-250 duration-[3000] ease-in"
                    >
                        {buttonOneText}
                    </button>
                    <button
                        onClick={buttonTwoOnClick}
                        className="button bg-alert text-white p-[0.5em] w-[45%] rounded-full hover:bg-red-500 font-bold transition-colors delay-250 duration-[3000] ease-in"
                    >
                        {buttonTwoText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlertModal;
