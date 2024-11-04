"use client"
import Image from 'next/image'
import React from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { GrMoney } from 'react-icons/gr'
import ThemeController from './ThemeController'
import { motion } from "framer-motion"
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 dark:bg-base-300 text-base-200 dark:text-base-100">
    <div className="navbar-start">
      <div className="dropdown text-base-200 dark:text-base-100">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 dark:bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base-200 dark:text-base-100">
          <li><a>السحب<BiMoneyWithdraw /></a></li>
          <li><a>الإيداع <GrMoney /></a></li>
          <li>
            <a>قائمة</a>
            <ul className="p-2 bg-base-100 dark:bg-base-200 text-base-200 dark:text-base-100">
              <li><a></a>الإيداع <GrMoney /></li>
              <li><a>السحب <BiMoneyWithdraw /></a></li>
            </ul>
          </li>
          <li><a>رابط </a></li>
        </ul>
      </div>
      <motion.a
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      className="btn btn-ghost text-xl text-base-200 dark:text-base-100">موبي كاش</motion.a>
    </div>
    <div className="navbar-center hidden lg:flex text-base-200 dark:text-base-100 ">
      <ul className="menu menu-horizontal px-1 text-base-200 dark:text-base-100">
      <li><a>الإيداع <GrMoney /></a></li>
      <li><a>السحب <BiMoneyWithdraw /></a></li>
        <li>
          <details className=''>
            <summary className='text-base-200 dark:text-base-100'>قائمة</summary>
            <ul className="p-2">
              <li className='text-base-100'><a>رابط 1</a></li>
              <li className='text-base-100'><a>صفحة 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>رابط </a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <ThemeController />
      <div className="divider divider-horizontal">|</div>
      <a aria-label="Chat on WhatsApp" href="https://wa.me/0639125098" className="zoomed-in"><Image src="/whatsapp.png" alt='whatsapp contact' width={45} height={45}/> </a>
      {/* <a href="tel:0639125098" className="zoomed-in"><Image src="/Phone_icon.png" alt='whatsapp contact' width={32} height={32}/> </a> */}
    </div>
  </div>
  )
}

export default Navbar