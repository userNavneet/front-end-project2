import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import sky from '../assets/sky.mp4';
import God from '../assets/Gods.mp4';
import run from '../assets/Run.mp4';

const Test = ({setlatestHover,setf1Hover}) => {
  const videos = [
    {
      src: sky,
      heading: 'Race Day Excitement',
      paragraph: 'Feel the excitement as the world\'s best drivers compete on race day.'
    },
    {
      src: God,
      heading: 'Champions on Track',
      paragraph: 'Witness top drivers competing fiercely to become the ultimate Formula 1 champions.'
    },
    {
      src: run,
      heading: 'The Thrill of Speed',
      paragraph: 'Experience the adrenaline of Formula 1 racing,  create the ultimate motorsport spectacle.'
    }
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  const handleNextVideo = () => {
    anime({
      targets: videoRef.current,
      scale: [1, 0],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutQuart',
      complete: () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        anime({
          targets: videoRef.current,
          scale: [0, 1],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeInOutQuart'
        });
        anime({
          targets: textRef.current,
          translateX: [250, 0],
          opacity: [0, 1],
          delay: 200,
          duration: 1000,
          easing: 'easeInOutQuart'
        });
      }
    });
  };

  const handlePrevVideo = () => {
    anime({
      targets: videoRef.current,
      scale: [1, 0],
      opacity: [1, 0],
      duration: 500,
      easing: 'easeInOutQuart',
      complete: () => {
        setCurrentVideoIndex(
          (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
        );
        anime({
          targets: videoRef.current,
          scale: [0, 1],
          opacity: [0, 1],
          duration: 500,
          easing: 'easeInOutQuart'
        });
        anime({
          targets: textRef.current,
          translateX: [250, 0],
          opacity: [0, 1],
          delay: 500,
          duration: 500,
          easing: 'easeInOutQuart'
        });
      }
    });
  };

  useEffect(() => {
    anime({
      targets: videoRef.current,
      scale: [0, 1],
      opacity: [0, 1],
      duration: 500,
      easing: 'easeInOutQuart'
    });
    anime({
      targets: textRef.current,
      translateX: [250, 0],
      opacity: [0, 1],
      delay: 500,
      duration: 500,
      easing: 'easeInOutQuart'
    });
  }, [currentVideoIndex]);

  return (
    <div 
    onMouseEnter={()=>setlatestHover(false)} onMouseOver={()=>setf1Hover(false)}
    className="video-slider relative flex items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
      <div className="video-container relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src={videos[currentVideoIndex].src}
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="text-overlay absolute top-[30%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="headingmain text-red-600 text-2xl sm:text-2xl md:text-4xl lg:text-5xl">{videos[currentVideoIndex].heading}</h1>
          <p className="paragraph text-zinc-300 text-sm sm:text-base md:text-lg lg:text-xl mt-4">{videos[currentVideoIndex].paragraph}</p>
        </div>
      </div>
      <div className="navigation-buttons absolute bottom-5 flex space-x-4">
        <button 
          className=" text-white text-xl hover:bg-gray-300 py-2 px-4 rounded hover:text-red-600 transition duration-300" 
          onClick={handlePrevVideo}>
          Previous
        </button>
        <button 
          className=" text-white text-xl hover:bg-gray-300  py-2 px-4 rounded hover:text-red-600  transition duration-300" 
          onClick={handleNextVideo}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Test;
