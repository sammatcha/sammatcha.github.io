'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

interface ConnectProps {
    href: string;
}

export default function Connect({href}: ConnectProps){
    const router = useRouter()
    const handleClick = () =>{
        router.push(href)
    }
    return(
        <div className="flex">
            <Link 
            href={href}
            onClick={handleClick} passHref
            className="mb-8 lg:mg-0 hover:cursor-crosshair inter-text border-2 rounded-full hover:bg-white text-white hover:text-black max-w-fit px-3 py-2 hover:shadow-lg hover:scale-105 transition-all duration-300">
                Connect with Me
            </Link>
        </div>
    )
}