import { Socials } from '@/constants'
import Image from 'next/image'
// import React, { useState } from 'react'
import Link from 'next/link';
import Dropdown from "../sub/Dropdown";

export interface MenuItem {
    title: string;
    src?: string;
    link?:string;
    children?: MenuItem[];
  }
  
  const menuItems: MenuItem[] = [
    {
      title: "Socials",
      children: [
        {
            title: "Github",
            src: "/github.svg",
            link :"https://github.com/Adarshkumbar"
          },
          {
            title: "LinkedIn",
            src: "/linkedin.png",
            link :"https://www.linkedin.com/in/adarshkumbar/"
          },
          {
            title: "Discord",
            src: "/discord.svg",
            link:"https://discord.gg/Z2kNx7EcJP"
          },
      ],
    },
  ];

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <Link href={"/"}>
            <div  className='h-auto w-auto flex flex-row items-center'>
                <Image 
                    src="/astrocat.png"    
                    alt='logo'
                    width={70}
                    height={70}
                    className='cursor-pointer hover:animate-slowspin'
                />
                <span className='font-bold ml-[10px] hidden md:black text-gray-300'>
                    WEB DEV
                </span>
            </div>
            </Link>
            

            <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
                <div className='flex item-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                    <a href="/" className='cursor-pointer'>About Me</a>
                    {/* <Link href="/" className='cursor-pointer'>About Me</Link> */}

                    {/* <Link href="#skills" className='cursor-pointer'>Skills</Link> */}
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    {/* <Link  href="projects" className='cursor-pointer'>Projects</Link> */}
                    <a href="#project" className='cursor-pointer'>Projects</a>
                </div>
            </div>
    {/*  SOCIAL MEDIA LINKS */}
            {/* <div className='flex flex-row gap-5 cursor-pointer'>
                {Socials.map((social) => (
                    <Link href={`${social.link}`}target="_blank">
                        <Image 
                        src={social.src}
                        alt={social.name}
                        key={social.name}
                        width={24}
                        height={24}
                        />
                    </Link>
                ))}
            </div> */}
        
        <header className="flex gap-10 items-center bg-black-800 py-4 px-2">
        <div className="flex gap-8 items-center text-white">
            {  menuItems.map((item) => {
                return item.hasOwnProperty("children") ? (
                <Dropdown item={item} />
                ) : (
                < Link className="hover:text-blue-500" href={item?.link || ""}>
                {item.title}
                </Link>
          );
            })}
        </div>
    </header>
  

        </div>
    </div>
  )
}

export default Navbar