"use client";
import React, { useState, useEffect, useRef } from "react";
import ClipboardJS from "clipboard";
import { FaCheckDouble, FaClone } from "react-icons/fa";

interface ClipboardProps {
  text: string;
  platform: string;
  named: string;
}

const Clipboard: React.FC<ClipboardProps> = ({ text, platform, named }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const clipboard = new ClipboardJS(buttonRef.current, {
        text: () => text,
      });

      clipboard.on("success", () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });

      return () => clipboard.destroy();
    }
  }, [text]);

  return (
    <div className="bg-stone-400 dark:bg-stone-600 text-stone-900 dark:text-stone-200 py-1 px-6 flex justify-between items-center w-full text-center">
      <h1 className="w-[33%]">{platform} : </h1>
      <button className="w-[33%]" ref={buttonRef}>
        {copied ? (
          <p className="flex items-center gap-2  ">
            تم النسخ
            <FaCheckDouble className="text-green-500" />
          </p>
        ) : (
          <p className="flex items-center gap-2">
            نسخ
            <FaClone />
          </p>
        )}
      </button>
      <h1 className="w-[33%]">{named} </h1>
    </div>
  );
};

export default Clipboard;
