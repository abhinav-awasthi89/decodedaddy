"use client";

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import '@/components/Scroller/Scroller.css'
function Scroller() {
    const scrollerInnerRef = useRef(null);
    const lastScrollTopRef = useRef(0);
    const scrollTimeoutRef = useRef(null);
    const transformPositionRef = useRef(0);

    useEffect(() => {
        const scrollerInner = scrollerInnerRef.current;
        const middlePosition = -scrollerInner.scrollWidth / 2;
        scrollerInner.style.transform = `translateX(${middlePosition}px)`;
        transformPositionRef.current = middlePosition;
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            if (currentScrollTop > lastScrollTopRef.current) {
                if (transformPositionRef.current < -scrollerInner.scrollWidth + 1500) {
                    transformPositionRef.current = middlePosition;
                }
                transformPositionRef.current -= 4;
                scrollerInner.style.transform = `translateX(${transformPositionRef.current}px)`;
            } else if (currentScrollTop < lastScrollTopRef.current) {
                if (transformPositionRef.current > -50) {
                    transformPositionRef.current = middlePosition;
                }
                transformPositionRef.current += 4;
                scrollerInner.style.transform = `translateX(${transformPositionRef.current}px)`;
            }

            // Update last scroll position
            lastScrollTopRef.current = currentScrollTop;

            // Set a timeout to pause the animation if no scroll occurs
            scrollTimeoutRef.current = setTimeout(() => {
                scrollerInner.style.transition = 'transform 0.5s ease-out';
            }, 1000); // 100ms interval to determine no scrolling
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);
    const items = [
        { src: "/img/star.webp", alt: "s", text: "Generator" },
        { src: "/img/star.webp", alt: "s", text: "Disruptor" },
        { src: "/img/star.webp", alt: "s", text: "Radical" },
        { src: "/img/star.webp", alt: "s", text: "Ideator" },
        { src: "/img/star.webp", alt: "s", text: "Stylist" },
    ];


    const repeatedItems = Array.from({ length: 3 }, () => items).flat();

    return (
        <div>
            <div style={{ width: "100%", height: '23vh' }}></div>
            <div className="scroller">
                <ul className="tag-list scroller__inner" ref={scrollerInnerRef}>
                    {repeatedItems.map((item, index) => (
                        <li key={index}>
                            <Image height={100} width={100} src={item.src} alt={item.alt} />
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{ width: "100%", height: '23vh' }}></div>
        </div>
    );
}

export default Scroller;
