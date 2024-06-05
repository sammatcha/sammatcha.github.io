'use client';
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

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

    <div>
        <span className="inline-flex">
                <p>Socials</p>
                    <div onClick={(toggleDrop)} className="w-6 text-sky-700 font-bold">
                    <ChevronDownIcon/>   
                    </div>   
        </span>

        <div className={`absolute overflow-hidden border border-slate-500 mt-1 rounded transition-all duration-75 ${isOpen ? 'w-min h-min opacity-100':'opacity-0'}`}>

        
     
        <div className="flex flex-col  ">
            {links.map((link)=> (
                <a key = {link.name}
                href = {link.href}
                className="py-2 px-4"
                >
                    {link.name}
                </a>
            ))}
        </div>
   
        </div>
       
    </div>
       
    )
}

