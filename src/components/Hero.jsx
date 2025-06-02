import "./hero.css";
import "./scroll.css";
import image from "../assets/redf1-wobg.png";
import { HeroTitle } from "./HeroTitle";
import canada from "../assets/Candatitle.svg";
import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
export const buttonVar = {
    hover: {
        scale: 1.07,
        textDecoration: "underline 3px",
    },
    tap: {
        scale: 1.04,
    },
};
export default function Hero({setlatestHover,setf1Hover}) {
    return (
        <>
            <div onMouseEnter={()=>setlatestHover(false)} className="md:relative h-screen flex flex-col justify-center"
                  onMouseOver={()=>setf1Hover(false)}
                >
                <div className="title m-3">
                    <div className="text-red-600 font-bold top-40 text-6xl text-center md:absolute z-20 left-2">
                        <div className="lg:w-[700px] h-auto md:w-[600px] xl:w-[880px]">
                            <HeroTitle />
                        </div>
                        <div className="mt-3 flex items-center justify-center m-auto xl:h-[50px]">
                            <motion.button
                                className="btn px-4 py-2 text-sm bg-red-600 text-white xl:h-full"
                                variants={buttonVar}
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Buy Tickets
                            </motion.button>
                        </div>
                    </div>
                </div>
                <div className="md:relative m-3 flex flex-col items-center md:items-end md:h-full justify-center overflow-hidden">
                    <motion.img
                        initial={{
                            x: 2000,
                            y: -1000,
                        }}
                        animate={{
                            x: 0,
                            y: 0,
                            transition: {
                                duration: 5.5,
                                ease: "easeInOut",
                            },
                        }}
                        src={image}
                        alt="Formula one car"
                        className="w-3/4"
                    />
                    <Timer />
                </div>
            </div>
        </>
    );
}

function Timer() {
    const daysRef = useRef();
    const hrsRef = useRef();
    const minRef = useRef();
    const fromDays = 0;
    const toDays = 4;
    const fromHrs = 0;
    const toHrs = 19;
    const fromMin = 0;
    const toMin = 59;
    useEffect(() => {
        const nodeDay = daysRef.current;
        const nodeHrs = hrsRef.current;
        const nodeMin = minRef.current;
        const days = animate(fromDays, toDays, {
            duration: 6.5,
            onUpdate(value) {
                nodeDay.textContent = Math.round(value);
            },
        });
        const hrs = animate(fromHrs, toHrs, {
            duration: 6.5,
            onUpdate(value) {
                nodeHrs.textContent = Math.round(value);
            },
        });
        const min = animate(fromMin, toMin, {
            duration: 4.5,
            onUpdate(value) {
                nodeMin.textContent = Math.round(value);
            },
        });
        return () => {
            days.stop()
            hrs.stop()
            min.stop()
        };
    }, [fromDays, toDays,fromHrs,toHrs,fromMin,toMin]);
    return (
        <>
            <div className="countdown bg-red-600 p-3 z-10 md:absolute left-3/4  min-w-40 top-4 drop-shadow-lg-black m-3 lg:w-[250px] lg:h-[150px] flex flex-col justify-center shadow-md">
                <div className="text-white">
                    <p className="text-center">NEXT EVENT ON</p>
                </div>
                <div className="flex justify-between mt-4 text-white">
                    <div>
                        <p className="text-center" ref={daysRef}>
                            04
                        </p>
                        <div>DAYS</div>
                    </div>
                    <div>
                        <p className="text-center" ref={hrsRef}>08</p>
                        <div>HRS</div>
                    </div>
                    <div>
                        <p className="text-center" ref={minRef}>04</p>
                        <div>MIN</div>
                    </div>
                </div>
            </div>
        </>
    );
}
