import Image from "next/image";
import React from "react";


type Job = {
    id: number,
    date: string,
    name: string,
    body: string[],
    logo: string
}
const jobs: Job[] = [
    {
     id: 0 , 
     date: 'May 2024 - Current', 
     name: 'Independent | Freelance ', 
     body: [
        'Consulted on business process automation using Google Apps Script, streamlining order workflows',
        'Identified workflow bottlenecks and built a Google Apps Script to consolidate card intake data, improving visibility for e-commerce listing decisions',
        'Built and operated an e-commerce trading card business, owning inventory management and order fulfillment',
    ],
    logo : '/images/logos/self-employed.png',
    },
    {
     id: 1 , 
     date: 'December 2022 - March 2024', 
     name: 'Up Point | Software Developer', 
     body: [
        'Developed and debugged 4+ responsive web applications from Adobe XD mockups using Laravel, React and CSS',
        'Automated server deployment using Proxmox API, reducing manual setup time by 50%',
        'Integrated Stripe and Block Cypher RESTful APIs for payment processing',
        'Created technical and non-technical documentation for team processes and project workflows',
        'Designed and implemented database schemas for a Laravel and React-based web application'
    ],
    logo : '/images/logos/uppoint-logo.png',
    },
    {
        id: 1 , 
        date: 'June 2022 - August 2022', 
        name: 'PennyMac | Data Analyst Intern', 
        body: [
            'Built and presented 10+ interactive Tableau dashboards to senior leadership, providing insight into operational metrics',
            'Entered and validated invoice data to support team budget forecasting',
            'Joined datasets using SQL queries via AWS Athena and validated results using Excel (VLOOKUP) to ensure data accuracy'
        ],
        logo: '/images/logos/penny-logo.png'
    },
];
export default function Timeline(){
    return(
        <div className="relative p-4 flex flex-col justify-center items-center max-w-5xl mx-auto" >
            <div className="absolute h-full "> </div>
            {jobs.map((job, index) => {
               const isLeft = index % 2 === 0;
               return(
                    <div key = {job.id} className={`flex mb-8 relative  `}>
                            <div className={`flex ${isLeft ? "flex-row-reverse pl-56" : "flex-row pr-56"}`}>
                                <div className={`flex w-1/2 ${isLeft ? "lg:text-left" : "lg:text-right"}`}>
                                    <div className={`roboto-text order-last lg:order-none`}>
                                        <p className="text-md lg:text-xl text-gray-400 underline decoration-1 ">{job.date}</p>
                                        <p className="text-md lg:text-lg font-bold">{job.name}</p>
                                        <ul className="list-disc text-neutral-300">
                                            {job.body.map((duty,idx) => (
                                            <li key={idx} className="font-thin list-inside ">
                                                {duty}
                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                       
                                    {/* LOGO DIV */}
                      
                            <div className=" absolute top-0 left-1/2 transform -translate-x-1/2 size-20 rounded-full md:size-24 border-2 flex lg:size-40 lg:mx-0 lg:p-1  ">
                                <Image src={job.logo} alt={"logo images of employment"} width={200} height={200} className="rounded-full bg-slightGreyBlue"/>
                            </div>
                    </div>
                )})

            }
           
        </div>
      
    )
}


                            
                        {/* order-first lg:order-none */}
