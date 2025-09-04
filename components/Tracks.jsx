import React from "react";

export default function Tracks() {
  return (
    <div className="w-full bg-black text-white p-12">
      <div className="max-w-7xl mx-auto">
        
       
        <h1 className="text-5xl font-extrabold mb-16 md:text-9xl justify-center text-center">Tracks</h1>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
        
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
             
            </div>
            <span className="text-xl font-medium">EdTech</span>
          </div>

          
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
         
            </div>
            <span className="text-xl font-medium">Healthcare</span>
          </div>

         
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              
            </div>
            <span className="text-xl font-medium">AgriTech</span>
          </div>

         
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
             
            </div>
            <span className="text-xl font-medium">FinTech</span>
          </div>

          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              
            </div>
            <span className="text-xl font-medium">Web3</span>
          </div>

          
          <div className="flex flex-col items-center justify-center aspect-square border-2 border-white rounded-xl bg-transparent transform transition duration-300 hover:-translate-y-5 hover:shadow-2xl">
            <div className="w-16 h-16 mb-3 bg-gray-700 flex items-center justify-center rounded-md">
              
            </div>
            <span className="text-xl font-medium">Open Innovation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

