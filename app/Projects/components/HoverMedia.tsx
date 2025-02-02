import Image from "next/image";

interface HoverMediaProps{
    ImageSrc: string;
    VideoSrc?: string;
    altText:string;
    width:number;
    height:number;
}
export default function HoverMedia({ImageSrc,VideoSrc, altText, width, height}: HoverMediaProps) {
    return(
        <div className="relative overflow-hidden group w-[200px] h-[150px] lg:w-[600px] lg:h-[450px]">
                                <img
                                className="transition-opacity duration-300 group-hover:opacity-0 inset-0 w-full h-full z-20 object-contain rounded-md overflow-hidden" 
                                src={ImageSrc} 
                                alt={altText}
                                width={width}
                                height={height}
                               />
                              
                                <video 
                                className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 absolute inset-0 w-full h-full z-10 object-cover block"  
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