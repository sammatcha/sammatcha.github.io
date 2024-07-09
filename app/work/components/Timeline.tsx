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
     date: 'December 2022 - March 2024', 
     name: 'Up Point | Software Developer', 
     body: [
        'Developed three responsive websites using Laravel, React, and Tailwind CSS',
        'Designed and implemented database schemas using MySQL',
        'Integrated payment APIs into in-development projects',
        'Automated the deployment of servers using Proxmox API',
        'Created technical and non-technical documentation'
    ],
    logo : '/images/logos/uppoint-logo.png',
    },
    {
        id: 1 , 
        date: 'June 2022 - August 2022', 
        name: 'PennyMac | Data Analyst Intern', 
        body: [
            'Conducted data analysis and visualization to support business decision-making processes',
            'Produced over 15 performance model dashboards',
            'Entered data from over 12 invoices to aid in budget forecasting',
            'Utilized Excel (VLOOKUP) and SQL queries to perform data validations.'

        ],
        logo: '/images/logos/penny-logo.png'
    },
];
export default function Timeline(){
    return(
        <div className="relative p-4" >
            {jobs.map((job, index) => {
               const isLeft = index % 2 === 0;
               return(
                <div key = {job.id} className={`flex min-w-full mb-8  justify-center ${isLeft ? "lg:flex-row-reverse ": "lg:flex-row "}`}>
                    <div className={`flex lg:w-1/2 items-center lg:pl-10 ${isLeft ? "lg:text-left" : "lg:text-right"}`}>
                       <div className={`max-w-sm lg:max-w-5xl roboto-text px-3 py-2 lg:p-4 order-last lg:order-none`}>
                           <p className="text-md lg:text-xl text-gray-400 underline decoration-1 ">{job.date}</p>
                           <p className="text-md lg:text-lg font-bold">{job.name}</p>
                            <ul className="list-disc text-neutral-400">
                                {job.body.map((duty,idx) => (
                                    <li key={idx} className="font-thin ">
                                        {duty}
                                    </li>
                                ))}
                            </ul>
                           
                       </div>
                   </div>
                                                     {/* LOGO DIV */}
                   <div className={`flex lg:w-5/6 order-first lg:order-none  ${isLeft ? "lg:justify-end lg:pr-4": "lg:justify-start lg:pl-4 "}`} >
                        <div className="w-16 h-16 mt-2 rounded-full lg:p-1 border-2 flex justify-center items-center lg:w-40 lg:h-40 lg:mt-0">
                            <Image src={job.logo} alt={"logo images of employment"} width={200} height={200} className=" rounded-full bg-slightGreyBlue"/>
                        </div>
                    </div>
           
                </div>
        
             
                )})
       
        
             } 
        
        </div>
      
    )
}

