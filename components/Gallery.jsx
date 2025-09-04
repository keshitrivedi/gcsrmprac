import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.jsx";

export default function Gallery () {
    const images = [];
    for (let i = 1; i <= 20; i++) {
        images.push({ id: i, src: `/image${i}.png` });
    }

    return (
    <>
        <div className="flex flex-col bg-black text-white items-center">
            <div className="font-black lg:text-9xl text-5xl mt-40">Glimpses</div>
            <div className="mt-15">
                <InfiniteMovingCards
                    items={images}
                    direction="right"
                    speed="slow"
                />
            </div>
        </div>
    </>
    )
}