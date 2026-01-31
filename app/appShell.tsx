'use client';

import { useState } from "react";
import SideBar from "./components/SideBar";

export default function AppShell({children}: {children: React.ReactNode}) {
    const [ready, setReady] = useState(false);
    const OnIntroDone = () => {
        setTimeout(() => {
            setReady(true)}, 800);
    }
    return(
        <>
            <main className="flex flex-col lg:flex-row">
                {!ready && (
                        <span className="flex text-4xl ">
                            <span>$</span>
                            <span 
                                className="ml-1 inline-block overflow-hidden whitespace-nowrap animate-typewriter"
                                onAnimationEnd={OnIntroDone}
                                >
                                whoami</span>
                                <span className="inline-block animate-blinkCursor ml-[0px]">|</span>
                                       
                        </span>
                )}
                {ready && (
                    <aside className={`sticky top-0 w-full bg-darkGrayBlue lg:bg-slightGrayBlue lg:h-screen z-50 lg:w-72`}>
                        <SideBar ready={ready} onIntroDone={OnIntroDone} />
                    </aside>
                )}
                <div className={[ready? "flex-1":"hidden"].join(' ')}>
                     {children}
                </div>
                
     
            </main>
        </>
       
    )
}