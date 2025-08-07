// // client/draw/AddtoCartDraw.jsx
// import React from "react";
// import { Drawer } from "antd";

// const AddtoCartDraw = ({ open, onClose, service }) => {
//   return (
//     <Drawer
//       title="Add to Cart"
//       placement="right"
//       onClose={onClose}
//       open={open}
//       width={400}
//     >
//       <form className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Event Date</label>
//           <input type="date" name="eventDate" className="w-full border p-2 rounded" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Event Time</label>
//           <input type="time" name="eventTime" className="w-full border p-2 rounded" />
//         </div>

//         <div>
//           <label className="block text-sm font-medium">Description</label>
//           <textarea name="description" className="w-full border p-2 rounded" rows={3}></textarea>
//         </div>

//         {/* Aage fields dalenge baad mein like quantity, location, etc */}

//         <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
//           Add to Cart
//         </button>
//       </form>
//     </Drawer>
//   );
// };

// export default AddtoCartDraw;

import React, { useState } from "react";
import { Drawer } from "antd";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../Redux/thunks/CartThunk";

const AddtoCartDraw = ({ open, onClose, service }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    eventDate: "",
    eventTime: "",
    endTime: "",
    description: "",
    quantity: "",
    location: "",
    hours: "",
    option: "",
    cartPrice: "",
    addOn: "",
    dateTime: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      servicesId: service._id, // match backend field name
    };

    dispatch(addToCartThunk(payload));
    onClose();
  };

  return (
    <Drawer title="Add to Cart" placement="right" onClose={onClose} open={open} width={400}>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Date + Time */}
        <div>
          <label className="block text-sm font-medium">Event Date</label>
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">Event Time</label>
          <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">End Time</label>
          <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" rows={2} />
        </div>

        {/* Quantity */}
        <div>
          <label className="block text-sm font-medium">Quantity</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* Hours */}
        <div>
          <label className="block text-sm font-medium">Hours</label>
          <input type="number" name="hours" value={formData.hours} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* Option */}
        <div>
          <label className="block text-sm font-medium">Option</label>
          <input type="text" name="option" value={formData.option} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Cart Price</label>
          <input type="number" name="cartPrice" value={formData.cartPrice} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* Add-on */}
        <div>
          <label className="block text-sm font-medium">Add-on (comma-separated)</label>
          <input type="text" name="addOn" value={formData.addOn} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        {/* DateTime */}
        <div>
          <label className="block text-sm font-medium">DateTime (comma-separated)</label>
          <input type="text" name="dateTime" value={formData.dateTime} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded w-full">
          Add to Cart
        </button>
      </form>
    </Drawer>
  );
};

export default AddtoCartDraw;
