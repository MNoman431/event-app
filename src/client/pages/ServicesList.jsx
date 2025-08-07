// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams, Link } from "react-router-dom";
// import { fetchServicesByType } from "../../redux/thunks/clientServicesThunk";

// const VENDOR_MAP = {
//   Venue: "Venue",
//   Caterer: "Caterer",
//   CarRental: "CarRental",
//   EventPlanner: "EventPlanner",
//   Decorator: "Decorator",
//   Photographer: "Photographer",
//   // Agar kahin purane slugs se aa raha ho:
//   "Car Rental": "CarRental",
//   "Event Planner": "EventPlanner",
//   // Decor: "Decorator",
// };
// const ServicesList = () => {
//   const { type } = useParams();     // e.g. CarRental / EventPlanner ...
//   const dispatch = useDispatch();
//   const { loading, error, list } = useSelector((s) => s.clientServices);

//   useEffect(() => {
//     if (type) {
//       const key = VENDOR_MAP[type] || type; // fallback
//       dispatch(fetchServicesByType(key));
//     }
//   }, [dispatch, type]);

//   if (loading) return <p className="p-6 text-blue-600">Loading services…</p>;
//   if (error) return <p className="p-6 text-red-500">{error}</p>;

//   // Pretty label for heading
//   const pretty = Object.keys(VENDOR_MAP).find(k => VENDOR_MAP[k] === (VENDOR_MAP[type] || type)) || type;

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold text-gray-800">
//             {pretty} services
//           </h1>
//           <Link to="/" className="text-sm text-yellow-600 hover:text-yellow-700">
//             ← back
//           </Link>
//         </div>

//         {list.length === 0 ? (
//           <p className="text-gray-500">No services found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {list.map((svc) => (
//               <div
//                 key={svc._id}
//                 className="bg-white rounded-xl shadow hover:shadow-md transition p-4 overflow-hidden"
//               >
//                 <img
//                   src={
//                     svc.coverImage
//                       ? `http://localhost:5000/uploads/${svc.coverImage}`
//                       : "https://via.placeholder.com/400x250?text=No+Image"
//                   }
//                   className="w-full h-40 object-cover rounded-md mb-3"
//                   alt={svc.name}
//                 />
//                 <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
//                   {svc.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 line-clamp-2">
//                   {svc.description}
//                 </p>
//                 <div className="mt-2 flex items-center justify-between">
//                   <span className="text-yellow-600 font-bold">
//                     Rs {svc.price}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default ServicesList;


















import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchServicesByType } from "../../Redux/thunks/ClientServicesThunk";
// import { fetchServicesByType } from "../../redux/thunks/clientServicesThunk";

const VENDOR_MAP = {
  Venue: "Venue",
  Caterer: "Caterer",
  CarRental: "CarRental",
  EventPlanner: "EventPlanner",
  Decorator: "Decorator",
  Photographer: "Photographer",
  "Car Rental": "CarRental",
  "Event Planner": "EventPlanner",
};

const ServicesList = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const { loading, error, list } = useSelector((s) => s.clientServices);

  useEffect(() => {
    if (type) {
      const key = VENDOR_MAP[type] || type;
      dispatch(fetchServicesByType(key));
    }
  }, [dispatch, type]);

  if (loading) return <p className="p-6 text-blue-600">Loading services…</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  const pretty =
    Object.keys(VENDOR_MAP).find(
      (k) => VENDOR_MAP[k] === (VENDOR_MAP[type] || type)
    ) || type;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {pretty} services
          </h1>
          <Link to="/" className="text-sm text-yellow-600 hover:text-yellow-700">
            ← back
          </Link>
        </div>

        {list.length === 0 ? (
          <p className="text-gray-500">No services found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((svc) => (
              <Link
                key={svc._id}
                to={`/service/${svc._id}`}   // ✅ Click par detail page
                className="block bg-white rounded-xl shadow hover:shadow-md transition p-4 overflow-hidden"
              >
                <img
                  src={
                    svc.coverImage
                      ? `http://localhost:5000/uploads/${svc.coverImage}`
                      : "https://via.placeholder.com/400x250?text=No+Image"
                  }
                  className="w-full h-40 object-cover rounded-md mb-3"
                  alt={svc.name}
                />
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {svc.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {svc.description}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-yellow-600 font-bold">
                    Rs {svc.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesList;











