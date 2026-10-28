'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const links = [
    {name: "[linkedin]",  href:"https://www.linkedin.com/in/samanthakang079"},
    {name: "[github]", href:"https://github.com/sammatcha"},
    {name: "[docs]", href:"https://sammatcha.github.io/dev-notes"},
    {name: "[changelog]", href:"https://still-up-cyan.vercel.app/"}

]

export default function Socials(){
    return (
   <div className="relative ">
            <div className="space-y-1 ">
                {links.map((link)=> (
                    <Link 
                    key = {link.name}
                    href = {link.href}
                    passHref
                    className={"block hover:cursor-crosshair hover:text-cyan-300 size-10"}>
                      {link.name}
                    </Link>
                ))}
            </div>
    </div>  
       
    )
}

