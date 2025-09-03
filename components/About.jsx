import React, {useState} from "react";

export default function About () {
    return (
    <>
        <div className="flex flex-row-reverse bg-indigo-950 align-middle justify-center items-center">
            <div className="flex flex-col-reverse text-white mr-10 text-right flex-1">
                <div className="font-bold text-2xl">Code Your Passion, Build Your Legacy.</div>
                <div className="text-9xl font-black">About</div>
            </div>
            <div className="text-white text-xl ml-10 flex-1">
                Ossome Hacks 2.0 builds on the success of its inaugural edition in September 2023, which saw 250+ participants in 50+ teams solving real-world challenges. This 36-hour hackathon engages tech enthusiasts of all levels with diverse tracks, fostering innovation, skill-building, and collaboration. More than a competition, it celebrates open-source development and empowers participants to make a meaningful impact.
            </div>
        </div>
    </>
    )
}