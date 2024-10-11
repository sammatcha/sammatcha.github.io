// 'use client';
import Image from "next/image";
import React, { useState } from "react";
import HoverMedia from "./HoverMedia";


export default function Gallery(){
    
    return(
        <div className="flex flex-col items-center justify-center">
            <div>
                <p className="text-2xl lg:text-4xl">Projects</p>
             </div>
             <div className="flex justify-center mt-10 lg:mt-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-1 auto-rows-fr ">

                    <div className="w-full ">
                            <HoverMedia 
                            ImageSrc={"/images/project/2.png"}
                            VideoSrc={"/images/project/to-do-list-react.mp4"}
                            altText={"drag and drop task manager"}
                            width={300}
                            height={500}
                            
                         
                            
                            >
                            </HoverMedia>
                    </div>
                    <div className="w-full ">
                            <HoverMedia
                            ImageSrc={"/images/project/1.png"}
                            VideoSrc={"/images/project/url-shortener.mp4"}
                            altText={"drag and drop task manager"}
                            width={300}
                            height={500}
                            >
                            </HoverMedia>
                    </div>
                </div>
                  
                </div>
        </div>
    )
}