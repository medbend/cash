"use client";
import Image from "next/image";
import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";
import ThemeController from "./ThemeController";
import { motion } from "framer-motion";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="navbar bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-base-100">
      <div className="navbar-start">
        <div className="dropdown text-stone-900 dark:text-stone-100">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-stone-100 dark:bg-stone-950 rounded-box z-[1] mt-3 w-52 p-2 shadow text-stone-900 dark:text-stone-100"
          >
            <li>
              <a>
                السحب
                <BiMoneyWithdraw />
              </a>
            </li>
            <li>
              <a>
                الإيداع <GrMoney />
              </a>
            </li>
            <li>
              <a>قائمة</a>
              <ul className="p-2 bg-stone-100 dark:bg-stone-900 text-stone-900 dark:text-stone-100">
                <li>
                  <a></a>الإيداع <GrMoney />
                </li>
                <li>
                  <a>
                    السحب <BiMoneyWithdraw />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>رابط </a>
            </li>
          </ul>
        </div>
        <motion.a
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="btn btn-ghost text-xl text-stone-900 dark:text-stone-100"
        >
          <Image
            src="/logoGreen.svg"
            height={32}
            width={32}
            alt="logo betbux "
          />{" "}
          <b>بيت</b>
          <span className="text-green-500">بوكس</span>
        </motion.a>
      </div>
      <div className="navbar-center hidden lg:flex text-stone-900 dark:text-stone-100 ">
        <ul className="menu menu-horizontal px-1 text-stone-900 dark:text-stone-100">
          <li>
            <a>
              الإيداع <GrMoney />
            </a>
          </li>
          <li>
            <a>
              السحب <BiMoneyWithdraw />
            </a>
          </li>
          <li>
            <details className="">
              <summary className="text-stone-900 dark:text-stone-100">
                قائمة
              </summary>
              <ul className="p-2">
                <li className="text-stone-100">
                  <a>رابط 1</a>
                </li>
                <li className="text-stone-100">
                  <a>صفحة 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>رابط </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
        <div className="divider divider-horizontal">|</div>
        <div className="flex gap-2">
          <a
            aria-label="Chat on WhatsApp"
            href="https://t.me/ZiikoBet"
            className="zoomed-in"
          >
            <FaTelegram size={22}/>
          </a>
          <a
            aria-label="Chat on WhatsApp"
            href="https://wa.me/0639125098"
            className="zoomed-in"
          >
            {" "}
            <FaWhatsapp size={22} />
          </a>
        </div>
        {/* <a href="tel:0639125098" className="zoomed-in"><Image src="/Phone_icon.png" alt='whatsapp contact' width={32} height={32}/> </a> */}
      </div>
    </div>
  );
};

export default Navbar;
