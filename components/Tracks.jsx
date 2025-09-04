import React from "react";

export default function Tracks() {
  return (
    <div className="w-full bg-black text-white p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-16 md:text-9xl justify-center">Tracks</h1>

        {/* Responsive grid for track cards */}
        {/* mobile: 1 col | tablet: 2 cols | desktop: 3 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Track 1 - EdTech */}
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              {/* Place your EdTech logo inside here */}
            </div>
            <span className="text-xl font-medium">EdTech</span>
          </div>

          {/* Track 2 - Healthcare */}
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              {/* Place your Healthcare logo here */}
            </div>
            <span className="text-xl font-medium">Healthcare</span>
          </div>

          {/* Track 3 - AgriTech */}
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              {/* Place your AgriTech logo here */}
            </div>
            <span className="text-xl font-medium">AgriTech</span>
          </div>

          {/* Track 4 - FinTech */}
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              {/* Place your FinTech logo here */}
            </div>
            <span className="text-xl font-medium">FinTech</span>
          </div>

          {/* Track 5 - Web3 */}
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              {/* Place your Web3 logo here */}
            </div>
            <span className="text-xl font-medium">Web3</span>
          </div>

          {/* Track 6 - Open Innovation */}
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              {/* Place your Open Innovation logo here */}
            </div>
            <span className="text-xl font-medium">Open Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

