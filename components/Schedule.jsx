import React from "react";

export default function Schedule () {
    
    return (
    <>
        <div className="bg-black w-full pb-10 text-white">
            <div className="flex justify-center text-5xl md:text-9xl font-extrabold ">
                Schedule 
            </div>
            <div className=" flex flex-col justify-center items-center pt-15 gap-16 ">

                <div className="group relative w-72 p-6 bg-black border-2 border-white rounded-xl text-center text-2xl transition-all duration-300 transform hover:-translate-y-5 cursor-pointer">
                     <div className="group-hover:opacity-0 transition-opacity duration-300">
                         5th Feb 2026
                     </div>
                     <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Registration Start
                     </div>
                </div>

                <div className="group relative w-72 p-6 bg-black border-2 border-white rounded-xl text-center text-2xl transition-all duration-300 transform hover:-translate-y-5 cursor-pointer">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                        6th March 2026
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Registration Close
                    </div>
                </div>
                
                <div className="group relative w-72 p-6 bg-black border-2 border-white rounded-xl text-center text-2xl transition-all duration-300 transform hover:-translate-y-5 cursor-pointer">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                        8th March 2026
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        RSVP
                    </div>
                </div>
                
                <div className="group relative w-72 p-6 bg-black border-2 border-white rounded-xl text-center text-2xl transition-all duration-300 transform hover:-translate-y-5 cursor-pointer">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                        10th March 2026
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Hackathon Starts
                    </div>
                </div>
                
                <div className="group relative w-72 p-6 bg-black border-2 border-white rounded-xl text-center text-2xl transition-all duration-300 transform hover:-translate-y-5 cursor-pointer">
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                        11th March 2026
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Hackathon Ends
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}