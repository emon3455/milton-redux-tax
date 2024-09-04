"use client";
import React, { useEffect, useState } from "react";
import cToastify from "@/shared/Toastify/Toadtify";
import { usePathname } from "next/navigation";
import Link from "next/link";
import getUser from "@/hooks/useAuth";
import { removeDataInCookies } from "@/Global/(cockies)/setCoockies";
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhoneEnabled } from "react-icons/md";
// import logo from "../../public/dat9.webp"

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const path = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [user?.id]);

  const handleLogout = async () => {
    try {
      removeDataInCookies();
      if (path.includes("/admin") || path.includes("/customer")) {
        window.location.href = `/login?redirectUrl=${path}`;
      } else {
        window.location.href = `${path}`;
      }
      cToastify({
        type: "success",
        message: "Successfully Log out done",
      });
    } catch (error) {
      cToastify({
        type: "error",
        message: "Something Went wrong Try again!!",
      });
    }
  };

  return (
    <nav className=" absolute z-50 m-4 top-0 left-0 right-0 rounded-xl items-center p-4 bg-white">

      <div className="flex items-center justify-between px-40">
        <p className="font-semibold text-5xl">
          <Link href="/">Redux</Link></p>
        <ul className="flex items-center gap-10">
          <li className="flex gap-2 items-center"><MdOutlineMailOutline size={25} color="black" /> info@abcd.com</li>
          <li className="flex gap-2 items-center"><MdOutlinePhoneEnabled size={25} color="black" />
          (301) 123456</li>
        </ul>
        {/* <Image
          src={logo}
          alt="Description of the image"
          width={50}
          height={50}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;
