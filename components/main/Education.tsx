"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Education = () => {
  return (
    <section id="education">
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full py-20">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            {" "}
            EDUCATION{" "}
          </span>
        </motion.div>
      </div>

      <div className="flex flex-col  items-center justify-left translate-y-[-50px] relative z-[20] w-auto h-[100%] my-3">
        <div className="flex flex-col text-left group cursor-pointer w-auto h-auto ">
      
          {/* <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className=" z-10"
          /> */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
            {" "}
            BE, Information Science and Engineering{" "}
            </span>
            <div className="montserrat text-[20px] font-medium  text-gray-300">KLS Gogte Institute of Technology - 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
                {" "}
                8.57 CGPA{" "}
                </span>
                <span className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[1]">
                    <h1 className="Welcome-text text-[12px]">2020 - 2024 Belagavi </h1>
                </span>
            </div>

           <br/>
           <br/>

           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
            {" "}
            Pre University
            {" "}
            </span>
           <div className="montserrat text-[20px] font-medium  text-gray-300">Raja Lahkamagouda PU College -
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
                {" "}
                93%{" "}
                </span>
                <span className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[1]">
                    <h1 className="Welcome-text text-[12px]">2019 - 2020 Belagavi </h1>
                </span>
           </div>
           <br/>
           <br/>

           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-red-500">
            {" "}
            High School
            {" "}
            </span>
           <div className="montserrat text-[20px] font-medium  text-gray-300">Shri Shivayogi English Medium School -
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500">
                {" "}
                93.6%{" "}
                </span>
                <span className="Welcome-box px-[15px] py-[4px] z-[20] border my-[20px] border-[#7042f88b] opacity-[1]">
                    <h1 className="Welcome-text text-[12px]">2017 - 2018 Belagavi </h1>
                </span>
           </div>
      
        </div>
      </div>
    
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/space.mp4/"
        />
      </div>
    </div>
    </section>
  )
}

export default Education