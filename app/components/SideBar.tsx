import React, { useEffect, useState } from "react";
import Socials from "./Socials";
import MobileNavBar from "./MobileNavBar";
import { X , MenuIcon} from "lucide-react";

type Item  = {
    id: number,
    name: string,
    href: string
};
type SideBarProps = {
    ready: Boolean,
    onIntroDone: () => void
};

const nav = [
    {id: 1, name:' Home', href: '/'},
    {id: 2, name:' About', href: '#about'},
    {id: 3, name:' Work', href: '#work'},
];

export default function SideBar({ready, onIntroDone}: SideBarProps) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        document.body.style.overflow = open ? ' hidden' : '';
        return() => {
            document.body.style.overflow = '';
        }
    } , [open])
    return(
       <nav className="shadow-lg shadow-cyan-500/50 border-shadow-lg backdrop-blur-sm ">
            <div className={`lg:flex-col flex ${!open? "justify-between":"justify-end"} p-10 `}>
                <div className={`text-4xl ${open? "hidden":"block"} lg:block`}>
                    <span>$</span>
                    <span className="ml-1 overflow-hidden whitespace-nowrap ">
                    whoami</span>
                    <span className="inline-block animate-blinkCursor ">|</span>     
                </div> 
                <button
                    className="lg:hidden z-[60]"
                    onClick={toggleOpen}
                    >
                    {!open ? ( <MenuIcon className={"size-10 "}/>) : (<X className={"size-10 "}/>)}
                </button>
            </div>
                {/* mobile nav */}
                {open && (
                <>
                <div className="flex flex-col h-screen items-center lg:hidden ">
                      <div className="flex flex-col items-center flex-1 gap-6 lg:hidden">
                   {nav.map((item) => (
                    <a 
                    key = {item.id}
                    href = {item.href}
                    className="gap-3 items-center flex hover:text-cyan-300 "
                    >
                        <span className="text-lg ">{">"}</span>
                        <span className="text-2xl "> {item.name}</span>
               
                    </a>
                    ))}
                    <div className="bg-white/20 my-4 w-32 h-px" />
                    <div className="justify-end">
                        <Socials/>
                    </div>
                        
                    </div>
                </div>
                   


                </>
            )}         
                {/* desktop nav */}
                <div className={"space-y-2 items-center hidden lg:flex lg:flex-col lg:h-screen justify-around"}>
                    <div className="space-y-3">
                        {nav.map((item) => (
                            <a 
                            key = {item.id}
                            href = {item.href}
                            className="gap-3 flex items-center hover:text-cyan-300 "
                            >
                            <span className="text-lg ">{">"}</span>
                            <span className="text-2xl "> {item.name}</span>
               
                            </a>
                            ))}
                    </div>
                    <div className="mt-auto ">
                            <Socials/>
                    </div>     
                
           
                </div>
            
       </nav>
    )
}