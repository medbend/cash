"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
const Writer = () => {
  return (
    <Typewriter
    options={{
      strings: ['اشحن حسابك معنا', 'سرعة في الايداع',"سرعة في السحب"],
      autoStart: true,
      loop: true,
    }}
  />
  )
}

export default Writer