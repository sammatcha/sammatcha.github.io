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
    logo : '/images/logos/self-employed.webp',
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
    logo : '/images/logos/uppoint-logo.webp',
    },
    {
        id: 2 , 
        date: 'June 2022 - August 2022', 
        name: 'PennyMac | Data Analyst Intern', 
        body: [
            'Built and presented 10+ interactive Tableau dashboards to senior leadership, providing insight into operational metrics',
            'Entered and validated invoice data to support team budget forecasting',
            'Joined datasets using SQL queries via AWS Athena and validated results using Excel (VLOOKUP) to ensure data accuracy'
        ],
        logo: '/images/logos/penny-logo.webp'
    },
];
function JobLogo({ logo }: { logo: string }) {
    return (
        <div className="overflow-hidden shrink-0 rounded-full border size-16 md:size-24 lg:size-32 lg:p-1">
            <Image
                src={logo}
                alt="Company logo"
                width={300}
                height={300}
                className="rounded-full bg-slightGrayBlue"
            />
        </div>
    );
}
function JobText({
    job,
    align = "left",
}: {
    job: Job;
    align?: "left" | "right";
}) {
    return (
        <div className={`roboto-text max-w-md ${
  align === "right" ? "lg:ml-auto lg:text-right" : "lg:text-left"}`}>
            <p className="text-md lg:text-xl text-sky-400/80 underline underline-offset-4">
                {job.date}
            </p>
            <p className="text-md lg:text-lg font-bold">{job.name}</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-neutral-300 lg:mt-3">
                {job.body.map((duty, idx) => (
                    <li key={idx} className="font-normal">
                        {duty}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Timeline(){
    return(
        <div className="relative flex flex-col w-full mx-auto " >
            
            {jobs.map((job, index) => {
               const isLeft = index % 2 === 0;
               return(
                    <div key = {job.id}>
                        
                       <div className="flex flex-col gap-4 mb-10 md:mb-12 lg:hidden ">
                            <div className="flex gap-4 "> 
                                <JobLogo logo={job.logo} />
                                <div className="roboto-text inline-flex flex-col ">
                                    <p className="text-md text-sky-400/80 underline underline-offset-4 ">
                                        {job.date}
                                    </p>
                                    <p className="text-md font-bold">{job.name}</p>
                                </div>
                            </div>
                            <ul className="list-disc space-y-2 pl-5 text-neutral-300">
                                {job.body.map((duty, idx) => (
                                    <li key={idx} className="font-normal">
                                        {duty}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        

                        {/* desktop alternating */}
                        <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-8 lg:mb-16">
                            {isLeft ? (
                                <>
                                    <JobText job={job} align="right" />
                                    <div className="flex justify-center">
                                        <JobLogo logo={job.logo} />
                                    </div>
                                    <div />
                                </>
                            ) : (
                                <>
                                    <div />
                                    <div className="flex justify-center">
                                        <JobLogo logo={job.logo} />
                                    </div>
                                    <JobText job={job} align="left" />
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
                        
    )
}
