'use client';

import { useEffect } from 'react';
import '@/components/Cards/Cards.css';

export default function Cards() {
  useEffect(() => {
    const stickySections = document.querySelectorAll('.sticky_wrap');

    const handleScroll = () => {
      stickySections.forEach(section => {
        transform(section);
      });
    };

    const transform = (section) => {
      const offsetTop = section.parentElement.offsetTop;
      const scrollSection = section.querySelector('.horizontal_scroll');
      const scrollWidth = scrollSection.scrollWidth;
      const windowWidth = window.innerWidth;
      
      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      const maxTranslate = (scrollWidth - windowWidth) / windowWidth * 100; 
      
      percentage = Math.min(Math.max(percentage, 0), maxTranslate);
      scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
    };

    if(window.innerWidth >= 980) window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll_container" >
      <div className="sticky_wrap">
        <div className="horizontal_scroll">
          <div className="scroll_contents" ></div>
          <div className="scroll_contents" ></div>
          <div className="scroll_contents" ></div>
          <div className="scroll_contents" ></div>
        </div>
      </div>
    </div>
  );
}
