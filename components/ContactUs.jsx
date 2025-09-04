import React from "react";

export default function ContactUs () {
    return (
    <>
        <div className="flex flex-col bg-black text-white items-center px-20">
            <div className="text-9xl font-black mb-15">Contact Us</div>
            <div className="bg-white text-black flex flex-col gap-8 px-20 py-10 w-full rounded-2xl">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="E-mail"/>
                <input type="text" placeholder="Enter your message"/>
                <button className="bg-black text-white px-6 py-2 rounded-3xl cursor-pointer w-auto self-center font-bold">
                    Submit
                </button>

            </div>
        </div>
    </>
    )
}