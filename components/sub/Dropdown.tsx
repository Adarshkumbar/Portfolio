'use client'
import React, { useState } from 'react'
import Link from 'next/link';

import { MenuItem } from '../main/Navbar';
import Image from 'next/image';

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative">
                <button
                    className="hover:text-blue-400"
                    onClick={toggle}
                >{item.title}</button>
                <div className={`absolute top-8 z-30 w-[50px] min-h-[150px] flex flex-col py-4 bg-gradient-to-r from-gray-700 to-white-300 rounded-md ${transClass}`}>
                    {
                        menuItems.map(item =>
                                <Link key={item.title} href={`${item.link}`}target="_blank">
                                    <Image 
                                    src={item.src}
                                    alt={item.title}
                                    key={item.title}
                                    width={34}
                                    height={34}
                                    />
                                    <br/>
                                </Link>
                        )
                    }
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}