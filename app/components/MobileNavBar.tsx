'use client';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
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
        <div className="inline-flex lg:hidden overflow-hidden min-w-full absolute">
            <button className={"fixed top-3 right-3 z-50 "} onClick={toggleMobileMenu}
            >
                
                {!isMobileMenuOpen ? (
                <Bars3Icon
                 className={"p-3 w-14 "}/>
                ): (
                <XMarkIcon className={"w-12 p-3"}/>  
                    )}
            </button>
               
            <div className={`fixed inset-0 flex flex-col z-20 px-6 py-6 lg:bg-transparent lg:hidden w-full transition-transform duration-300 ease-in
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