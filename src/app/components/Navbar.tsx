import Image from 'next/image'
import React from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { GrMoney } from 'react-icons/gr'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base-200">
          <li><a>السحب<BiMoneyWithdraw /></a></li>
          <li><a>الإيداع <GrMoney /></a></li>
          <li>
            <a>قائمة</a>
            <ul className="p-2">
              <li><a></a>الإيداع <GrMoney /></li>
              <li><a>السحب <BiMoneyWithdraw /></a></li>
            </ul>
          </li>
          <li><a>رابط </a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl text-base-200">موبي كاش</a>
    </div>
    <div className="navbar-center hidden lg:flex text-base-200">
      <ul className="menu menu-horizontal px-1">
      <li><a>الإيداع <GrMoney /></a></li>
      <li><a>السحب <BiMoneyWithdraw /></a></li>
        <li>
          <details>
            <summary>قائمة</summary>
            <ul className="p-2">
              <li><a>رابط 1</a></li>
              <li><a>صفحة 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>رابط </a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a aria-label="Chat on WhatsApp" href="https://wa.me/0639125098" className="zoomed-in"><Image src="/whatsapp.png" alt='whatsapp contact' width={45} height={45}/> </a>
      <a href="tel:0639125098" className="zoomed-in"><Image src="/Phone_icon.png" alt='whatsapp contact' width={32} height={32}/> </a>
    </div>
  </div>
  )
}

export default Navbar