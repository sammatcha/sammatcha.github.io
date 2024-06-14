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
                <div key = {job.id} className={`flex  w-full mb-8 ${isLeft ? "flex-row-reverse ": "flex-row "}`}>
                    <div className={`flex w-1/2 items-center pl-10 ${isLeft ? "justify-start text-left" : "justify-end text-right"}`}>
                       <div className={`max-w-sm roboto-text p-4 `}>
                           <p className="text-xl text-gray-400 underline decoration-1 ">{job.date}</p>
                           <p className="text-lg font-bold">{job.name}</p>
                            <ul className="list-disc text-neutral-400">
                                {job.body.map((duty,idx) => (
                                    <li key={idx} className="font-thin">
                                        {duty}
                                    </li>
                                ))}
                            </ul>
                           
                       </div>
                   </div>
                                                     {/* LOGO DIV */}
                   <div className={`flex items-center w-3/5  ${isLeft ? "justify-end  ": "justify-start ml-8"}`} >
                        <div className="rounded-full w-30 h-30 p-1 border-2 flex justify-center items-center  ">
                            <Image src={job.logo} alt={"logo images of employment"} width={100} height={100} className=" rounded-full bg-slightGreyBlue"/>
                        </div>
                    </div>
           
                </div>
        
             
                )})
       
        
             } 
        
        </div>
      
    )
}

