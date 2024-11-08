import React from "react";
import Clipboard from "./Clipboard";
import Writer from "./Writer";
import { motion } from "framer-motion"
import { BiMoneyWithdraw } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/bgImage.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold"><Writer /></h1>
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
        className="btn bg-green-300 hover:bg-slate-50 text-base-200">سحب الأرباح <BiMoneyWithdraw /></motion.button>
       </div>
       <div className='my-4 flex flex-col gap-3 '>
        <h1>اختر كود برومو</h1>

    <Clipboard named="1xbet" text={"code 1xbet"} platform={"1xbet كود برومو "} />
         <Clipboard named="linebet" text={"code linebet"} platform={"linebet كود برومو "} />
         <Clipboard named="xparibet" text={"code xparibet"} platform={"xparibet كود برومو "} />

         </div>
      </div>
      
    </div>
    </div>
  );
};

export default Hero;
