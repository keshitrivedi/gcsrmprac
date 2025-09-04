import React, {useState} from "react";

export default function About () {
    return (
    <>
        <div className="flex lg:flex-row-reverse flex-col bg-black align-middle justify-center items-center p-10 lg:p-0.5">
            <div className="flex flex-col-reverse text-white lg:mr-10 lg:text-right text-center flex-1">
                <div className="font-bold lg:text-2xl text-lg">Code Your Passion, Build Your Legacy.</div>
                <div className="lg:text-9xl text-5xl font-black">About</div>
            </div>
            <div className="text-white lg:text-xl lg:text-left text-center text-md lg:ml-10 flex-1">
                Ossome Hacks 2.0 builds on the success of its inaugural edition in September 2023, which saw 250+ participants in 50+ teams solving real-world challenges. This 36-hour hackathon engages tech enthusiasts of all levels with diverse tracks, fostering innovation, skill-building, and collaboration. More than a competition, it celebrates open-source development and empowers participants to make a meaningful impact.
            </div>
        </div>
    </>
    )
}