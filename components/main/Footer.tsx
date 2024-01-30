'use client'
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
    <section id="footer">
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full py-20 border-style: solid;">
      <div className="absolute w-auto h-auto top-0 z-[5] top-20">
          <span className="text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 ">
            CONTACT ME 
          </span>
      </div>
      <div className="flex flex-col top-[230px] items-center justify-left translate-y-[-50px] absolute z-[20] w-auto h-auto ">
        <div className="flex flex-col text-left group cursor-pointer w-auto h-auto ">
               
            <Link href={"https://github.com/Adarshkumbar"} target='_blank'>
                    <p className='flex flex-row items-center my-[5px] cursor-pointer z-[30] text-gray-200'>
                            <RxGithubLogo/>
                             <span className='text-[15px] ml-[6px] ' > Github </span>
                     </p>
            </Link>


           <Link href={"https://discord.gg/Z2kNx7EcJP"} target="_blank" >
                         <p className='flex flex-row items-center my-[25px] cursor-pointer text-gray-200'>
                         <RxDiscordLogo/>
                         <span className='text-[15px] ml-[6px]' > Discord </span>
                         </p>
                        
            </Link>

           <Link href={'https://www.linkedin.com/in/adarshkumbar/'} target='_blank'>
                     <p className='flex flex-row items-center my-[25px] cursor-pointer text-gray-200'>
                         <RxLinkedinLogo/>
                         <span className='text-[15px] ml-[6px] ' > LinkedIn </span>
                     </p>
            </Link>

            <a href="mailto:adarshkumbarbgm@gmail.com"  style={{ zIndex: 10 }}>
                         <p className='flex flex-row items-center my-[25px] cursor-pointer text-gray-200' >
                         <SiGmail/>
                         <span className='text-[15px] ml-[6px] text-gray-200' > Gmail</span>
                         </p>
            </a>

            <br></br>
            
        </div>
        <div className='my-20 text-[15px] text-center text-gray-200 '>
                 &copy; Adarsh Kumbar 2024 Inc.
             </div>
      </div>
    </div>
    </section>
    //  BELOW ORIGINAL CODE

    // <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] cursor-pointer'>
    //     <div className='w-full flex flex-col items-center justify-center m-auto'>
    //         <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>
    //             <div className='min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer'>
    //                 <div className='font-bold text-[20px] '> 
    //                    <br />
    //                    <hr className='pt-3' style={{background:"red" , width:"100"}}/>
    //                 </div>
                    
                    
    //                 <span className='pt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-3 text-[30px]'>CONTACT ME</span>
    //                 <p style={{color:"red",cursor:"pointer"}}> HELLP</p>
    //                 
    //                     <Link href={"https://discord.gg/Z2kNx7EcJP"} target="_blank" >
    //                     <p className='flex flex-row items-center my-[15px] cursor-pointer '>
    //                     <RxDiscordLogo/>
    //                     <span className='text-[15px] ml-[6px]'> Discord </span>
    //                     </p>
                        
    //                     </Link>
    //               
                   
                    
    //                 <Link href={"https://github.com/Adarshkumbar"} target='_blank'>
    //                     <p className='flex flex-row items-center my-[15px] cursor-pointer'>
    //                         <RxGithubLogo/>
    //                         <span className='text-[15px] ml-[6px]'> Github </span>
    //                     </p>
    //                 </Link>

    //                 <Link href={'https://www.linkedin.com/in/adarshkumbar/'} target='_blank'>
    //                 <p className='flex flex-row items-center my-[15px] cursor-pointer'>
    //                     <RxLinkedinLogo/>
    //                     <span className='text-[15px] ml-[6px]'> LinkedIn </span>
    //                 </p>
    //                 </Link>
                    
    //                 <a href="mailto:adarshkumbarbgm@gmail.com"  style={{ zIndex: 10 }}>
    //                     <p className='flex flex-row items-center my-[15px] cursor-pointer' >
    //                     <SiGmail/>
    //                     <span className='text-[15px] ml-[6px]'> Gmail</span>
    //                     </p>
    //                 </a>
    //             </div>
                
    //         </div>

    //         <div className='mb-[20px] text-[15px] text-center'>
    //             &copy; Adarsh Kumbar 2024 Inc.
    //         </div>
    //         {/* <div className='mb-[20px] text-[15px] text-center'>
    //             adarshkumbarbgm@gmail.com
    //         </div> */}
    //     </div>
    // </div>
  )
}

export default Footer