"use client"
import React, { use, useState } from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

const HeroContent = () => {
    const [text , setText ] = useState(false);

    const handleText = () =>{
        setText(!text);
    }
  return (
    <motion.div
        initial="hidden"
        animate="visible"
        className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] '
            >
                <SparklesIcon className='text-[#b49bff] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]'>Software Developer</h1>
            </motion.div>

            <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]'>Web Developer</h1>
            </motion.div>

            {/* <motion.div
                variants={slideInFromTop}
                className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]'
            >
                <SparklesIcon className='text-[#b49bff] h-5 w-5'/>
                <h1 className='Welcome-text text-[13px]'>Freelancer</h1>
            </motion.div> */}

            <motion.div
                variants={slideInFromLeft(0.5)}    
                className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
            >
                <span>
                    HELLO
                    I AM 
                    <br/>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> ADARSH KUMBAR </span>
                </span>
            </motion.div>
            
            <button className='text-left' >
                <motion.a
                    href="AdarshKumbar.pdf" download
                    variants={slideInFromLeft(1)}
                    className='Welcome-box py-[8px] px-[9px] border border-[#7042f88b] opacity-[1]  button-primary text-white cursor-pointer font-mono'
                >
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 text-lg'> Download Resume </span>
                </motion.a>
            </button>
    {/* BUTTON TO REVEAL AND HIDE */}
            {/* <button  onClick={handleText}>
                <motion.a
                    variants={slideInFromLeft(1)}
                    className='py-2 button-primary text-center text-white cursor-pointer rounder-lg max-w-[200px]'
                >
                    Learn More!
            </motion.a>
            </button> */}

            
            

            {/* {text&& */}
            <motion.p
                variants={slideInFromLeft(0.2)}
                className='text-lg text-gray-400 my-8 max-w-[600px]'
            >
                A student of B.E. Information Science and Engineering with a keen interest in programming, who wish to use
                technical knowledge to cater to the needs of the company
            </motion.p>
            {/* }  */}
        </div>
        <motion.div
            variants={slideInFromRight(0.8)}
            className='w-full h-full flex justify-center items-center'
        >
            <Image 
                src="/mainIconsdark.svg"
                alt="work icons"
                height = {650}
                width = {650}
            />
        </motion.div>
    </motion.div>
  )
}

export default HeroContent