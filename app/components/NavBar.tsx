import React, { useState } from "react";
import Socials from "./Socials";
import MobileNavBar from "./MobileNavBar";

type Item  = {
    id: number,
    name: string,
    href: string
};

const nav = [
    {id: 1, name:'Home', href: '/'},
    {id: 2, name:'About', href: '#about'},
    {id: 3, name:'Work', href: '#work'},
    {id: 4, name:'Blog', href: '#blog'},
];

export default function NavBar(){
   
    return(
       
       <nav className="max-w-full relative">
            <div className="flex justify-end xl:px-8">
            
            <MobileNavBar/>
                <div className={"hidden xl:inline-flex items-center"}>
                {nav.map((item) => (
                <a  key = {item.id}
                    href = {item.href}
                    className="xl:p-4"
                >
                {item.name}
                    </a>
                ))}
              
                <Socials/>
           
                </div>
            
            </div>
       </nav>
    )
}