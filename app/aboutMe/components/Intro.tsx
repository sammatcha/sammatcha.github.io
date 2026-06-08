import React, {ReactNode} from "react";
// import FadeIn from "../hook/FadeIn";
import FunFacts from "./FunFacts";

export default function Intro(){
    return(
        <div className="w-full ml-2 md:ml-4 lg:ml-8 max-w-2xl ">
            <div className="flex flex-col justify-center h-auto  ">
                <div className="text-sm roboto_mono-text lg:leading-relaxed lg:tracking-wide xl:text-lg">
                    <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold flex justify-center lg:justify-normal">About</h1>
                        <div className="text-slate-300 inline-block mt-4 md:mt-5 lg:mt-6 ">
                            <p>With over a year of professional experience, I have worked extensively with Laravel and React. </p>
                            <p className="mt-1">
                        Currently, I am expanding my skills through personal projects.
                        I am continually learning and looking forward to applying my skills and experience to meaningful work. 
                            </p>
                            <p className={" mt-1"}>
                        I like reading, gaming, traveling, animals, and anime
                            </p>
                        </div>
                        
                </div>
            </div>
           
           <div className=" mt-8 md:mt-9 lg:mt-10">
                  <p className="text-lg font-bold roboto-text text-sky-500 flex roboto-mono-text mb-5"> 3 Truths & 1 Lie</p> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 ">
                    <FunFacts/>
                </div>
            </div>
                                
        </div>
    );
};
