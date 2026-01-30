import React, {ReactNode} from "react";
// import FadeIn from "../hook/FadeIn";
import FunFacts from "./FunFacts";

interface ParentComponentProps {
    children: ReactNode;
    durationClass: string;
    delayClass:string;
   
}

export default function Intro(){
    return(
        <div className="container w-full md:m-10 justify-between">
            <div className="flex flex-col justify-center h-auto lg:max-w-md lg:w-1/2 ">
                <div className="text-sm roboto_mono-text lg:leading-relaxed lg:tracking-wide xl:text-lg">
                    <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold flex justify-center lg:justify-normal">About</h1>
                        <p className="text-neutral-400 text-lg mt-3 xl:mt-6">
                        With over a year of professional experience, I have worked extensively with Laravel and React. <br/>
                        <span className="inline-block mt-1">
                        Currently, I am expanding my skills through personal projects. <br/>
                        I am continually learning and looking forward to applying my skills and experience to meaningful work. 
                        </span>
                        <span className={"inline-block mt-1"}>
                        I like reading, gaming, traveling, animals, and anime
                        </span>
                        </p>
                </div>
            </div>
           
           <div className="max-w-xl my-10">
                  <p className="text-lg font-bold roboto-text text-sky-500 flex roboto-mono-text mb-5"> 3 Truths & 1 Lie</p> 
                
                <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-4 lg:gap-6 ">
                    <FunFacts/>
                </div>
            </div>
                                
          
           
         
        </div>
    );
};
