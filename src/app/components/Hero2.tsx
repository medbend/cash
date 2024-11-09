"use client"
import React from 'react'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { MdAttachMoney } from 'react-icons/md'
import { motion } from "framer-motion"
import Clipboard from './Clipboard'
import Writer from './Writer'
const Hero2 = () => {
  return (
    <div className="hero bg-stone-200 dark:bg-stone-800 text-stone-900 dark:text-stone-100 min-h-screen">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <motion.h1
         initial={{ opacity: 0, y: -100 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{
           type: "spring",
           damping: 10,
           stiffness: 100,
           delay: 1.2,
           duration: 0.3,
         }} className="text-5xl font-bold">اشحن حسابك معنا</motion.h1>
<h1 className='mt-6 text-3xl'><Writer /></h1>
        <p className="py-6">
          استخدم كود برومو الخاص بنا لاسترجاع 10% من خسائرك والحصول على بونيس 100% ابدأ الان الربح معنا
        </p>
       <div
        className='flex gap-6 items-center justify-center w-full'>
       <motion.button
       initial={{ opacity: 0, y: -100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
         type: "spring",
         damping: 10,
         stiffness: 100,
         delay: 1.2,
         duration: 0.3,
       }}
       className="btn bg-stone-100 hover:bg-white text-stone-900">شحن رصيد <MdAttachMoney /></motion.button>
       <motion.button
       initial={{ opacity: 0, y: -100 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{
         type: "spring",
         damping: 10,
         stiffness: 100,
         delay: 1.5,
         duration: 0.3,
       }}
        className="btn bg-green-500 hover:bg-slate-200 text-base-200">سحب الأرباح <BiMoneyWithdraw /></motion.button>
       </div>
       <div className='my-4 flex flex-col gap-3'>
        <h1>اختر كود برومو</h1>
      
        <Clipboard named={"1xbet"} text={"code 1xbet"} platform={" كود برومو "} />
         <Clipboard named={"linebet"} text={"code linebet"} platform={" كود برومو "} />
         <Clipboard named={"xparibet"} text={"code xparibet"} platform={" كود برومو "} />
 
         </div>
      </div>
      
    </div>
  </div>
  )
}

export default Hero2