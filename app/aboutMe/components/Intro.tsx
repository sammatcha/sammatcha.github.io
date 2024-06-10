import React, {ReactNode} from "react";
import FadeIn from "../hook/FadeIn";
import FunFacts from "./FunFacts";

interface ParentComponentProps {
    children: ReactNode;
    durationClass: string;
    delayClass:string;
   
}

export default function Intro(){
    return(
        <div className="border-4 border-darkGreyBlue shadow-darkGreyBlue shadow-2xl bg-darkGreyBlue flex mx-auto max-w-fit mb-5">
            <div className="flex flex-col h-screen p-10 ">
            
                <div className="basis-1/2  ">
                    <p className="dancing-text text-4xl md:text-5xl lg:text-6xl">hello.</p>
                    <div>
                        <FadeIn delayClass = "delay-500">
                        <p className={"inter-text text-2xl md:text-3xl lg:text-4xl"}>
                        I&#39;m Sam
                        </p>
                        </FadeIn>
                        <span className="dancing-text inline-flex items-center text-xl md:text-2xl lg:text-4xl"> <p className=" roboto-text mr-2 mt-2  text-lg md:text-xl lg:text-2xl">Step into</p> my corner. 
                        </span>
                        
                    </div>
                </div>

                <div className="flex flex-col ">
                    <div className="flex justify-center items-center">
                        
                        <h1 className="underline roboto-text decoration-from-font font-thin text-xl md:text-2xl lg:text-3xl">Fun Facts</h1>
                       
                    </div>
                   
                    <ul>
                       
                        <FunFacts/>
                     
                     
                    </ul>
                    
                </div>
           
            </div>
        </div>
    );
};