import React from 'react'
import Writer from './Writer'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'

const Hero2 = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold"><Writer /></h1>
        <p className="py-6">
          استخدم كود برومو الخاص بنا لاسترجاع 10% من خسائرك والحصول على بونيس 100% ابدأ الان الربح معنا
        </p>
       <div className='flex gap-6 items-center justify-center w-full'>
       <button className="btn bg-base-100 hover:bg-white text-base-200">شحن رصيد <MdAttachMoney /></button>
       <button className="btn bg-green-300 hover:bg-slate-50 text-base-200">سحب الأرباح <BiMoneyWithdraw /></button>
       </div>
      </div>
    </div>
  </div>
  )
}

export default Hero2