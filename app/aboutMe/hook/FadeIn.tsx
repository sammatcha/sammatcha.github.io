'use client'
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: ReactNode;
    delayClass : string;
    // durationClass : string;

}

export default function FadeIn({children, delayClass}: FadeInProps){
    
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
    
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => 
                setIsVisible(entry.isIntersecting));

                  });
        if (ref.current) {
            observer.observe(ref.current);
        }
        return() => {
            if (ref.current){
                observer.unobserve(ref.current);

            }
        };
            }, []);
        
     
    return(
        <div ref={ref}
        className={`transform-opacity duration-500  ${delayClass}  ease-in-out ${isVisible ? "opacity-100 " : "opacity-0"}`}>
            {children}
        </div>
    )
}
