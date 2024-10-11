import Image from "next/image";

export default function HoverMedia({ImageSrc,VideoSrc, altText, width, height}) {
    return(
        <div className="relative overflow-hidden group w-[500px] h-[350px]">
                                <img
                                className="transition-opacity duration-300 group-hover:opacity-0 inset-0 w-full h-full z-20 object-contain rounded-md overflow-hidden" 
                                src={ImageSrc} 
                                alt={altText}
                                width={width}
                                height={height}
                               />
                              
                                <video 
                                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute inset-0  w-full h-full z-10 object-cover block"  
                                loop 
                                muted 
                                autoPlay 
                                playsInline 
                                preload="auto" 
                                controls
                               
                                >
                                <source src={VideoSrc}/>
                               </video>  
                            </div>
    );
}