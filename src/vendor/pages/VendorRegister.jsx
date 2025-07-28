// // event-app/src/vendor/pages/VendorRegister.jsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { VendorRegisterThunk } from '../../Redux/thunks/VendorRegisterThunk';

// const COMMON_FIELDS = [
//   { name: 'name', label: 'Service Name', type: 'text', required: true },
//   { name: 'price', label: 'Price', type: 'text', required: true },
//   { name: 'city', label: 'City', type: 'text', required: true },
//   { name: 'location', label: 'Location', type: 'text', required: true },
//   { name: 'description', label: 'Description', type: 'textarea', required: true },
// ];

// const VendorRegister = () => {
//   const [formData, setFormData] = useState({});
//   const [coverImage, setCoverImage] = useState(null);
//   const dispatch = useDispatch();
//   const { loading, error, success } = useSelector((state) => state.vendorRegister);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setCoverImage(files[0]);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Required fields check
//     if (
//       !formData.name ||
//       !formData.price ||
//       !formData.city ||
//       !formData.description ||
//       !coverImage
//     ) {
//       alert('Name, price, city, description, and cover image are required!');
//       return;
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     data.append('coverImage', coverImage);

//     // Debug: print FormData
//     for (let pair of data.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }

//     dispatch(VendorRegisterThunk(data));
//   };

//   const renderFields = (fields) =>
//     fields.map((field) => (
//       <div key={field.name} className="flex flex-col gap-1 mb-4">
//         <label htmlFor={field.name} className="text-gray-700 font-medium">
//           {field.label}{field.required && <span className="text-red-500">*</span>}
//         </label>
//         {field.type === 'textarea' ? (
//           <textarea
//             id={field.name}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//             required={field.required}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:outline-none"
//             rows={3}
//           />
//         ) : (
//           <input
//             id={field.name}
//             type={field.type}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//             required={field.required}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:outline-none"
//           />
//         )}
//       </div>
//     ));

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
//           Vendor Service Registration
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800 mb-2">Service Fields</h2>
//             {renderFields(COMMON_FIELDS)}
//           </div>
//           <div className="flex flex-col gap-1 mb-4">
//             <label htmlFor="coverImage" className="text-gray-700 font-medium">
//               Cover Image<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="file"
//               name="coverImage"
//               id="coverImage"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md mt-6"
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//           {error && <div className="text-red-500 mt-2">{error.message || error}</div>}
//           {success && <div className="text-green-500 mt-2">Service registered successfully!</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VendorRegister;





// done
// event-app/src/vendor/pages/VendorRegister.jsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { VendorRegisterThunk } from '../../Redux/thunks/VendorRegisterThunk';

// const COMMON_FIELDS = [
//   { name: 'name', label: 'Service Name', type: 'text', required: true },
//   { name: 'price', label: 'Price', type: 'text', required: true },
//   { name: 'city', label: 'City', type: 'text', required: true },
//   { name: 'location', label: 'Location', type: 'text', required: true },
//   { name: 'description', label: 'Description', type: 'textarea', required: true },
// ];

// const VendorRegister = () => {
//   const [formData, setFormData] = useState({});
//   const [coverImage, setCoverImage] = useState(null);
//   const dispatch = useDispatch();
//   const { loading, error, success } = useSelector((state) => state.vendorRegister);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setCoverImage(files[0]);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Required fields check
//     if (
//       !formData.name ||
//       !formData.price ||
//       !formData.city ||
//       !formData.description ||
//       !coverImage
//     ) {
//       alert('Name, price, city, description, and cover image are required!');
//       return;
//     }

//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       data.append(key, value);
//     });
//     data.append('coverImage', coverImage);

//     // Debug: print FormData
//     for (let pair of data.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }

//     dispatch(VendorRegisterThunk(data));
//   };

//   const renderFields = (fields) =>
//     fields.map((field) => (
//       <div key={field.name} className="flex flex-col gap-1 mb-4">
//         <label htmlFor={field.name} className="text-gray-700 font-medium">
//           {field.label}{field.required && <span className="text-red-500">*</span>}
//         </label>
//         {field.type === 'textarea' ? (
//           <textarea
//             id={field.name}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//             required={field.required}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:outline-none"
//             rows={3}
//           />
//         ) : (
//           <input
//             id={field.name}
//             type={field.type}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//             required={field.required}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:outline-none"
//           />
//         )}
//       </div>
//     ));

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
//           Vendor Service Registration
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800 mb-2">Service Fields</h2>
//             {renderFields(COMMON_FIELDS)}
//           </div>
//           <div className="flex flex-col gap-1 mb-4">
//             <label htmlFor="coverImage" className="text-gray-700 font-medium">
//               Cover Image<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="file"
//               name="coverImage"
//               id="coverImage"
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md mt-6"
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//           {error && <div className="text-red-500 mt-2">{error.message || error}</div>}
//           {success && <div className="text-green-500 mt-2">Service registered successfully!</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VendorRegister;





// notpad
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { VendorRegisterThunk } from '../../Redux/thunks/VendorRegisterThunk';

// const COMMON_FIELDS = [
//   { name: 'name', label: 'Service Name', type: 'text', required: true, placeholder: 'Enter service name' },
//   { name: 'price', label: 'Price', type: 'text', required: true, placeholder: 'Enter price' },
//   { name: 'city', label: 'City', type: 'text', required: true, placeholder: 'Enter city' },
//   { name: 'location', label: 'Location', type: 'text', required: true, placeholder: 'Enter location' },
//   { name: 'description', label: 'Description', type: 'textarea', required: true, placeholder: 'Enter description' },
//   { name: 'teamMembers', label: 'Team Members (Total No. of People)', type: 'number', placeholder: 'e.g. 5' },
//   { name: 'multipleImages', label: 'Images (URLs, comma separated)', type: 'text', placeholder: 'e.g. url1,url2' },
// ];



// const TYPE_FIELDS = {
//   Decorator: [
//     { name: 'decorType', label: 'Decor Type (comma separated)', type: 'text' },
//   ],
//   Photographer: [
//     { name: 'equipment', label: 'Equipment (Camera types, company names, comma separated)', type: 'text', placeholder: 'e.g. Canon, Nikon, Sony' },
//     { name: 'teamMembers', label: 'Team Members (Total No. of People)', type: 'number', placeholder: 'e.g. 5' },
//   ],
//   EventPlanner: [
//     { name: 'decorType', label: 'Decor Types (comma separated)', type: 'text', placeholder: 'e.g. Floral, Lighting' },
//     { name: 'cuisine', label: 'Cuisine (comma separated)', type: 'text', placeholder: 'e.g. Italian, Chinese' },
//   ],
//   Caterer: [
//     { name: 'cuisine', label: 'Cuisine (comma separated)', type: 'text', placeholder: 'e.g. Pakistani, Continental' },
//   ],
//   CarRental: [
//     { name: 'carModel', label: 'Car Model', type: 'text', placeholder: 'e.g. Corolla, Civic' },
//   ],
//   Venue: [
//     { name: 'capacity', label: 'Capacity (Total No. of People)', type: 'number', placeholder: 'e.g. 200' },
//     { name: 'amenities', label: 'Amenities (comma separated)', type: 'text', placeholder: 'e.g. Parking, WiFi' },
//     { name: 'town', label: 'Town', type: 'text', placeholder: 'e.g. Gulberg' },
//     { name: 'venueType', label: 'Venue Type', type: 'text', placeholder: 'e.g. Banquet, Lawn' },
//   ],
// };


// const VendorRegister = () => {
//   const user = JSON.parse(localStorage.getItem('userData'));
//   const vendorType = user?.vendor;
//   const [formData, setFormData] = useState({});
//   const [coverImage, setCoverImage] = useState(null);
//   const dispatch = useDispatch();
//   const { loading, error, success } = useSelector((state) => state.vendorRegister);

//   if (!vendorType) return <div>Vendor type not found!</div>;


//   // Track which vendor-specific fields are enabled
//   const [enabledFields, setEnabledFields] = useState([]);

//   const handleFieldCheckbox = (e) => {
//     const { value, checked } = e.target;
//     setEnabledFields((prev) =>
//       checked ? [...prev, value] : prev.filter((f) => f !== value)
//     );
//     // If unchecked, clear the value from formData
//     if (!checked) {
//       setFormData((prev) => {
//         const copy = { ...prev };
//         delete copy[value];
//         return copy;
//       });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     if (type === 'file') {
//       setCoverImage(files[0]);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const submitData = { ...formData, vendorType };

//     // Convert comma separated fields to arrays for backend
//     ['decorType', 'equipment', 'eventType', 'cuisine', 'amenities'].forEach((field) => {
//       if (submitData[field]) {
//         submitData[field] = submitData[field].split(',').map(s => s.trim());
//       }
//     });

//     const data = new FormData();
//     Object.entries(submitData).forEach(([key, value]) => {
//       if (Array.isArray(value)) {
//         value.forEach(v => data.append(key, v));
//       } else {
//         data.append(key, value);
//       }
//     });
//     data.append('coverImage', coverImage);

//     dispatch(VendorRegisterThunk(data));
//   };

//   const renderFields = (fields) =>
//     fields.map((field) => (
//       <div key={field.name} className="flex flex-col gap-1 mb-4">
//         <label htmlFor={field.name} className="text-gray-700 font-medium">
//           {field.label}{field.required && <span className="text-red-500">*</span>}
//         </label>
//         {field.type === 'textarea' ? (
//           <textarea
//             id={field.name}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//             required={field.required}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:outline-none"
//             rows={3}
//             placeholder={field.placeholder || ''}
//           />
//         ) : (
//           <input
//             id={field.name}
//             type={field.type}
//             name={field.name}
//             value={formData[field.name] || ''}
//             onChange={handleChange}
//             required={field.required}
//             className="px-3 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:outline-none"
//             placeholder={field.placeholder || ''}
//           />
//         )}
//       </div>
//     ));

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <h1 className="text-3xl font-bold text-center text-yellow-600 mb-8">
//           Vendor Service Registration
//         </h1>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800 mb-2">Common Fields</h2>
//             {renderFields(COMMON_FIELDS)}
//           </div>
//           {vendorType && TYPE_FIELDS[vendorType] && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">{vendorType} Specific Fields</h2>
//               <div className="flex flex-wrap gap-4 mb-4">
//                 {TYPE_FIELDS[vendorType].map((field) => (
//                   <label key={field.name} className="flex items-center gap-2 cursor-pointer">
//                     <input
//                       type="checkbox"
//                       value={field.name}
//                       checked={enabledFields.includes(field.name)}
//                       onChange={handleFieldCheckbox}
//                       className="accent-yellow-500 w-4 h-4"
//                     />
//                     <span className="text-gray-700 font-medium">{field.label}</span>
//                   </label>
//                 ))}
//               </div>
//               {/* Show only enabled fields */}
//               {renderFields(TYPE_FIELDS[vendorType].filter(f => enabledFields.includes(f.name)))}
//             </div>
//           )}
//           <div className="flex flex-col gap-1 mb-4">
//             <label htmlFor="coverImage" className="text-gray-700 font-medium">Cover Image<span className="text-red-500">*</span></label>
//             <input type="file" name="coverImage" onChange={handleChange} required />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md mt-6"
//             disabled={loading}
//           >
//             {loading ? 'Registering...' : 'Register'}
//           </button>
//           {error && <div className="text-red-500 mt-2">{error.message || error}</div>}
//           {success && <div className="text-green-500 mt-2">Service registered successfully!</div>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VendorRegister;



// done k bd wala code ju v zero se lya abhi hai mistakes ju bd me si kro ga ab getservice krny wla
// "use client"

// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { VendorRegisterThunk } from "../../Redux/thunks/VendorRegisterThunk"

// const COMMON_FIELDS = [
//   { name: "name", label: "Service Name", type: "text", required: true, placeholder: "Enter service name" },
//   { name: "price", label: "Price", type: "text", required: true, placeholder: "Enter price (e.g., PKR 50,000)" },
//   { name: "city", label: "City", type: "text", required: true, placeholder: "Enter city" },
//   { name: "location", label: "Location", type: "text", required: true, placeholder: "Enter detailed location" },
//   {
//     name: "description",
//     label: "Description",
//     type: "textarea",
//     required: true,
//     placeholder: "Describe your service in detail",
//   },
// ]

// const TYPE_FIELDS = {
//   Photographer: [
//     {
//       name: "equipment",
//       label: "Camera Equipment",
//       type: "text",
//       placeholder: "e.g., Canon EOS R5, Nikon D850, Sony A7R IV",
//       description: "List camera types and company names (comma separated)",
//     },
//     {
//       name: "teamMembers",
//       label: "Team Size",
//       type: "number",
//       placeholder: "e.g., 3",
//       description: "Total number of people in your photography team",
//     },
//   ],
//   EventPlanner: [
//     {
//       name: "decorType",
//       label: "Decoration Specialties",
//       type: "text",
//       placeholder: "e.g., Floral, Lighting, Stage Design",
//       description: "Types of decorations you specialize in (comma separated)",
//     },
//     {
//       name: "cuisine",
//       label: "Cuisine Options",
//       type: "text",
//       placeholder: "e.g., Pakistani, Continental, Chinese",
//       description: "Cuisine types you can arrange (comma separated)",
//     },
//     {
//       name: "teamMembers",
//       label: "Team Size",
//       type: "number",
//       placeholder: "e.g., 8",
//       description: "Total number of people in your planning team",
//     },
//   ],
//   Caterer: [
//     {
//       name: "cuisine",
//       label: "Cuisine Specialties",
//       type: "text",
//       placeholder: "e.g., Pakistani, Continental, Chinese, Italian",
//       description: "Types of cuisine you specialize in (comma separated)",
//     },
//     {
//       name: "teamMembers",
//       label: "Kitchen Staff",
//       type: "number",
//       placeholder: "e.g., 12",
//       description: "Total number of kitchen and service staff",
//     },
//   ],
//   Venue: [
//     {
//       name: "capacity",
//       label: "Guest Capacity",
//       type: "number",
//       placeholder: "e.g., 200",
//       description: "Maximum number of guests your venue can accommodate",
//     },
//     {
//       name: "amenities",
//       label: "Amenities",
//       type: "text",
//       placeholder: "e.g., Parking, WiFi, AC, Sound System",
//       description: "Available facilities and amenities (comma separated)",
//     },
//     {
//       name: "town",
//       label: "Town/Area",
//       type: "text",
//       placeholder: "e.g., Gulberg, DHA, Johar Town",
//       description: "Specific town or area where venue is located",
//     },
//     {
//       name: "venueType",
//       label: "Venue Type",
//       type: "text",
//       placeholder: "e.g., Banquet Hall, Lawn, Rooftop",
//       description: "Type of venue you offer",
//     },
//   ],
//   CarRental: [
//     {
//       name: "carModel",
//       label: "Available Car Models",
//       type: "text",
//       placeholder: "e.g., Toyota Corolla, Honda Civic, BMW 3 Series",
//       description: "Car models available for rent (comma separated)",
//     },
//     {
//       name: "teamMembers",
//       label: "Drivers Available",
//       type: "number",
//       placeholder: "e.g., 5",
//       description: "Number of professional drivers available",
//     },
//   ],
//   Decorator: [
//     {
//       name: "decorType",
//       label: "Decoration Types",
//       type: "text",
//       placeholder: "e.g., Wedding, Birthday, Corporate, Floral",
//       description: "Types of decorations you specialize in (comma separated)",
//     },
//     {
//       name: "teamMembers",
//       label: "Team Size",
//       type: "number",
//       placeholder: "e.g., 6",
//       description: "Total number of people in your decoration team",
//     },
//   ],
// }

// const VendorRegister = () => {
//   // Get user data from localStorage
//   const user = JSON.parse(localStorage.getItem("userData"))
//   const vendorType = user?.vendor

//   const [formData, setFormData] = useState({})
//   const [coverImage, setCoverImage] = useState(null)
//   const [enabledFields, setEnabledFields] = useState([])

//   const dispatch = useDispatch()
//   const { loading, error, success } = useSelector((state) => state.vendorRegister)

//   if (!vendorType) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//           <p className="text-center text-red-500 text-lg">Vendor type not found! Please login again.</p>
//         </div>
//       </div>
//     )
//   }

//   const handleFieldCheckbox = (fieldName, checked) => {
//     setEnabledFields((prev) => (checked ? [...prev, fieldName] : prev.filter((f) => f !== fieldName)))

//     // If unchecked, clear the value from formData
//     if (!checked) {
//       setFormData((prev) => {
//         const copy = { ...prev }
//         delete copy[fieldName]
//         return copy
//       })
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target
//     if (type === "file") {
//       setCoverImage(files[0])
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }))
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const submitData = { ...formData, vendorType }

//       // Convert comma separated fields to arrays for backend
//       ;["decorType", "equipment", "eventType", "cuisine", "amenities"].forEach((field) => {
//         if (submitData[field]) {
//           submitData[field] = submitData[field].split(",").map((s) => s.trim())
//         }
//       })

//     const data = new FormData()
//     Object.entries(submitData).forEach(([key, value]) => {
//       if (Array.isArray(value)) {
//         value.forEach((v) => data.append(key, v))
//       } else {
//         data.append(key, value)
//       }
//     })

//     if (coverImage) {
//       data.append("coverImage", coverImage)
//     }

//     // Actual API call
//     dispatch(VendorRegisterThunk(data))
//   }

//   const renderField = (field) => (
//     <div key={field.name} className="space-y-2">
//       <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
//         {field.label}
//         {field.required && <span className="text-red-500 ml-1">*</span>}
//       </label>
//       {field.description && <p className="text-xs text-gray-500 mb-1">{field.description}</p>}
//       {field.type === "textarea" ? (
//         <textarea
//           id={field.name}
//           name={field.name}
//           value={formData[field.name] || ""}
//           onChange={handleChange}
//           required={field.required}
//           placeholder={field.placeholder || ""}
//           rows={3}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
//         />
//       ) : (
//         <input
//           id={field.name}
//           type={field.type}
//           name={field.name}
//           value={formData[field.name] || ""}
//           onChange={handleChange}
//           required={field.required}
//           placeholder={field.placeholder || ""}
//           className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
//         />
//       )}
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-2xl mx-auto">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-6 text-center">
//             <h1 className="text-3xl font-bold text-white mb-2">Vendor Service Registration</h1>
//             <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
//               {vendorType}
//             </span>
//           </div>

//           {/* Form Content */}
//           <div className="p-8">
//             <form onSubmit={handleSubmit} className="space-y-8">
//               {/* Common Fields */}
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//                   Basic Information
//                 </h3>
//                 <div className="space-y-4">{COMMON_FIELDS.map(renderField)}</div>
//               </div>

//               {/* Vendor Specific Fields */}
//               {vendorType && TYPE_FIELDS[vendorType] && (
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
//                     {vendorType} Specific Information
//                   </h3>

//                   {/* Field Selection Checkboxes */}
//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-3">
//                       Select fields you want to fill:
//                     </label>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {TYPE_FIELDS[vendorType].map((field) => (
//                         <div
//                           key={field.name}
//                           className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//                         >
//                           <input
//                             type="checkbox"
//                             id={`checkbox-${field.name}`}
//                             checked={enabledFields.includes(field.name)}
//                             onChange={(e) => handleFieldCheckbox(field.name, e.target.checked)}
//                             className="mt-1 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
//                           />
//                           <div className="flex-1">
//                             <label
//                               htmlFor={`checkbox-${field.name}`}
//                               className="block text-sm font-medium text-gray-700 cursor-pointer"
//                             >
//                               {field.label}
//                             </label>
//                             {field.description && <p className="text-xs text-gray-500 mt-1">{field.description}</p>}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Show only enabled fields */}
//                   <div className="space-y-4">
//                     {TYPE_FIELDS[vendorType].filter((f) => enabledFields.includes(f.name)).map(renderField)}
//                   </div>
//                 </div>
//               )}

//               {/* Cover Image */}
//               <div className="space-y-2">
//                 <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
//                   Cover Image <span className="text-red-500">*</span>
//                 </label>
//                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-yellow-400 transition-colors">
//                   <div className="space-y-1 text-center">
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                     >
//                       <path
//                         d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                         strokeWidth={2}
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <div className="flex text-sm text-gray-600">
//                       <label
//                         htmlFor="coverImage"
//                         className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500"
//                       >
//                         <span>Upload a file</span>
//                         <input
//                           id="coverImage"
//                           name="coverImage"
//                           type="file"
//                           className="sr-only"
//                           onChange={handleChange}
//                           required
//                           accept="image/*"
//                         />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                     {coverImage && <p className="text-sm text-green-600 font-medium">Selected: {coverImage.name}</p>}
//                   </div>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//               >
//                 {loading ? (
//                   <div className="flex items-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Registering...
//                   </div>
//                 ) : (
//                   "Register Service"
//                 )}
//               </button>

//               {/* Error and Success Messages */}
//               {error && (
//                 <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
//                   <div className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p>{error.message || error}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {success && (
//                 <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
//                   <div className="flex">
//                     <div className="flex-shrink-0">
//                       <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                     </div>
//                     <div className="ml-3">
//                       <p>Service registered successfully!</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default VendorRegister













// 25/7/25


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VendorRegisterThunk } from "../../Redux/thunks/VendorRegisterThunk";

const COMMON_FIELDS = [
  { name: "name", label: "Service Name", type: "text", required: true, placeholder: "Enter service name" },
  { name: "price", label: "Price", type: "text", required: true, placeholder: "Enter price (e.g., PKR 50,000)" },
  { name: "city", label: "City", type: "text", required: true, placeholder: "Enter city" },
  { name: "location", label: "Location", type: "text", required: true, placeholder: "Enter detailed location" },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true,
    placeholder: "Describe your service in detail",
  },
];

const TYPE_FIELDS = {
  Photographer: [
    {
      name: "equipment",
      label: "Camera Equipment",
      type: "text",
      placeholder: "e.g., Canon EOS R5, Nikon D850, Sony A7R IV",
      description: "List camera types and company names (comma separated)",
    },
    {
      name: "teamMembers",
      label: "Team Size",
      type: "number",
      placeholder: "e.g., 3",
      description: "Total number of people in your photography team",
    },
  ],
  EventPlanner: [
    {
      name: "decorType",
      label: "Decoration Specialties",
      type: "text",
      placeholder: "e.g., Floral, Lighting, Stage Design",
      description: "Types of decorations you specialize in (comma separated)",
    },
    {
      name: "cuisine",
      label: "Cuisine Options",
      type: "text",
      placeholder: "e.g., Pakistani, Continental, Chinese",
      description: "Cuisine types you can arrange (comma separated)",
    },
    {
      name: "eventType",
      label: "Event Types",
      type: "text",
      placeholder: "e.g., Wedding, Corporate, Birthday",
      description: "Types of events you manage (comma separated)",
    },
    {
      name: "teamMembers",
      label: "Team Size",
      type: "number",
      placeholder: "e.g., 8",
      description: "Total number of people in your planning team",
    },
  ],
  Caterer: [
    {
      name: "cuisine",
      label: "Cuisine Specialties",
      type: "text",
      placeholder: "e.g., Pakistani, Continental, Chinese, Italian",
      description: "Types of cuisine you specialize in (comma separated)",
    },
    {
      name: "teamMembers",
      label: "Kitchen Staff",
      type: "number",
      placeholder: "e.g., 12",
      description: "Total number of kitchen and service staff",
    },
  ],
  Venue: [
    {
      name: "capacity",
      label: "Guest Capacity",
      type: "number",
      placeholder: "e.g., 200",
      description: "Maximum number of guests your venue can accommodate",
    },
    {
      name: "amenities",
      label: "Amenities",
      type: "text",
      placeholder: "e.g., Parking, WiFi, AC, Sound System",
      description: "Available facilities and amenities (comma separated)",
    },
    {
      name: "town",
      label: "Town/Area",
      type: "text",
      placeholder: "e.g., Gulberg, DHA, Johar Town",
      description: "Specific town or area where venue is located",
    },
    {
      name: "venueType",
      label: "Venue Type",
      type: "text",
      placeholder: "e.g., Banquet Hall, Lawn, Rooftop",
      description: "Type of venue you offer",
    },
  ],
  CarRental: [
    {
      name: "carModel",
      label: "Available Car Models",
      type: "text",
      placeholder: "e.g., Toyota Corolla, Honda Civic, BMW 3 Series",
      description: "Car models available for rent (comma separated)",
    },
    {
      name: "teamMembers",
      label: "Drivers Available",
      type: "number",
      placeholder: "e.g., 5",
      description: "Number of professional drivers available",
    },
  ],
  Decorator: [
    {
      name: "decorType",
      label: "Decoration Types",
      type: "text",
      placeholder: "e.g., Wedding, Birthday, Corporate, Floral",
      description: "Types of decorations you specialize in (comma separated)",
    },
    {
      name: "teamMembers",
      label: "Team Size",
      type: "number",
      placeholder: "e.g., 6",
      description: "Total number of people in your decoration team",
    },
  ],
};

const VendorRegister = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const vendorType = user?.vendor;

  const [formData, setFormData] = useState({});
  const [coverImage, setCoverImage] = useState(null);
  const [enabledFields, setEnabledFields] = useState([]);

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.vendorRegister);

  if (!vendorType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <p className="text-center text-red-500 text-lg">Vendor type not found! Please login again.</p>
        </div>
      </div>
    );
  }

  const handleFieldCheckbox = (fieldName, checked) => {
    setEnabledFields((prev) => (checked ? [...prev, fieldName] : prev.filter((f) => f !== fieldName)));

    if (!checked) {
      setFormData((prev) => {
        const copy = { ...prev };
        delete copy[fieldName];
        return copy;
      });
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      if (name === "coverImage") {
        setCoverImage(files[0]);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = { ...formData, vendorType };

    ["decorType", "equipment", "eventType", "cuisine", "amenities"].forEach((field) => {
      if (submitData[field]) {
        submitData[field] = submitData[field].split(",").map((s) => s.trim());
      }
    });

    const data = new FormData();

    Object.entries(submitData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        data.append(key, JSON.stringify(value));
      } else {
        data.append(key, value);
      }
    });

    if (coverImage) {
      data.append("coverImage", coverImage);
    }

    dispatch(VendorRegisterThunk(data));
  };

  const renderField = (field) => (
    <div key={field.name} className="space-y-2">
      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {field.description && <p className="text-xs text-gray-500 mb-1">{field.description}</p>}
      {field.type === "textarea" ? (
        <textarea
          id={field.name}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          required={field.required}
          placeholder={field.placeholder || ""}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
        />
      ) : (
        <input
          id={field.name}
          type={field.type}
          name={field.name}
          value={formData[field.name] || ""}
          onChange={handleChange}
          required={field.required}
          placeholder={field.placeholder || ""}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-colors"
        />
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-6 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Vendor Service Registration</h1>
            <span className="inline-block bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium">
              {vendorType}
            </span>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                  Basic Information
                </h3>
                <div className="space-y-4">{COMMON_FIELDS.map(renderField)}</div>
              </div>

              {vendorType && TYPE_FIELDS[vendorType] && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                    {vendorType} Specific Information
                  </h3>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select fields you want to fill:
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {TYPE_FIELDS[vendorType].map((field) => (
                        <div
                          key={field.name}
                          className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <input
                            type="checkbox"
                            id={`checkbox-${field.name}`}
                            checked={enabledFields.includes(field.name)}
                            onChange={(e) => handleFieldCheckbox(field.name, e.target.checked)}
                            className="mt-1 h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                          />
                          <div className="flex-1">
                            <label
                              htmlFor={`checkbox-${field.name}`}
                              className="block text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              {field.label}
                            </label>
                            {field.description && <p className="text-xs text-gray-500 mt-1">{field.description}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {TYPE_FIELDS[vendorType].filter((f) => enabledFields.includes(f.name)).map(renderField)}
                  </div>
                </div>
              )}

              {/* Cover Image */}
              <div className="space-y-2">
                <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700">
                  Cover Image <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-yellow-400 transition-colors">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="coverImage"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-yellow-600 hover:text-yellow-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-yellow-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="coverImage"
                          name="coverImage"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                          required
                          accept="image/*"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    {coverImage && <p className="text-sm text-green-600 font-medium">Selected: {coverImage.name}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Registering...
                  </div>
                ) : (
                  "Register Service"
                )}
              </button>

              {/* Error and Success */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p>{error.message || error}</p>
                    </div>
                  </div>
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md text-sm">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p>Service registered successfully!</p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorRegister;
