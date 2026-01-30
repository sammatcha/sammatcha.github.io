// 'use client';
import Image from "next/image";
import React, { useState } from "react";
// import HoverMedia from "./HoverMedia";
import Link from "next/link";

export default function Gallery(){
    return(
        <div className="flex flex-col items-center justify-center mx-auto w-full">
            <div>
                <p className="text-2xl lg:text-4xl">Projects</p>
             </div>

            <div className="mt-5 container max-w-xl items-center justify-center grid grid-cols-1 grid-rows-1 gap-6">
                 <div>
                    {/* project 1 */}
                        <div className="w-full border border-transparent hover:bg-slate-600 hover:opacity-90 p-3">
                            <div className="flex">
                                <Image src={"/images/project/3-1.png"} alt={"stamp calculator"} width={200} height={200} className="pr-5" />
                                <div className="flex flex-col">
                                    <h3 className="text-gray-300 text-lg">Stamp Calculator</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">Postage calculator that returns both retail and metered pricing for letter envelopes-using the USPS API for metered pricing </p>
                                    <p className="text-neutral-300 mt-1 text-sm">NodeJS • React • API • Docker • Reliability Monitoring </p>

                                </div>
                            </div>
                            <Link href="https://sammatcha.github.io/stamp-calculator"></Link>
                        </div>
                    {/* project 2 */}
                        <div className="w-full border border-transparent hover:bg-slate-600 hover:opacity-90 p-3">
                            <div className="flex">
                                <Image src={"/images/project/5.png"} alt={"blog"} width={200} height={200} className="pr-5" />
                                <div className="flex flex-col">
                                    <h3 className="text-gray-300 text-lg">Content Platform</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">CMS-driven content platform tracking analytics on Vercel  </p>
                                    <p className="text-neutral-300 mt-1 text-sm">NextJS • React • PayloadCMS • Vercel </p>

                                </div>
                            </div>
                            <Link href="https://www.beyondfabled.me/blog/tcg-player-how-i-ship-cards"></Link>
                        </div>
                        
                    {/* project 3 */}
                        <div className="w-full border border-transparent hover:bg-slate-600 hover:opacity-90 p-3">
                            <div className="flex">
                                <Image src={"/images/project/2-1.png"} alt={"url shortener"} width={200} height={200} className="pr-5" />
                                <div className="flex flex-col">
                                    <h3 className="text-gray-300 text-lg">URL Shortener</h3>
                                    <p className="text-neutral-400 mt-1 text-sm">URL shortener with persistent database storage and server-side redirect handling</p>
                                    <p className="text-neutral-300 mt-1 text-sm">Go • React • PostgreSQL • Docker </p>

                                </div>
                            </div>
                            
                            <Link href="https://github.com/sammatcha/urlshortener"></Link>
                            
                        </div>
                    <div className="w-full border border-transparent hover:bg-slate-600 hover:opacity-90 p-3">
                            <Link href="https://application-tracker-bice.vercel.app/">
                                {/* <HoverMedia
                            ImageSrc={"/images/project/6.png"}
                            VideoSrc={"/images/project/job-app.mp4"}
                            altText={"wheel spinner"}
                            width={800}
                            height={800}
                            >
                            </HoverMedia> */}
                            </Link>
                            <h3 className="text-gray-300 text-center mt-3">Job Application</h3>
                            <p className="text-neutral-300 mt-1 text-center">TypeScript • React • Supabase </p>
                    </div>

                </div>
               

            </div>
                  
        </div>
       
    )
}