import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const TextAnime = ({setlatestHover,setf1Hover}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

      anime.timeline({
        loop: true,
      })
      .add({
        targets: '.text span',
        translateY: [-600, 0],
        scale: [10, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration:1500,
        delay: anime.stagger(100),
      })
      .add({
        targets: '.text span',
        translateX: [0, -1000],
        scale: [1, 1],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration:2000,
        delay: anime.stagger(100),
      })
      .add({
        targets: '.text span',
        translateX: [1000, 0],
        scale: [1, 1],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration:1000,
        delay: anime.stagger(100),
      })
      .add({
        targets: '.text span',
        translateX: [0, 0],
        scale: [1, 50],
        opacity: [1, 0],
        easing: 'easeOutExpo',
        delay: anime.stagger(100),
      });
    }
  }, []);

  return (
    <div onMouseEnter={()=>setlatestHover(false)} onMouseOver={()=>setf1Hover(false)}>
      <section className="relative flex items-center justify-center h-screen overflow-hidden">
        <h2 className="text relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl  text-red-600 text-center" ref={textRef}>
          Join The Racing Context
        </h2>
      </section>
    </div>
  );
};

export default TextAnime;
