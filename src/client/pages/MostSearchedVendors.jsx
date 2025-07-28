import React from "react";

const MostSearchedVendors = () => {
  const vendorCategories = [
    "VENUES",
    "PHOTOGRAPHER",
    "CATERER",
    "DECORS",
    "EVENT PLANNER",
    "CAR RENTAL",
    "ALL",
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white text-center">
      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {vendorCategories.map((category, index) => (
          <button
            key={index}
            className="bg-[#dcc385] text-black font-bold py-2 px-6 rounded-xl shadow-md hover:shadow-lg transition-all uppercase text-sm"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Most Searched Vendors</h2>
      <br />
      

      {/* No Vendors Found */}
      <p className="text-2xl text-gray-800 font-semibold">No Vendors Found</p>
    </div>
  );
};

export default MostSearchedVendors;
