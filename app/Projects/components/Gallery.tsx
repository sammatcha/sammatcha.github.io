// 'use client';
import Image from "next/image";
import React, { useState } from "react";
import HoverMedia from "./HoverMedia";


export default function Gallery(){
    
    return(
        <div className="flex flex-col items-center justify-center mx-auto">
            <div>
                <p className="text-2xl lg:text-4xl w-full">Projects</p>
             </div>
            <div className="flex flex-col mt-5 container max-w-7xl items-center justify-center">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 
                                 w-full h-full  ">
                    
                        <div className="w-full h-full">
                            <HoverMedia 
                            ImageSrc={"/images/project/2.png"}
                            VideoSrc={"/images/project/to-do-list-react.mp4"}
                            altText={"drag and drop task manager"}
                            width={700}
                            height={700}
                            >
                            </HoverMedia>
                        </div>
                        <div >
                            <HoverMedia
                            ImageSrc={"/images/project/1.png"}
                            VideoSrc={"/images/project/url-shortener.mp4"}
                            altText={"drag and drop task manager"}
                            width={700}
                            height={700}
                            >
                            </HoverMedia>
                    </div>

                     <div >
                            <HoverMedia
                            ImageSrc={"/images/project/3.png"}
                            VideoSrc={"/images/project/stamp-calculator.mp4"}
                            altText={"stamp calculator"}
                            width={800}
                            height={800}
                            >
                            </HoverMedia>
                    </div>

                </div>
               

            </div>
                  
        </div>
       
    )
}