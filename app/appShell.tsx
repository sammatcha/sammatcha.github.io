'use client';

import { useState, useEffect } from "react";
import SideBar from "./components/SideBar";

export default function AppShell({children}: {children: React.ReactNode}) {
    const [ready, setReady] = useState(false);
    const [animationStarted, setAnimationStarted] = useState(false);
    
    const OnIntroDone = () => {
        setAnimationStarted(true);
    }

    // Fallback: ensure content shows even if animation doesn't complete
    useEffect(() => {
        const fallbackTimer = setTimeout(() => {
            if (!ready) {
                setReady(true);
            }
        }, 2800); // 1.8s animation + 1s buffer

        return () => clearTimeout(fallbackTimer);
    }, [ready]);

    // Start reveal transition after animation completes
    useEffect(() => {
        if (animationStarted) {
            const revealTimer = setTimeout(() => {
                setReady(true);
            }, 200); // Short delay for smooth transition
            
            return () => clearTimeout(revealTimer);
        }
    }, [animationStarted]);

    return(
        <>
            <main className="flex flex-col lg:flex-row">
                <span className={`flex text-4xl p-10 transition-opacity duration-500 ${ready ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'}`}>
                    <span>$</span>
                    <span 
                        className=" inline-block overflow-hidden whitespace-nowrap animate-typewriter"
                        onAnimationEnd={OnIntroDone}
                        >
                        whoami</span>
                        <span className="inline-block animate-blinkCursor ml-1">|</span>
                               
                </span>
                <aside className={`sticky top-0 w-full bg-darkGrayBlue lg:bg-slightGrayBlue lg:h-screen z-50 lg:w-72 transition-opacity duration-700 ease-out ${ready ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    {ready && <SideBar ready={ready} onIntroDone={OnIntroDone} />}
                </aside>
                <div className={`flex-1 transition-all duration-700 ease-out ${ready ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                     {children}
                </div>
                
     
            </main>
        </>
       
    )
}