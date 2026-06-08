'use client'
import React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function DownButton(){
    return(
        <div className="mt-8 md:mt-10 lg:mt-12 ">
            <div className="flex justify-center items-end ">
            <Link 
            href={"#about"} 
            className="rounded-full hover:cursor-crosshair inter-text border-2 hover:border-slightGrayBlue hover:border-6 max-w-fit px-3 py-2 hover:bg-white hover:text-black" style={{}}>
                <span className="inline-flex ">
                    <p>Down the rabbit hole</p>
                <ChevronDown className="w-6" />
                </span>
               
            </Link>
            </div>
        </div>
    )
}