// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchVendorServicesThunk } from "../Redux/thunks/VendorRegisterThunk";

// const VendorDashboard = () => {
//   const dispatch = useDispatch();
//   const { services } = useSelector((state) => state.vendorRegister);

//   useEffect(() => {
//     dispatch(fetchVendorServicesThunk());
//   }, [dispatch]);

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Button */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Your Services</h1>
//           <Link
//             to="registerservice"
//             className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-md transition duration-200"
//           >
//             + Create Service
//           </Link>
//         </div>

//         {/* Services Grid */}
//         {services && services.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Image */}
//                 <img
//                   src={
//                     service.coverImage?.startsWith("http")
//                       ? service.coverImage
//                       : `http://localhost:5000/uploads/${service.coverImage}`
//                   }
//                   alt={service.name}
//                   className="h-40 w-full object-cover"
//                 />

//                 {/* Details */}
//                 <div className="p-4 space-y-2">
//                   <h2 className="text-xl font-bold text-gray-800 line-clamp-1">
//                     {service.name}
//                   </h2>
//                   <p className="text-gray-600 text-sm line-clamp-2">
//                     {service.description}
//                   </p>
//                   <p className="text-green-600 font-semibold text-lg">
//                     Rs {service.price}
//                   </p>
//                   <button>View Detail</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 text-lg mt-6">
//             No services found. Start by creating a new service.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VendorDashboard;

















import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchVendorServicesThunk,
  fetchServiceByIdThunk,
} from "../Redux/thunks/VendorRegisterThunk";

const VendorDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { services } = useSelector((state) => state.vendorRegister);

  useEffect(() => {
    dispatch(fetchVendorServicesThunk());
  }, [dispatch]);

  const handleViewDetail = (id) => {
    dispatch(fetchServiceByIdThunk(id)).then(() => {
      navigate(`/vendor/service/${id}`);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Your Services
          </h1>
          <Link
            to="registerservice"
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-lg font-semibold py-3 px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105"
          >
            + Create Service
          </Link>
        </div>

        {/* Services Grid */}
        {services && services.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={
                      service.coverImage?.startsWith("http")
                        ? service.coverImage
                        : `http://localhost:5000/uploads/${service.coverImage}`
                    }
                    alt={service.name}
                    className="h-48 w-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    Rs {service.price}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3">
                  <h2 className="text-2xl font-bold text-gray-800 line-clamp-1">
                    {service.name}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    onClick={() => handleViewDetail(service._id)}
                    className="w-full bg-yellow-500 text-white py-2.5 mt-2 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition-all duration-200"
                  >
                    View Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg mt-12">
            No services found. Start by creating a new service.
          </p>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;
