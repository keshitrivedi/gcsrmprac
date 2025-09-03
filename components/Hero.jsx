import React, {useState} from "react";

export default function Hero () {
    return (
    <>
    <div className="flex flex-row bg-indigo-950">
        <div className="flex flex-col flex-1 ml-10">
            <div className="font-black text-9xl text-white">Ossome Hacks</div>
            <div className="font-bold text-2xl text-white">Empowering Innovation, One Awesome Hack at a Time</div>
            <div>
                <button className="bg-white hover:bg-indigo-500 text-indigo-950 font-bold py-1.5 px-4 rounded-3xl mt-10 mb-10 hover:cursor-pointer">
                    Discord
                </button>
            </div>
        </div>
        <div className="flex flex-1 p-5 justify-center">
            <img src="prchk.png" alt="" />
        </div>
    </div>
    </>
    )
}