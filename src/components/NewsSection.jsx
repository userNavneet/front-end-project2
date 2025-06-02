import "./scroll.css";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { newsdata } from "../datafiles/newsdata";

const NewsSection = ({ setlatestHover, setf1Hover }) => {
    const [news, setNews] = useState(newsdata);
    
    function swapNews(e) {
        const indexEl = parseInt(e.target.id, 10);
        const newArr = [...news];
        const temp = newArr[0];
        newArr[0] = newArr[indexEl];
        newArr[indexEl] = temp;
        setNews(newArr);
    }

    return (
        <div
            onMouseEnter={() => setlatestHover(false)}
            onMouseOver={() => setf1Hover(false)}
            className="flex gap-6 p-6 justify-center flex-wrap overflow-hidden"
        >
            <LargeNews heading={news[0]} />
            <div className=" w-full md:w-1/3 min-w-[300px] items-center  justify-center flex flex-col gap-6">
                {news.map((item, index) => {
                    if (index !== 0) {
                        return (
                            <SmallNews
                                heading={item.title}
                                key={index}
                                swap={swapNews}
                                id={index}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default NewsSection;

function SmallNews({ heading, swap, id }) {
    const newVar = {
        start: {
            opacity: 0,
            x: 100,
        },
        animate: (id) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2 * id,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <motion.div
            className="flex  cursor-pointer w-full  h-16 my-2"
            variants={newVar}
            whileHover={{
                textDecoration: "underline 3px white",
                scale: 1.05,
                transition: {
                    type: "tween",
                },
            }}
            initial="start"
            whileInView="animate"
            custom={id}
            viewport={{
                once: true,
            }}
        >
            <div className="w-2 border-white bg-red-600 mr-1"></div>
            <div className="bg-red-600 p-5 text-white w-full flex items-center">
                <motion.p onClick={swap} id={id} >
                    {heading}
                </motion.p>
            </div>
        </motion.div>
    );
}

function LargeNews({ heading }) {
    return (
        <motion.div className="  box2 px-5 sm:w-[600px] md:w-[700px] lg:w-[800px] cursor-default">
            <p className="text-xl text-red-600">NEWS</p>
            <p className="underline text-gray-200">{heading.title}</p>
            <div>
                <img src={heading.image} alt="image" className="h-[300px] w-full md:h-[400px] p-3" />
            </div>
        </motion.div>
    );
}
