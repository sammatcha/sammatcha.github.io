import React, {ReactNode} from "react";
import FadeIn from "../hook/FadeIn";

interface ParentComponentProps {
    children: ReactNode;
    durationClass: string;
    delayClass:string;
   
}

export default function Intro(){
    return(
        <div className="flex flex-col m-20 h-svh ">
        <p className="text-3xl dancing-text md:text-4xl lg:text-5xl">Hello</p>
        <FadeIn delayClass = "delay-500">
            <p className="mt-5 text-2xl roboto text md:text-4xl lg:text-5xl lg:mt-10">
               I am Sam
            </p>
        </FadeIn>
       
        </div>
    );
};