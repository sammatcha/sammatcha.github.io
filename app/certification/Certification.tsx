import React from "react";
import Image from "next/image";

export default function Certification() {
    return (
        <div className="w-full bg-slightGrayBlue relative">
            <div className={"flex flex-col w-full mx-auto py-14 px-5 md:py-20 md:px-8 lg:py-24 lg:px-10 md:flex-col scroll-mt-20 lg:scroll-mt-0"} id="certs">
                <h1 className="text-2xl mb-5 md:mb-10 lg:text-4xl text-center ">Certifications</h1>
               
                    {/* <div className="grid grid-cols-1 divide-y space-y-4 mb-4 lg:mb-0 lg:divide-y-0 lg:grid-cols-2 p-3 lg:p-10 lg:divide-x-2 divide-gray-500 "> */}
                    {/* <div className="flex flex-col items-center space-y-4 ">
                                <p className="font-bold inter-text text-2xl underline decoration-1 underline-offset-4">AWS</p>
                                <Image src={'/images/logos/aws-certified-cloud-practitioner.png'} alt={"aws cpp logo"} width={100} height={100} />
                                <p className="text-base lg:text-lg font-thin">Cloud Practitioner - Foundational</p>
                            </div> */}
                    <div className="flex flex-col items-center space-y-4 md:space-y-6 mt-4 md:mt-5 lg:mt-6 text-center rounded-xl border border-white/10 bg-darkGrayBlue/50 p-6 md:p-8 max-w-sm mx-auto">
                        <p className="font-bold inter-text text-xl  ">Microsoft</p>
                        <Image className="w-32 md:w-40 lg:w-48  " src={'/images/logos/microsoft-certified-azure-fundamentals.png'} alt={"microsoft azure logo"} width={100} height={100} />
                        <p className="text-lg text-neutral-300 ">Azure Fundamentals</p>
                        {/* </div> */}
                    </div>
                </div>
        </div>
    )
}
