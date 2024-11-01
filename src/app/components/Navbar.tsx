import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>السحب</a></li>
          <li><a>الإيداع</a></li>
          <li>
            <a>قائمة</a>
            <ul className="p-2">
              <li><a>رابط 1</a></li>
              <li><a>صفحة 2</a></li>
            </ul>
          </li>
          <li><a>رابط </a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">كاش</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      <li><a>رابط 1</a></li>
      <li><a>صفحة 2</a></li>
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
      <a className="btn">اتصل بنا</a>
    </div>
  </div>
  )
}

export default Navbar