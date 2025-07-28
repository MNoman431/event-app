// // src/vendor/pages/VendorDetailPage.jsx
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import {
//   fetchServiceByIdThunk,
//   deleteServiceThunk,
//   updateServiceThunk,
// } from "../../Redux/thunks/VendorRegisterThunk";

// const VendorDetailPage = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { serviceDetail, loading, error } = useSelector(
//     (state) => state.vendorRegister
//   );

//   const [isEditing, setIsEditing] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     city: "",
//     location: "",
//     description: "",
//   });
//   const [newCoverImage, setNewCoverImage] = useState(null); // 🔥 for new image

//   // Fetch details
//   useEffect(() => {
//     dispatch(fetchServiceByIdThunk(id));
//   }, [dispatch, id]);

//   // Pre-fill data
//   useEffect(() => {
//     if (serviceDetail) {
//       setFormData({
//         name: serviceDetail.name || "",
//         price: serviceDetail.price || "",
//         city: serviceDetail.city || "",
//         location: serviceDetail.location || "",
//         description: serviceDetail.description || "",
//       });
//     }
//   }, [serviceDetail]);

//   const handleDelete = async () => {
//     if (window.confirm("Are you sure you want to delete this service?")) {
//       await dispatch(deleteServiceThunk(id));
//       navigate("/vendor/vendordashboard");
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     const updatedData = new FormData();
//     updatedData.append("name", formData.name);
//     updatedData.append("price", formData.price);
//     updatedData.append("city", formData.city);
//     updatedData.append("location", formData.location);
//     updatedData.append("description", formData.description);

//     if (newCoverImage) {
//       updatedData.append("coverImage", newCoverImage); // 👈 EXACT field name
//     }

//     const res = await dispatch(
//       updateServiceThunk({ serviceId: id, formData: updatedData })
//     );

//     if (!res.error) {
//       await dispatch(fetchServiceByIdThunk(id)); // refresh
//       setIsEditing(false);
//       setNewCoverImage(null);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-600">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;
//   if (!serviceDetail)
//     return <p className="text-center text-gray-500">No details found.</p>;

//   const renderArray = (arr) => {
//     if (!arr || arr.length === 0)
//       return <span className="text-gray-500">N/A</span>;
//     return (
//       <div className="flex flex-wrap gap-2">
//         {arr.map((item, i) => (
//           <span
//             key={i}
//             className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded"
//           >
//             {item.replace(/[\[\]"]+/g, "")}
//           </span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
//         <Link
//           to="/vendor/vendordashboard"
//           className="inline-block mb-4 text-yellow-600 hover:underline"
//         >
//           ← Back to Dashboard
//         </Link>

//         {serviceDetail.coverImage && (
//           <img
//             src={`http://localhost:5000/uploads/${serviceDetail.coverImage}`}
//             alt={serviceDetail.name}
//             className="w-full h-64 object-cover rounded-lg mb-6"
//           />
//         )}

//         {!isEditing ? (
//           <>
//             <h1 className="text-3xl font-bold text-gray-800 mb-2">
//               {serviceDetail.name}
//             </h1>
//             <p className="text-gray-600 mb-4">{serviceDetail.description}</p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <p>
//                   <strong>Price:</strong> Rs {serviceDetail.price}
//                 </p>
//                 <p>
//                   <strong>City:</strong> {serviceDetail.city || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Location:</strong> {serviceDetail.location || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Status:</strong>
//                   <span
//                     className={`ml-2 px-2 py-1 rounded text-sm ${
//                       serviceDetail.status === "Pending"
//                         ? "bg-yellow-100 text-yellow-700"
//                         : "bg-green-100 text-green-700"
//                     }`}
//                   >
//                     {serviceDetail.status}
//                   </span>
//                 </p>
//               </div>
//               <div>
//                 <p>
//                   <strong>Team Members:</strong>{" "}
//                   {serviceDetail.teamMembers || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Town:</strong> {serviceDetail.town || "N/A"}
//                 </p>
//                 <p>
//                   <strong>Created:</strong>{" "}
//                   {new Date(serviceDetail.createdAt).toLocaleString()}
//                 </p>
//                 <p>
//                   <strong>Updated:</strong>{" "}
//                   {new Date(serviceDetail.updatedAt).toLocaleString()}
//                 </p>
//               </div>
//             </div>

//             <div className="space-y-4 mb-6">
//               <div>
//                 <p className="font-semibold text-gray-700">Decor Type:</p>
//                 {renderArray(serviceDetail.decorType)}
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-700">Cuisine:</p>
//                 {renderArray(serviceDetail.cuisine)}
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-700">Event Type:</p>
//                 {renderArray(serviceDetail.eventType)}
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-700">Equipment:</p>
//                 {renderArray(serviceDetail.equipment)}
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-700">Amenities:</p>
//                 {renderArray(serviceDetail.amenities)}
//               </div>
//             </div>
//           </>
//         ) : (
//           <form onSubmit={handleUpdate} className="space-y-4">
//           {/* Name */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//                 className="w-full border p-2 rounded"
//                 placeholder="Name"
//               />
//             </div>
//             {/* Price */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
//               <input
//                 type="text"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({ ...formData, price: e.target.value })
//                 }
//                 className="w-full border p-2 rounded"
//                 placeholder="Price"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* City */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                 <input
//                   type="text"
//                   value={formData.city}
//                   onChange={(e) =>
//                     setFormData({ ...formData, city: e.target.value })
//                   }
//                   className="w-full border p-2 rounded"
//                   placeholder="City"
//                 />
//               </div>
//               {/* Location */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
//                 <input
//                   type="text"
//                   value={formData.location}
//                   onChange={(e) =>
//                     setFormData({ ...formData, location: e.target.value })
//                   }
//                   className="w-full border p-2 rounded"
//                   placeholder="Location"
//                 />
//               </div>
//             </div>

//             {/* Description */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//               <textarea
//                 value={formData.description}
//                 onChange={(e) =>
//                   setFormData({ ...formData, description: e.target.value })
//                 }
//                 className="w-full border p-2 rounded"
//                 placeholder="Description"
//                 rows={4}
//               />
//             </div>

//             {/* New Cover Image */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Change Cover Image (optional)
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) => setNewCoverImage(e.target.files[0])}
//                 className="w-full"
//               />
//               {newCoverImage && (
//                 <img
//                   src={URL.createObjectURL(newCoverImage)}
//                   alt="preview"
//                   className="mt-3 h-40 object-cover rounded"
//                 />
//               )}
//             </div>

//             <div className="flex gap-2">
//               <button
//                 type="submit"
//                 className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//               >
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsEditing(false);
//                   setNewCoverImage(null);
//                 }}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Action Buttons */}
//         {!isEditing && (
//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={() => setIsEditing(true)}
//               className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//             >
//               Edit
//             </button>
//             <button
//               onClick={handleDelete}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VendorDetailPage;




















// src/vendor/pages/VendorDetailPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import {
  fetchServiceByIdThunk,
  deleteServiceThunk,
  updateServiceThunk,
} from "../../Redux/thunks/VendorRegisterThunk";

const VendorDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // 🔎 Agar URL /vendor/... se start hota hai to vendor view hai, warna client view
  const isVendorView = location.pathname.startsWith("/vendor");

  const { serviceDetail, loading, error } = useSelector(
    (state) => state.vendorRegister
  );

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    city: "",
    location: "",
    description: "",
  });
  const [newCoverImage, setNewCoverImage] = useState(null);

  useEffect(() => {
    dispatch(fetchServiceByIdThunk(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (serviceDetail) {
      setFormData({
        name: serviceDetail.name || "",
        price: serviceDetail.price || "",
        city: serviceDetail.city || "",
        location: serviceDetail.location || "",
        description: serviceDetail.description || "",
      });
    }
  }, [serviceDetail]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      await dispatch(deleteServiceThunk(id));
      navigate("/vendor/vendordashboard");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = new FormData();
    updatedData.append("name", formData.name);
    updatedData.append("price", formData.price);
    updatedData.append("city", formData.city);
    updatedData.append("location", formData.location);
    updatedData.append("description", formData.description);

    if (newCoverImage) {
      updatedData.append("coverImage", newCoverImage);
    }

    const res = await dispatch(
      updateServiceThunk({ serviceId: id, formData: updatedData })
    );

    if (!res.error) {
      await dispatch(fetchServiceByIdThunk(id));
      setIsEditing(false);
      setNewCoverImage(null);
    }
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!serviceDetail)
    return <p className="text-center text-gray-500">No details found.</p>;

  const renderArray = (arr) => {
    if (!arr || arr.length === 0)
      return <span className="text-gray-500">N/A</span>;
    return (
      <div className="flex flex-wrap gap-2">
        {arr.map((item, i) => (
          <span
            key={i}
            className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded"
          >
            {item.replace(/[\[\]"]+/g, "")}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* 🔁 Back link: vendor -> dashboard, client -> services list */}
        <Link
          to={isVendorView ? "/vendor/vendordashboard" : "/"}
          className="inline-block mb-4 text-yellow-600 hover:underline"
        >
          ← Back
        </Link>

        {serviceDetail.coverImage && (
          <img
            src={`http://localhost:5000/uploads/${serviceDetail.coverImage}`}
            alt={serviceDetail.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}

        {/* Client view = read-only (no edit/delete). Vendor view = same old with edit. */}
        {!isVendorView || !isEditing ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {serviceDetail.name}
            </h1>
            <p className="text-gray-600 mb-4">{serviceDetail.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <p>
                  <strong>Price:</strong> Rs {serviceDetail.price}
                </p>
                <p>
                  <strong>City:</strong> {serviceDetail.city || "N/A"}
                </p>
                <p>
                  <strong>Location:</strong> {serviceDetail.location || "N/A"}
                </p>
                <p>
                  <strong>Status:</strong>
                  <span
                    className={`ml-2 px-2 py-1 rounded text-sm ${
                      serviceDetail.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {serviceDetail.status}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  <strong>Team Members:</strong>{" "}
                  {serviceDetail.teamMembers || "N/A"}
                </p>
                <p>
                  <strong>Town:</strong> {serviceDetail.town || "N/A"}
                </p>
                <p>
                  <strong>Created:</strong>{" "}
                  {new Date(serviceDetail.createdAt).toLocaleString()}
                </p>
                <p>
                  <strong>Updated:</strong>{" "}
                  {new Date(serviceDetail.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="font-semibold text-gray-700">Decor Type:</p>
                {renderArray(serviceDetail.decorType)}
              </div>
              <div>
                <p className="font-semibold text-gray-700">Cuisine:</p>
                {renderArray(serviceDetail.cuisine)}
              </div>
              <div>
                <p className="font-semibold text-gray-700">Event Type:</p>
                {renderArray(serviceDetail.eventType)}
              </div>
              <div>
                <p className="font-semibold text-gray-700">Equipment:</p>
                {renderArray(serviceDetail.equipment)}
              </div>
              <div>
                <p className="font-semibold text-gray-700">Amenities:</p>
                {renderArray(serviceDetail.amenities)}
              </div>
            </div>
          </>
        ) : (
          // ====== EDIT FORM (only for vendor route) ======
          <form onSubmit={handleUpdate} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Name"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price
              </label>
              <input
                type="text"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Price"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  placeholder="City"
                />
              </div>
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  className="w-full border p-2 rounded"
                  placeholder="Location"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full border p-2 rounded"
                placeholder="Description"
                rows={4}
              />
            </div>

            {/* New Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Change Cover Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setNewCoverImage(e.target.files[0])}
                className="w-full"
              />
              {newCoverImage && (
                <img
                  src={URL.createObjectURL(newCoverImage)}
                  alt="preview"
                  className="mt-3 h-40 object-cover rounded"
                />
              )}
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setNewCoverImage(null);
                }}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Vendor-only action buttons */}
        {isVendorView && !isEditing && (
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDetailPage;
