import React, { useEffect, useState } from "react";
import Socials from "./Socials";
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
    {id: 1, name:'Home', href: '#home'},
    {id: 2, name:'About', href: '#about'},
    {id: 3, name:'Work', href: '#work'},
    {id: 4, name: 'Certifications', href:'#certs'},
    {id: 5, name: 'Projects', href:'#projects'}
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
       <nav className="shadow-lg shadow-cyan-500/50 border-shadow-lg backdrop-blur-sm text-white lg:flex lg:flex-col lg:h-full
            shrink-0">  
            <div className={`lg:flex-col flex px-5 py-4 lg:px-8 lg:pt-8 lg:pb-4  ${!open? "justify-between":"justify-end"}  `}>
                <div className={`text-4xl ${open? "hidden":"block"} lg:block`}>
                    <span>$</span>
                    <span className="ml-1 overflow-hidden whitespace-nowrap ">
                    whoami</span>
                    <span className="inline-block animate-blinkCursor">|</span>     
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
                <div className="flex flex-col h-screen justify-center items-center w-full lg:hidden ">
                      <div className="flex flex-col flex-1 gap-6 px-5 lg:hidden">
                   {nav.map((item) => (
                    <a 
                    key = {item.id}
                    href = {item.href}
                    className="gap-3 items-center flex text-white hover:text-cyan-300 "
                    >
                        <span className="text-lg justify-start">{">"}</span>
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
                <div className={`hidden lg:flex flex-1 flex-col min-h-0`}>

                
                        <div className="flex flex-1 flex-col justify-center px-8 space-y-3 ">
                        {nav.map((item) => ( 
                            <a 
                            key = {item.id}
                            href = {item.href}
                            className="gap-3 flex items-center text-white hover:text-cyan-300 "
                            >
                            <span className="text-lg ">{">"}</span>
                            <span className="text-2xl "> {item.name}</span>
               
                            </a>
                            ))}
                        </div>
                            <div className="shrink-0 pb-8 px-8">
                                <Socials/>
                            </div>
          
                </div>
  </nav>
    )
}