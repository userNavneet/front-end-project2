import "./scroll.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import data from "../data.js";

export default function TeamsSec({ setlatestHover, setf1Hover }) {
    const [val, setval] = useState(data[0]);
    const circleLen = Array.from({ length: 5 });

    return (
        <>
            <div 
                onMouseEnter={() => setlatestHover(false)} 
                onMouseOver={() => setf1Hover(false)} 
                className="h-screen flex items-center flex-col justify-center overflow-x-hidden p-4"
            >
                <div className={`${val.text} text-3xl md:text-6xl mb-8`}>
                    F1 Teams 2024
                </div>
                <AnimatePresence mode="wait">
                    <TeamCard data={val} key={val.id} />
                </AnimatePresence>
                <div className="flex gap-4 min-w-[20%] mt-4">
                    {circleLen.map((_, index) => {
                        return <ClickCircle val={setval} key={index} index={index} />;
                    })}
                </div>
            </div>
        </>
    );
}

function TeamCard({ data }) {
    return (
        <>
            <motion.div
                className={` flex flex-col p-3 items-center justify-between relative w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/6 h-1/3`}
                key={data.id}
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 500 }}
                transition={{ duration: 0.5 }}
            >
                <div className={`brand ${data.color} px-3 py-2 text-center text-white`}>
                    <p>{data.title}</p>
                </div>
                <div className="absolute top-1/4">
                    <img src={data.image} alt="Formula one car" className="w-full h-auto" />
                </div>
                <div>
                    <button className={`${data.color} px-3 py-2 mt-8 info-btn text-white`}>
                        More info
                    </button>
                </div>
            </motion.div>
        </>
    );
}

function ClickCircle({ val, index }) {
    return (
        <>
            <div
                onClick={() => val(data[index])}
                className="cursor-pointer bg-white shadow-lg rounded-full md:h-16 md:w-16 sm:h-12 sm:w-12 h-8 w-8 flex items-center justify-center mt-4"
            >
                <p className="text-center">{index + 1}</p>
            </div>
        </>
    );
}
