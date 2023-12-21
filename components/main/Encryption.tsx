"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen min-w-fit w-full h-full">
      <div className="absolute z-[20] bottom-[10px] px-[5px]"></div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-fill"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
