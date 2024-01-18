'use client'
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion";
import { slideInFromTop ,slideInFromLeft } from "@/utils/motion";
interface Props{
  src : string;
  title : string;
  description : string
  link : string
}

const ProjectsCard = ({src , title , description , link} : Props) => {
  return (
  
    <div className='relative overflow-hidden rounded-lg border border-[#2A0E61]'>
      <Image
      src={src}
      alt={title}
      width={1000}
      height={1000}
      className='w-full object-contain'
      />

      <div className='relative p-4'>
        <h1 className='text-2xl font-semibold text-white'>
            {title}
        </h1>
        <p className='mt-2 text-gray-300'>
          {description}
        </p>
        
                {/* <motion.a
                    href= { link }
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white rounder-lg max-w-[100px] mx-[2px] '
                >
                Link
                </motion.a> */}
          
      </div>
    
    </div>
    
  )
}

export default ProjectsCard