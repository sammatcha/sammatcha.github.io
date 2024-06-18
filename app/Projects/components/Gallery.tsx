import React from "react";

export default function Gallery(){
    return(
        <div className="p-4">
             <p className="flex items-center justify-center mt-5 text-3xl ">Projects</p>
             <div className="p-10">
            <div className="border-4 border-slightGreyBlue shadow-slightGreyBlue shadow-2xl bg-slightGreyBlue flex mx-auto max-w-fit p-5 ">
                <div className="flex flex-col ">
           
                    <div>
                       
                        <p className="mb-3">I'm currently working on new and <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-200 text-transparent bg-clip-text">exciting</span> projects</p> 
                       
                            <p className="text-center" >Visit my <a className="border rounded-lg px-1 py-1 hover:cursor-crosshair " href="https://github.com/sammatcha">Github</a> to check it out c:</p>
                            
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}