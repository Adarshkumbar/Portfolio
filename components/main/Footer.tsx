import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxLinkedinLogo,
} from 'react-icons/rx'

import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[20px]'> 
                        Contact Me
                    </div>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxDiscordLogo/>
                        <span className='text-[15px] ml-[6px]'> Discord </span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo/>
                        <span className='text-[15px] ml-[6px]'> Github </span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxLinkedinLogo/>
                        <span className='text-[15px] ml-[6px]'> LinkedIn </span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <SiGmail/>
                        <span className='text-[15px] ml-[6px]'> Gmail</span>
                    </p>
                </div>
                {/* <div className='min-w-[200px] h-auto flex flex-col items-center justify-start'>
                    <div className='font-bold text-[16px]'> 
                        More
                    </div>
                    
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        
                        <span className='text-[15px] ml-[6px]'> Collab with Me </span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        
                        <span className='text-[15px] ml-[6px]'> Learn more about me </span>
                    </p>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <span className='text-[15px] ml-[6px]'> adarshbkumbar1@gmail.com </span>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        
                        <span className='text-[15px] ml-[6px]'>  </span>
                    </p>
                </div> */}
            </div>

            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Adarsh Kumbar 2024 Inc.
            </div>

        </div>
    </div>
  )
}

export default Footer