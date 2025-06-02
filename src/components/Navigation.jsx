import "./scroll.css";
import { useState } from "react";
import f1 from "../assets/F1name.svg";
import F1Hover from "./F1Hover";
import { AnimatePresence, motion } from "framer-motion";
import { buttonVar } from "./Hero";
import Logo from "./Logo";
import Test from "./LatestHover";
export default function Navigation({latestHover,setlatestHover,setf1Hover,f1Hover}) {
    const [active, setActive] = useState(false);
   
    const linkVar = {
        hover: {
            textDecoration: "underline 3px white",
        },
    };
    return (
        <>
            <div className="nav mt-0 md:bg-red-600 flex items-center justify-between sticky top-0 z-30 bg-white h-[60px]">
                <div className="">
                    <Logo />
                </div>
                <div className="hidden md:flex w-2/4 justify-between">
                    <motion.div whileHover="hover" variants={linkVar} onMouseEnter={()=>setf1Hover(false)}>
                        <a onMouseEnter={()=>setlatestHover(true)}  className="text-white text-lg" href="#">
                            Latest
                           {
                            latestHover && (
                                <Test/>
                            )
                           }
                        </a>
                    </motion.div>
                    <motion.div whileHover="hover" variants={linkVar} onMouseEnter={()=>setlatestHover(false)}>
                        <a onMouseEnter={()=>setf1Hover(true)} className="text-white text-lg" href="#">
                            F1 Unlocked
                           {f1Hover && (
                            <F1Hover/>
                           )}
                        </a>
                    </motion.div>
                    <motion.div whileHover="hover" variants={linkVar} >
                        <a className="text-white text-lg" href="#">
                            Results
                        </a>
                    </motion.div>
                </div>
                <div className="hidden md:flex">
                    <motion.button
                        className="bg-white px-4 py-2 m-2  text-pureRed font-bold"
                        variants={buttonVar}
                        whileTap="tap"
                        whileHover="hover"
                    >
                        Log in
                    </motion.button>
                    <motion.button
                        className="bg-white px-4 py-2 font-bold  m-2 text-pureRed mr-4"
                        variants={buttonVar}
                        whileTap="tap"
                        whileHover="hover"
                    >
                        Sign Up
                    </motion.button>
                </div>
                <div className="md:hidden">
                    <motion.button
                        initial={false}
                        className="h-20 w-20 relative z-50"
                        onClick={() => setActive((prv) => !prv)}
                        animate={active ? "open" : "closed"}
                    >
                        <motion.span
                            style={{
                                left: "50%",
                                top: "50%",
                                x: "-50%",
                                y: "-50%",
                            }}
                            className="w-10 h-1 bg-pureRed absolute z-20"
                            variants={{
                                open: {
                                    rotate: ["0deg", "0deg", "-45deg"],
                                },
                                closed: {
                                    rotate: ["-45deg", "-45deg", "0deg"],
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        ></motion.span>
                        <motion.span
                            className="w-10 h-1 bg-pureRed absolute z-50"
                            style={{
                                left: "50%",
                                top: "65%",
                                x: "-50%",
                                y: "-50%",
                            }}
                            variants={{
                                open: {
                                    rotate: ["0deg", "0deg", "45deg"],
                                    top: ["65%", "65%", "50%"],
                                },
                                closed: {
                                    rotate: ["45deg", "45deg", "0deg"],
                                    top: ["50%", "50%", "65%"],
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        ></motion.span>
                    </motion.button>
                </div>
            </div>
            <AnimatePresence>{active && <MobileMenu />}</AnimatePresence>
        </>
    );
}
function MobileMenu() {
    const menuVar = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 0, 0.36, 1],
            },
        },
    };
    const contStar = {
        initial: {
            transition: {
                staggerChildren: 0.09,
            },
        },
        open: {
            transition: {
                staggerChildren: 0.09,
            },
        },
    };
    const textVar = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.4,
            },
        },
        open: {
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    };
    return (
        <>
            <motion.div
                className="h-screen w-screen fixed md:hidden flex bg-pureRed z-20 top-0 justify-center items-center origin-top"
                variants={menuVar}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <motion.ul
                    className="flex flex-col gap-6 text-xl text-white overflow-hidden"
                    variants={contStar}
                    initial="initial"
                    animate="open"
                >
                    <motion.li
                        variants={textVar}
                        initial="initial"
                        animate="open"
                        whileHover={{
                            textDecoration: "underline white 3px",
                        }}
                    >
                        Latest
                    </motion.li>
                    <motion.li
                        variants={textVar}
                        initial="initial"
                        animate="open"
                        whileHover={{
                            textDecoration: "underline white 3px",
                        }}
                    >
                        F1 Unlocked
                    </motion.li>
                    <motion.li
                        variants={textVar}
                        initial="initial"
                        animate="open"
                        whileHover={{
                            textDecoration: "underline white 3px",
                        }}
                    >
                        Esports
                    </motion.li>
                    <motion.li
                        variants={textVar}
                        initial="initial"
                        animate="open"
                        whileHover={{
                            textDecoration: "underline white 3px",
                        }}
                    >
                        News
                    </motion.li>
                </motion.ul>
            </motion.div>
        </>
    );
}
