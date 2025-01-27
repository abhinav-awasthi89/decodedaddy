import React, { useState, useEffect, useRef } from 'react';

function Counter({ target, style }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
            setCount(0);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    const element = ref.current; // Store ref.current in a local variable

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use the local variable for cleanup
      }
    };
  }, []);

  useEffect(() => {
    if (isInView && count < target) {
      const timer = setTimeout(() => setCount(count + 1), 10);
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [count, isInView, target]);

  return <span ref={ref} id='counter-text'>{count}%</span>;
}

export default Counter;
