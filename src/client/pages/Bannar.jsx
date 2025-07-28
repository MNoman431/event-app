import React from "react";
import BannerImage from "../../assets/BannarParttwo.png";

const Banner = () => {
  return (
    <div
      className="relative bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8 shadow-lg flex flex-col justify-center"
      style={{ height: "400px" }}
    >
      {/* Background image */}
      <img
        src={BannerImage}
        alt="Banner background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="text-center text-white mb-8">
          <h5
            style={{
              margin: "0px 0px 5px",
              fontFamily: "Medium",
              fontSize: "1.5rem",
              lineHeight: 1.334,
              letterSpacing: "0em",
              fontWeight: "bolder",
            }}
          >
            EXPLORE VENDORS
          </h5>
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-2xl mx-auto mb-8">
          {/* Vendor Dropdown */}
          <div className="w-full md:w-1/2">
            <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent">
              <option value="">Select Vendor</option>
              <option value="photographer">Photographer</option>
              <option value="planner">Event Planner</option>
              <option value="decor">Decor</option>
              <option value="car">Car Rental</option>
              <option value="caterar">Caterar</option>
            </select>
          </div>

          {/* City Dropdown */}
          <div className="w-full md:w-1/2">
            <select className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Select City</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
              <option value="islamabad">Islamabad</option>
              <option value="multan">Multan</option>
              <option value="peshawar">Peshawar</option>
            </select>
          </div>
        </div>

        {/* Explore Vendors Button */}
        <div className="flex justify-center">
          <button className="bg-[#dcc58a] hover:bg-[#e6cf94] text-black font-bold px-6 py-2 rounded-[15px] shadow-md transition-all">
            EXPLORE VENDORS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;