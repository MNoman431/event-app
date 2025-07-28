// import React from "react";
// import venue from "../../assets/Venue.png";
// import caterer from "../../assets/caterer.png";
// import carRental from "../../assets/carRental.png";
// import { useNavigate } from "react-router-dom";

// const ExploreOurVendors = () => {
//   return (
//     <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           Explore Our Vendors
//         </h1>

//         {/* Vendor Categories */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {/* Venue */}
//           <VendorCard title="Venue" image={venue} />
//           {/* Caterer */}
//           <VendorCard title="Caterer" image={caterer} />
//           {/* Car Rental */}
//           <VendorCard title="Car Rental" image={carRental} />
//           {/* Event Planner */}
//           <VendorCard title="Event Planner" image={venue} />
//           {/* Decor */}
//           <VendorCard title="Decor" image={caterer} />
//           {/* Photographer */}
//           <VendorCard title="Photographer" image={venue} />
//         </div>
//       </div>
//     </div>
//   );
// };

// const VendorCard = ({ title, image }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login"); // 🔐 login pe bhej
//     } else {
//       console.log("User is logged in, you can show details now.");
//       // navigate(`/vendors/${title.toLowerCase()}`); // optional
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="cursor-pointer bg-white w-full h-[300px] rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
//     >
//       <div className="h-[200px] w-full overflow-hidden rounded-t-md">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div>
//       <div className="flex-grow flex items-center justify-center p-4">
//         <h3 className="text-lg font-semibold text-gray-800 text-center">
//           {title}
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default ExploreOurVendors;




import React from "react";
import { useNavigate } from "react-router-dom";
import venue from "../../assets/Venue.png";
import caterer from "../../assets/caterer.png";
import carRental from "../../assets/carRental.png";

const ExploreOurVendors = () => {
  // 👉 slug exactly wohi rakho jo DB me saved hai
  const vendorCategories = [
    { title: "Venue", slug: "Venue", image: venue },
    { title: "Caterer", slug: "Caterer", image: caterer },
    { title: "Car Rental", slug: "CarRental", image: carRental },   // <—
    { title: "Event Planner", slug: "EventPlanner", image: venue },  // <—
    { title: "Decor", slug: "Decorator", image: caterer },           // <—
    { title: "Photographer", slug: "Photographer", image: venue },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Explore Our Vendors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vendorCategories.map((vendor, i) => (
            <VendorCard
              key={i}
              title={vendor.title}
              slug={vendor.slug}
              image={vendor.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const VendorCard = ({ title, slug, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = JSON.parse(localStorage.getItem("userData"))?.token; // <- ensure sahi key
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/services/${slug}`); // DB-friendly slug bhej rahe
    }
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-white w-full h-[300px] rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
    >
      <div className="h-[200px] w-full overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex-grow flex items-center justify-center p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ExploreOurVendors;
