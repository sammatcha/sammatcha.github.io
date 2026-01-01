// 'use client';
import Image from "next/image";
import React, { useState } from "react";
import HoverMedia from "./HoverMedia";
import Link from "next/link";


export default function Gallery(){
    
    return(
        <div className="flex flex-col items-center justify-center mx-auto">
            <div>
                <p className="text-2xl lg:text-4xl w-full">Projects</p>
             </div>
            <div className="flex flex-col mt-5 container max-w-7xl items-center justify-center">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 
                                 gap-6 ">
                    
                        <div className="w-full">
                            <Link href="https://github.com/sammatcha/DND-Task-Manager">
                            <HoverMedia 
                            ImageSrc={"/images/project/2.png"}
                            VideoSrc={"/images/project/to-do-list-react.mp4"}
                            altText={"drag and drop task manager"}
                            width={700}
                            height={700}
                            >
                            </HoverMedia>
                            </Link>
                            <h3 className="text-gray-300 text-center ">Drag and Drop Task Manager</h3>
                            <p className="text-neutral-300 mt-1 text-center">React • TypeScript • Vite </p>
                          
                            
                        </div>
                        <div className="w-full">
                            <Link href="https://github.com/sammatcha/urlshortener">
                                <HoverMedia
                                ImageSrc={"/images/project/1.png"}
                                VideoSrc={"/images/project/url-shortener.mp4"}
                                altText={"drag and drop task manager"}
                                width={700}
                                height={700}
                                >
                                </HoverMedia>
                            </Link>
                            <h3 className="text-gray-300 text-center">URL Shortener</h3>
                            <p className="text-neutral-300 mt-1 text-center">Go • React • PostgreSQL </p>
                          
                            
                    </div>

                     <div className="w-full">
                        <Link href="https://sammatcha.github.io/stamp-calculator">
                            <HoverMedia
                            ImageSrc={"/images/project/3-1.png"}
                            VideoSrc={"/images/project/3-1.mp4"}
                            altText={"stamp calculator"}
                            width={800}
                            height={800}
                            >
                            </HoverMedia>
                        </Link>
                        <h3 className="text-gray-300 text-center mt-3">Stamp Calculator</h3>
                        <p className="text-neutral-300 mt-1 text-center">NodeJS • React • API • Docker </p>
                            
                    </div>

                    <div className="w-full">
                        <Link href="https://sammatcha.github.io/wheel-spinner">
                            <HoverMedia
                            ImageSrc={"/images/project/4-1.png"}
                            VideoSrc={"/images/project/wheel-spinner.mp4"}
                            altText={"wheel spinner"}
                            width={700}
                            height={700}
                            >
                            </HoverMedia>
                        </Link>
                        <h3 className="text-gray-300 text-center mt-3">Wheel Spinner</h3>
                        <p className="text-neutral-300 mt-1 text-center">TypeScript • React  </p>
                    </div>
                        
                            

                    <div className="w-full ">
                            <Link href="https://www.beyondfabled.me/blog/tcg-player-how-i-ship-cards">
                                <HoverMedia
                            ImageSrc={"/images/project/5.png"}
                            VideoSrc={"/images/project/content-platform.mp4"}
                            altText={"wheel spinner"}
                            width={800}
                            height={800}
                            >
                            </HoverMedia>
                            </Link>
                            <h3 className="text-gray-300 text-center mt-3">Content Platform</h3>
                            <p className="text-neutral-300 mt-1 text-center">NextJS • React • PayloadCMS • Vercel </p>

                    </div>
                    <div className="w-full ">
                            <Link href="https://application-tracker-bice.vercel.app/">
                                <HoverMedia
                            ImageSrc={"/images/project/6.png"}
                            VideoSrc={"/images/project/job-app.mp4"}
                            altText={"wheel spinner"}
                            width={800}
                            height={800}
                            >
                            </HoverMedia>
                            </Link>
                            <h3 className="text-gray-300 text-center mt-3">Job Application</h3>
                            <p className="text-neutral-300 mt-1 text-center">TypeScript • React • Supabase </p>
                    </div>

                </div>
               

            </div>
                  
        </div>
       
    )
}