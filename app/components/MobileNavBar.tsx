'use client';
import { X , MenuIcon } from "lucide-react";
import React, { useState } from "react";
import Socials from "./Socials";

type Item  = {
    id: number,
    name: string,
    href: string
};

const nav = [
    {id: 1, name:'Home', href: '/'},
    {id: 2, name:'About', href: '#about'},
    {id: 3, name:'Work', href: '#work'},
];

export default function MobileNavBar(){
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return(
        <div className="block lg:hidden min-w-full">
            <button className={"lg:hidden top-0 z-50 "} onClick={toggleMobileMenu}
            >
                {!isMobileMenuOpen ? (
                <MenuIcon
                 className={"p-3 w-14"}/>
                ): (
                <X className={"w-12 p-3"}/>  
                    )}
            </button>
               
            <div className={`sticky inset-0 flex flex-col px-6 py-6 lg:bg-transparent lg:hidden w-full 
                ${isMobileMenuOpen? "block border border-neutral-500 bg-darkGreyBlue  h-screen" : " hidden"}`}>
                {nav.map((item) => (
                <a  key = {item.id}
                    href = {item.href}
                    className="p-3 "
                >
                {item.name}
                    </a>
                ))}
              
                <Socials/>
           
            </div>
            
            
        </div>    
    )
}