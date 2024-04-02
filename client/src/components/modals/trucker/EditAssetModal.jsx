import React, { useState, useEffect } from 'react';

const EditAssetModal = ({ isOpen, onClose, onSave, asset }) => {
  const [assetDetails, setAssetDetails] = useState({
    name: '',
    brand: '',
    plate_number: '',
    status: '',
    weight: '',
    measurement: ''
  });

  useEffect(() => {
    // Assuming `asset` has a property `asset_type` to distinguish between Truck and Trailer
    if (asset) {
      setAssetDetails({
        name: asset.truck_name || asset.trailer_type || '',
        brand: asset.brand || '',
        plate_number: asset.plate_number || '',
        status: asset.status || '',
        weight: asset.weight || '',
        measurement: asset.measurement || '',
      });
    }
  }, [asset, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssetDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(asset.id, assetDetails);
    onClose(); // Close the modal after saving
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
      <div className="bg-white rounded-lg p-5 max-w-md w-full">
        <h2 className="text-lg font-bold mb-4 ml-2">Edit Asset Details</h2>

        <p className='text-gray-500 px-2 pb-3'>Selecting an asset type will have different inputs.</p>
        {/* Conditional rendering based on asset type */}
        {asset.asset_type === 'Truck' ? (
          <>
            <div className='flex justify-between mb-2'>
              <p className='px-2 py-3'>Truck Name</p>
              <input
                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                placeholder="Truck Name"
                name="name"
                value={assetDetails.name}
                onChange={handleChange}
              />
            </div>
            <div className='flex justify-between mb-2'>
              <p className='px-2 py-3'>Truck Brand</p>
              <input
                className="form-input mt-1 block  w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                placeholder="Brand"
                name="brand"
                value={assetDetails.brand}
                onChange={handleChange}
              />
            </div>
          </>
        ) : (
          <>
            <div className='flex justify-between mb-2'>
              <p className='px-2 py-3'>Measurements</p>
              <input
                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                placeholder="Measurement"
                name="measurement"
                value={assetDetails.measurement}
                onChange={handleChange}
              />
            </div>
            <div className='flex justify-between mb-2'>
              <p className='px-2 py-3'>Trailer Weight</p>
              <input
                className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
                placeholder="Weight"
                name="weight"
                value={assetDetails.weight}
                onChange={handleChange}
              />
            </div>
          </>
        )}

        {/* Inputs common to both types */}
        <div className='flex justify-between mb-2'>
          <p className='px-2 py-3'>Plate Number</p>
          <input
            className="form-input mt-1 block w-[70%] bg-gray-100 border border-gray-300 rounded-md p-2"
            placeholder="Plate Number"
            name="plate_number"
            value={assetDetails.plate_number}
            onChange={handleChange}
          />
        </div>
        <div className='flex justify-between mb-2'>
          <p className='px-2 py-3'>Status</p>
          <select
            id="status"
            name="status"
            value={assetDetails.status}
            onChange={handleChange}
            className="mt-1 block w-[70%] pl-3 pr-10 py-2 text-base bg-gray-100 border border-gray-300 focus:outline-none focus:ring-primarycolor focus:border-primarycolor sm:text-sm rounded-md"
          >
            <option value="Idle">Idle</option>
            <option value="In-Use">In-Use</option>
          </select>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={onClose} 
                  className="font-roboto button text-usertrucker p-[0.5em] w-[45%] rounded-lg border-solid border-2 border-gray-300 font-bold hover:bg-usertrucker hover:text-primarycolor transition-colors delay-250 duration-[3000] ease-in">Cancel</button>
          <button onClick={handleSubmit} className="button bg-primarycolor text-white p-[0.5em] w-[45%] rounded-lg hover:bg-secondarycolor hover:text-usertrucker font-bold transition-colors delay-250 duration-[3000] ease-in">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditAssetModal;
