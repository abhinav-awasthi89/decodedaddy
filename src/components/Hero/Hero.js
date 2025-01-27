"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./Hero.module.css";
// import Image from "next/image";

function Hero() {
  const [style, setStyle] = useState({
    transform: "translate3d(0, 0, 0) scale(1)",
    opacity: 1,
  });
  const [backgroundPositionX, setBackgroundPositionX] = useState("100%");
  const spanRef = useRef(null);
  const requestRef = useRef();

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const scaleValue = Math.max(1 - scrollY / 5000, 0.37);
    const translateY = Math.min(scrollY / 15, 50);
    const newOpacity = Math.max(1 - scrollY / 600, 0);
    if (scrollY > 200) {

      setStyle({
        transform: `translate3d(0, ${translateY}px, 0) scale(${scaleValue})`,
        opacity: newOpacity,
      });
    } else {
      setStyle({
        transform: "translate3d(0, 0, 0) scale(1)",
        opacity: 1,
      });
    }

    if (spanRef.current && scrollY > 300) {
      const maxScroll = 300;
      const percentage = Math.min((scrollY - 300) / maxScroll, 1) * 100;
      setBackgroundPositionX(`${100 - percentage}%`);
    } else {
      setBackgroundPositionX("100%");
    }
  }, []);

  useEffect(() => {
    const debouncedScroll = () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      requestRef.current = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", debouncedScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleScroll]);

  return (
    <section id="home">
      <div style={{ width: "100%", height: '23vh' }}></div>
      <div className={styles.DECODEDADDY}>
        {/* <Image priority src="/img/DECODEDADDY.png" alt="DECODEDADDY" width={1450} height={100} /> */}
        <p style={style}>decode daddy</p>
      </div>
      <div style={{ pointerEvents: "initial" }} className={styles.heroContent}>
        <p>Hey there!</p>
        <p>
          <span ref={spanRef} style={{ backgroundPositionX }}>
            We are a Digital Brand Establishment company that provides a notable digital presence in just 3
            months. Our standardized approach to digital transformation brings more growth in less
            time, delivering exceptional results.
          </span>
        </p>
        <div className={styles.knowMore}>
          <span style={{ borderBottom: "4px solid black" }}>know more</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;