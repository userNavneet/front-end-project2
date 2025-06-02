import React, { useState, useEffect } from "react";
import { motion, useAnimate, useInView } from "framer-motion";
import data from "../data2";
const Player_rank = () => {
    return (
        <>
            <div 
            className="overflow-hidden b ">
                <Card data={data} />
            </div>
        </>
    );
};
export default Player_rank;
function Card({ data  }) {
    const [value, setvalue] = useState(data[0]);
    return (
        <div 
        className="  h-screen justify-center">
            <p className="text-center text-white text-3xl">Player Ranking 2024</p>
            <PlayerCard setval={setvalue} value={value} key={value.id} />
        </div>
    );
}
function PlayerCard({ setval, value}) {
    const rankings = Array.from({ length: 5 });
    return (
        <>
            <motion.div 
                className={`${value.color} flex justify-center `}
                initial={{ opacity: 0.7 }}
                animate={{ opacity: 1 }}
            >
                <div className=" w-1/2   flex items-center mt-6 mb-6  p-y-3 justify-center ">
                    <div className=" -rotate-90 text-4xl  p-2   text-white">
                        Players
                    </div>
                    <div className="top-0 rank-bars w-[80%] border-l-4 h-[100%]  flex flex-col gap-5">
                        {rankings.map((_, index) => {
                            return (
                                <Bar
                                    setval={setval}
                                    data={data[index]}
                                    key={index}
                                    curr={value}
                                />
                            );
                        })}
                    </div>
                </div>
                <PlayerImage key={value.pts} value={value.image} />
            </motion.div>
        </>
    );
}
function PlayerImage({ value }) {
    const backgroundColorVar = {
        initial: {
            x: 200,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <>
            <motion.div 
            
                className="relative right-0 w-[30%]  player-image flex justify-center items-center"
                variants={backgroundColorVar}
                initial="initial"
                animate="animate"
               
            >
                <motion.img
                
                className="p-4 h-1/2 md:h-3/4 lg:h-4/5 " src={value} alt="" />
            </motion.div>
        </>
    );
}

function Bar({ setval, data, curr }) {
    const [scope, animate] = useAnimate();
    
    const isInView = useInView(scope, { once: true });
    useEffect(() => {
        if (isInView) {
            console.log(isInView);
            async function barAnimation() {
                await animate(
                    ".points",
                    { opacity: [0, 1], x: [-200, 0] },
                    { duration: 0.5 },
                );
                await animate(
                    ".playername",
                    { x: [-200, 0], opacity: [0, 1] },
                    { duration: 0.5 },
                );
            }
            barAnimation();
        }
    }, [isInView, scope, data.width]);
    function handleClick() {
        setval(data);
    }
    const borderVal = "";
    return (
        <>
            <div ref={scope}>
                <div
                    onClick={handleClick}
                    className={`check ml-2 flex flex-col cursor-pointer bg-white py-5 text-end w-${data.width} ${data.id == curr.id ? "activate": ""}`}
                >
                    <motion.span className="mr-5 opacity-0 points" id="">
                        {data.rank}
                    </motion.span>
                    <span className="mr-5 font-bold opacity-0 playername" id="">
                        {data.title}
                    </span>
                </div>
            </div>
        </>
    );
}
