
import React from 'react'
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxLinkedinLogo,
} from 'react-icons/rx'
import Link from 'next/link';
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] cursor-pointer'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer'>
                    <div className='font-bold text-[20px] '> 
                       <br />
                       <hr className='pt-3' style={{background:"red" , width:"100"}}/>
                    </div>
                    
                    <span className='pt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-3 text-[30px]'>CONTACT ME</span>
                    
                    <Link href={"https://discord.gg/Z2kNx7EcJP"} target="_blank" >
                        <p className='flex flex-row items-center my-[15px] cursor-pointer '>
                        <RxDiscordLogo/>
                        <span className='text-[15px] ml-[6px]'> Discord </span>
                        </p>
                        
                    </Link>
                    
                    <Link href={"https://github.com/Adarshkumbar"} target='_blank'>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <RxGithubLogo/>
                            <span className='text-[15px] ml-[6px]'> Github </span>
                        </p>
                    </Link>

                    <Link href={'https://www.linkedin.com/in/adarshkumbar/'} target='_blank'>
                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxLinkedinLogo/>
                        <span className='text-[15px] ml-[6px]'> LinkedIn </span>
                    </p>
                    </Link>
                    
                    <a href="mailto:adarshkumbarbgm@gmail.com"  style={{ zIndex: 10 }}>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer' >
                        <SiGmail/>
                        <span className='text-[15px] ml-[6px]'> Gmail</span>
                        </p>
                    </a>
                </div>
                
            </div>

            <div className='mb-[20px] text-[15px] text-center'>
                &copy; Adarsh Kumbar 2024 Inc.
            </div>
            {/* <div className='mb-[20px] text-[15px] text-center'>
                adarshkumbarbgm@gmail.com
            </div> */}
        </div>
    </div>
  )
}

export default Footer