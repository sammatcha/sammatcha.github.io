// 'use client';
import Image from "next/image";
import React, { useState } from "react";
// import HoverMedia from "./HoverMedia";
import Link from "next/link";
import { SquareArrowOutDownRight, SquareArrowUpRightIcon } from "lucide-react";

export default function Gallery(){
    return(
        <div className="flex flex-col items-center justify-center mx-auto w-full">
            <div>
                <p className="text-2xl lg:text-4xl">Projects</p>
             </div>

            <div className="mt-5 container max-w-xl lg:max-w-2xl items-center justify-center grid grid-cols-1 grid-rows-1 gap-6">
                 <div>
                    {/* project 1 */}
                        <div className="relative w-full border border-transparent hover:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.5),_transparent_70%)] hover:scale-105 transition-transform duration-300 p-5 lg:p-0 lg:py-10 lg:px-5">
                            <div className="flex lg:flex-row flex-col relative lg:gap-3">
                                <Image src={"/images/project/3-1.png"} alt={"stamp calculator"} width={200} height={200} className="p-3 lg:p-0 w-full lg:w-1/3 rounded-xl " />
                                <div className="flex flex-col w-full px-4 lg:px-0">
                                    <h3 className="mt-3 text-gray-300 text-lg text-center lg:text-start lg:mt-0">Stamp Calculator</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">Postage calculator that returns both retail and metered pricing for letter envelopes-using the USPS API for metered pricing </p>
                                    <p className="text-neutral-300 mt-2 text-sm">NodeJS • React • API • Docker • Reliability Monitoring </p>
                                        <div className="inline-flex items-center justify-end cursor-pointer  ">
                                             <Link href="https://sammatcha.github.io/stamp-calculator">
                                                <Image className="hover:scale-105 transition-transform duration-300"  src={'/images/project/github1.png'} alt={"github icon"} width={40} height={40}/>
                                             </Link>
                                             <Link href="https://github.com/sammatcha/sammatcha.github.io" className="hover:scale-105 transition-transform duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>                                              
                                             </Link>
                                        </div>
                                </div>
                            </div>
                        
                        </div>
                    {/* project 2 */}
                        <div className="w-full border border-transparent hover:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.5),_transparent_70%)] hover:scale-105 p-5 lg:p-0 lg:py-10 lg:px-5 ">
                            <div className="flex lg:flex-row flex-col relative lg:gap-3">
                                <Image src={"/images/project/5.png"} alt={"blog"} width={200} height={200} className="p-3 lg:p-0 w-full lg:w-1/3 rounded-xl" />
                                <div className="flex flex-col w-full lg:px-0 px-4">
                                    <h3 className="mt-3 text-gray-300 text-lg text-center lg:text-start lg:mt-0">Content Platform</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">CMS-driven content platform tracking analytics on Vercel  </p>
                                    <p className="text-neutral-300 mt-2 text-sm">NextJS • React • PayloadCMS • Vercel </p>
                                        <div className="inline-flex items-center justify-end cursor-pointer  ">
                                             <Link href="https://www.beyondfabled.me/blog/tcg-player-how-i-ship-cards">
                                                <Image className="hover:scale-105 transition-transform duration-300"  src={'/images/project/github1.png'} alt={"github icon"} width={40} height={40}/>
                                             </Link>
                                             <Link href="https://github.com/sammatcha" className="hover:scale-105 transition-transform duration-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>                                              
                                             </Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                        
                    {/* project 3 */}
                        <div className="w-full border border-transparent hover:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.5),_transparent_70%)] hover:scale-105 p-5 lg:p-0 lg:py-10 lg:px-5 ">
                            <div className="flex lg:flex-row flex-col relative lg:gap-3">
                                <Image src={"/images/project/2-1.png"} alt={"url shortener"} width={200} height={200} className="p-3 lg:p-0 w-full lg:w-1/3 rounded-xl" />
                                <div className="flex flex-col w-full lg:px-0 px-4">
                                    <h3 className="mt-3 text-gray-300 text-lg text-center lg:text-start lg:mt-0">URL Shortener</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">URL shortener with persistent database storage and server-side redirect handling</p>
                                    <p className="text-neutral-300 mt-2 text-sm">Go • React • PostgreSQL • Docker </p>
                                        <div className="inline-flex items-center justify-end cursor-pointer  ">
                                              <Link href="https://github.com/sammatcha/urlshortener">
                                                <Image className="hover:scale-105 transition-transform duration-300" src={'/images/project/github1.png'} alt={"github icon"} width={40} height={40}/>
                                             </Link>
                                             <div className="hover:scale-105 transition-transform duration-300 hover:text-slate-800 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>                                              
                                             </div>
                                        </div>
                                </div>
                            </div>  
                        </div>
                    <div className="w-full border border-transparent hover:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.5),_transparent_70%)] hover:scale-105 p-5 lg:p-0 lg:py-10 lg:px-5  ">
                        <div className="flex lg:flex-row flex-col relative lg:gap-3">
                                <Image src={"/images/project/6.png"} alt={"url shortener"} width={200} height={200} className="p-3 lg:p-0 w-full lg:w-1/3 rounded-xl" />
                                <div className="flex flex-col w-full lg:px-0 px-4">
                                    <h3 className="mt-3 text-gray-300 text-lg text-center lg:text-start lg:mt-0">Job Application</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">Job application tracking with Supbase authentication</p>
                                    <p className="text-neutral-300 mt-2 text-sm ">TypeScript • React • Supabase </p>
                                        <div className="inline-flex items-center justify-end cursor-pointer ">
                                            <Link href="https://application-tracker-bice.vercel.app/">
                                                <Image className="hover:scale-105 transition-transform duration-300"  src={'/images/project/github1.png'} alt={"github icon"} width={40} height={40}/>
                                             </Link>
                                             <Link href="https://github.com/sammatcha/job-app-tracker"className="hover:scale-105 transition-transform duration-300  ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>                                              
                                             </Link>
                                        </div>
                                </div>
                            </div>
                    </div>

                </div>
               

            </div>
                  
        </div>
       
    )
}