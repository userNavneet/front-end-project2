import React, { useState, useEffect } from 'react';
import ferrari from '../assets/ferrari.png';
import { motion } from "framer-motion";

const Loader = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setIsLoaded(true);
        const interval = setInterval(() => {
            setValue((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`loader ${isLoaded ? 'loaded' : ''} relative flex flex-col items-center justify-center h-screen`}>
            <div className='flex w-full absolute top-1/4 left-1/4'>
                <p className='text-red-600 w-[auto]  p-4 text-4xl sm:text-6xl text-left'>{value} </p>
                
            </div>
            <div className='flex flex-col items-center'>
                <div className="content text-6xl sm:text-8xl text-red-600">
                    <motion.img
                        initial={{ x: 0 }}
                        animate={{
                            x: 1000,
                            transition: {
                                delay: 1.3,
                                duration: 1.5,
                                ease: "easeInOut",
                            },
                        }}
                        src={ferrari}
                        alt="Formula one car"
                        className="w-3/4 sm:w-1/2"
                    />
                    <motion.h1
                        initial={{ x: 0 }}
                        animate={{
                            x: -300,
                            opacity: 0,
                            transition: {
                                duration: 1.5,
                                delay: 1.3,
                                ease: "easeInOut",
                            },
                        }}
                        className='text-end mt-5 text-5xl sm:text-6xl'
                    >
                        F1 Racing
                    </motion.h1>
                </div>
            </div>
        </div>
    );
}

export default Loader;
