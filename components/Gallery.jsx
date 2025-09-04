import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.jsx";

export default function Gallery () {
    const images = []
    for (let i = 1; i <= 20; i++) {
        images.push(`/image${i}.png`);
    }
    return (
    <>
        <div className="flex flex-col bg-black text-white items-center">
            <div className="font-black text-9xl mt-40">Glimpses</div>
            <div>
                <InfiniteMovingCards items={images} direction="right" speed="normal" />
            </div>
        </div>
    </>
    )
}