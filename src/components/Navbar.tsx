"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";
import logo from "../assets/Logo_2-removebg-preview (1).png";

const Navbar = () => {
  const [isTransparent, setIsTransparent] = useState(true);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-50 top-0 left-0 right-0 items-center p-4 ${isTransparent ? 'bg-transparent text-white' : 'bg-white text-black'} transition-colors duration-300 shadow-2xl`}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between lg:px-40">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image height="60" width="60" src={logo} alt="logo" />
          </Link>
          <div>
            <h2 className="font-semibold text-2xl lg:text-4xl">MIAMI</h2>
            <p className="text-sm font-semibold">PROPERTY TAXES</p>
          </div>
        </div>
        <div className="hidden lg:flex flex-col justify-center items-center">
          <p className="text-xl font-semibold">{`Don't Hesitate to Call Us`}</p>
          <p className="font-semibold">786-453-8127</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
