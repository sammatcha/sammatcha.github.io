'use client'
import React from "react"
import { ArrowDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function DownButton(){
    return(
        <div className="mt-10 xl:mt-10">
            <div className="flex justify-center items-end ">
            <Link href={"#about"} className=" rounded-full hover:cursor-crosshair font-bold inter-text border-2 border-slightlyGreyBlue  max-w-fit px-2 py-2  hover:bg-white hover:text-black" style={{}}>
                <span className="inline-flex ">
                    <p>Down the rabbit hole</p>
                <ArrowDownIcon className="w-6" />
                </span>
               
            </Link>
            </div>
        </div>
    )
}