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
        <div className="flex bg-gray-400 rounded-md">
            <Link href={href}
            onClick={handleClick} passHref
            className="border-2 rounded-md border-darkGreyBlue max-w-[10rem] px-2 py-2 text-slightGreyBlue hover:bg-slightGreyBlue hover:text-white hover:border-white"
            >
           Connect with Me
            </Link>
        </div>
    )
}