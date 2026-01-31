import React from "react";
import Gallery from "./components/Gallery";

export default function Projects(){
    return(
        <div className={"min-w-full bg-darkGreyBlue shadow-lg mt-10 lg:mt-20 "}>
            <div id={"projects"}>
                    <div>
                        <Gallery/>
                    </div>
            </div>
        </div>
    )
}