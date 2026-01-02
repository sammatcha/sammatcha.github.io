'use client';
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import Link from "next/link";

const links = [
    {name: "LinkedIn", href:"https://www.linkedin.com/in/samanthakang079/"},
    {name: "Github", href:"https://github.com/sammatcha"},

]

export default function Socials(){
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrop = () => {
        setIsOpen(!isOpen);
       }
       
    return (

  
   <div className="relative">
        <span className="inline-flex py-2 px-2 justify-between md:py-0 md:px-0 md:justify-normal " >
                <p>Socials</p>
                    <div onClick={(toggleDrop)} className="w-6 text-sky-700 font-bold">
                    <ChevronDownIcon/>   
                    </div>   
        </span>

        <div className={`absolute overflow-hidden mt-2 rounded transition-transform duration-300 ease-in z-20 ${isOpen ? 'w-min h-min opacity-100 ':'opacity-0 '}`}>
            <div className="flex flex-col mt-2 space-y-2 ">
                {links.map((link)=> (
                    <Link key = {link.name}
                    href = {link.href}
                    passHref
                    className={"py-2 px-4 block hover:cursor-crosshair"}>
                      {link.name}
                    </Link>
                ))}
            </div>
   
        </div>
       
    </div>  
       
    )
}

