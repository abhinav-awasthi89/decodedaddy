"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import '@/components/Navbar/Navbar.css'
const Navbar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);
  const [transparency, setTransparency] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setTransparency(false);
      if (scrollTop > 100) {
        setTransparency(true);
      }
      if (scrollTop > lastScrollTop) {
        setVisible(false);
        setMenuVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    const links = document.querySelectorAll(".menu li a");

    const navHover = document.getElementById("nav-hover");
    const moveBackground = (link) => {
      navHover.style.left = `${link.getBoundingClientRect().left}px`;
      navHover.style.width = `${link.getBoundingClientRect().width}px`;
      navHover.style.top = `${link.getBoundingClientRect().top}px`;
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        navHover.style.opacity = 1;
        moveBackground(e.target);
      });
      link.addEventListener("mouseleave", () => {
        navHover.style.opacity = 0;
      });

      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    if (links.length > 0) {
      moveBackground(links[0]);
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", (e) => {
          moveBackground(e.target);
        });
      });
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={`${visible ? "appear" : "disappear"} ${transparency ? "tansparent" : ""}`}>
      <Image
        style={{ pointerEvents: "initial" }}
        className="nav-logo"
        src="/img/logo.png"
        alt="logo"
        priority
        width={200}
        height={200}
      />

      <div style={{ pointerEvents: "initial" }} className={`menu ${menuVisible ? "show" : ""}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#aboutUs">About Us</a></li>
          <li><a href="#service">Services</a></li>
          {/* <li><a href="#blog">Blog</a></li> */}
          <li><a href="#contactUs">Contact Us</a></li>
          {menuVisible ? <li><a href="/">Get Quote</a></li> : ""}
        </ul>
        <div id="nav-hover" className="nav-hover"></div>
      </div>
      <div style={{ pointerEvents: "initial" }} className="get-quote">Get Quote</div>

      <button
        style={{ pointerEvents: "initial" }}
        className="menu-button"
        onClick={toggleMenu}
      >
        {menuVisible ? <div style={{ fontSize: "2.5rem" }}>X</div> : <div style={{ fontSize: "2.5rem" }}>&#9776;</div>}
      </button>
    </nav>
  );
};

export default Navbar;