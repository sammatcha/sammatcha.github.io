import React from "react";
import Image from "next/image";

export default function Certification(){
    return(
        <div className="w-full h-full lg:max-h-fit bg-slightGreyBlue px-10 py-10">
                <div className="flex flex-col ">
                    <div className="flex items-center justify-center text-2xl lg:text-4xl mb-5">Certifications</div>
                        <div>
                        {/* <div className="grid grid-cols-1 divide-y space-y-4 mb-4 lg:mb-0 lg:divide-y-0 lg:grid-cols-2 p-3 lg:p-10 lg:divide-x-2 divide-gray-500 "> */}
                            {/* <div className="flex flex-col items-center space-y-4 ">
                                <p className="font-bold inter-text text-2xl underline decoration-1 underline-offset-4">AWS</p>
                                <Image src={'/images/logos/aws-certified-cloud-practitioner.png'} alt={"aws cpp logo"} width={100} height={100} />
                                <p className="text-base lg:text-lg font-thin">Cloud Practitioner - Foundational</p>
                            </div> */}
                            <div className="flex flex-col items-center space-y-4 ">
                                <p className="font-bold inter-text text-2xl underline decoration-1 underline-offset-4 mt-3 lg:mt-0">Microsoft</p>
                                <Image className=" w-1/4 xl:w-32 2xl:w-40 " src={'/images/logos/microsoft-certified-azure-fundamentals.png'} alt={"microsoft azure logo"} width={100} height={100} />
                                <p className="text-lg font-thin ">Azure Fundamentals</p>
                            {/* </div> */}
                        </div>
                    </div>
                 </div>
        </div>
    )
}
