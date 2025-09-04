import React from "react";

export default function Prizes () {
    return (
    <>
        <div className="flex flex-col bg-indigo-950 items-center justify-center align-middle">
            <div className="text-white font-black text-9xl mt-20">Prizes</div>
            <div className="flex flex-row mb-10 gap-10 p-15">
                <div className="flex flex-col flex-1 bg-white text-indigo-950 items-center justify-between text-center p-10 rounded-lg">
                    <div className="font-bold text-lg mb-2">First Prize</div>
                    <div>
                        Total Prize of Worth
                        ₹ 1,80,000
                        Cash Prize of TBA
                    </div>
                    <a className="font-bold mt-2" href="">KNOW MORE</a>
                    
                </div>
                <div className="flex flex-col flex-1 bg-white text-indigo-950 items-center justify-between text-center p-10 rounded-lg">
                    <div className="font-bold text-lg mb-2">Second Prize</div>
                    <div>
                        Total Prize of Worth
                        ₹ 1,80,000
                        Cash Prize of TBA
                    </div>
                    <a className="font-bold mt-2" href="">KNOW MORE</a>
                    
                </div>

                <div className="flex flex-col flex-1 bg-white text-indigo-950 items-center justify-between text-center p-10 rounded-lg">
                    <div className="font-bold text-lg mb-2">Third Prize</div>
                    <div>
                        Total Prize of Worth
                        ₹ 1,80,000
                        Cash Prize of TBA
                    </div>
                    <a className="font-bold mt-2" href="">KNOW MORE</a>
                    
                </div>
            </div>
        </div>
    </>
    )
}