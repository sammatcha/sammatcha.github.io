import React from "react";
import Socials from "./Socials";

const Item  = {
    id: Number,
    name: String,
    href: String
};

const nav = [
    {id: 1, name:'Home', href: '/'},
    {id: 2, name:'About', href: '#about'},
    {id: 3, name:'Work', href: '#work'},
];

export default function NavBar(){
    return(
       <nav className="max-w-full top-0 overflow-hidden ">
            <div className="flex justify-end p-6 lg:px-8">
            
                <div className="inline-flex items-center">
                {nav.map((item) => (
                <a  key = {item.id}
                    href = {item.href}
                    className="p-4"
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