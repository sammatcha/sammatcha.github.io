'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const links = [
    {icon: "[in]",  href:"https://www.linkedin.com/in/samanthakang079/"},
    {icon: "[gh]", href:"https://github.com/sammatcha"},
]

export default function Socials(){
    return (
   <div className="relative mt-2 flex items-center justify-center ">
            <div className="space-y-2">
                {links.map((link)=> (
                    <Link 
                    key = {link.icon}
                    href = {link.href}
                    passHref
                    className={"block hover:cursor-crosshair hover:text-cyan-300 size-10"}>
                      {link.icon}
                    </Link>
                ))}
            </div>
    </div>  
       
    )
}

