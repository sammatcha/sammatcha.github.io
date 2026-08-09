// 'use client';
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { SquareArrowOutDownRight, SquareArrowUpRightIcon } from "lucide-react";
import ExternalLinkIcon from "./ExternalLinkIcon";

const projects = [
    {
        id:1, 
        image: '/images/project/3-1.png',
        name: 'Stamp Calculator',
        description: 'Postage calculator that returns both retail and metered pricing for letter envelopes-using the USPS API for metered pricing',
        tech: 'NodeJS • React • API • Docker • Reliability Monitoring',
        github: 'https://github.com/sammatcha/stamp-calculator', 
        link: 'https://sammatcha.github.io/stamp-calculator'
    },
    {
        id:2,
        image: '/images/project/5.png',
        name: 'Content Platform',
        description: 'CMS-driven content platform tracking analytics on Vercel',
        tech: 'NextJS • React • PayloadCMS • Vercel',
        link: 'https://www.beyondfabled.me/blog/tcg-player-how-i-ship-cards'
    },
    {
        id:3,
        image: '/images/project/2-1.png',
        name: 'URL Shortener',
        description: 'URL shortener with persistent database storage and server-side redirect handling',
        tech: 'Go • React • PostgreSQL • Docker',
        github: 'https://github.com/sammatcha/urlshortener',
    },
    {
        id:4,
        image: '/images/project/6-1.png',
        name: 'Job Application Tracker',
        description: 'Job application tracking with Supbase authentication',
        tech: 'TypeScript • React • Supabase',
        github: 'https://github.com/sammatcha/job-app-tracker',
        link: 'https://application-tracker-bice.vercel.app'
    },
    {
        id:5,
        image: '/images/project/7.png',
        name: 'Personal Finance Dashboard',
        description: 'Sandbox Plaid-integrated finance tracking with transactions ummaries and budget-vs-actual insights',
        tech: 'TypeScript • React • Node/Express • PostgreSQL • Plaid API',
        github: 'https://github.com/sammatcha/plaid-finance-dashboard',
        link: 'https://plaid-finance-dashboard-tau.vercel.app/'
    },
    {
        id:6,
        image: '/images/project/8.png',
        name: 'Job Finder Pipeline',
        description: 'Automated job scraping with Discord alert notifications',
        tech: 'Python • JobSpy • Cron • Discord Webhooks',
        github: 'https://github.com/sammatcha/job-finder',
    }
]
export default function Gallery(){
    return(
        <div className="flex flex-col items-center justify-center mx-auto w-full">
            <div>
                <p className="text-2xl mb-5 md:mb-10 lg:text-4xl">Projects</p>
             </div>

            <div className="max-w-4xl mx-auto items-center justify-center grid grid-cols-1 grid-rows-1 gap-8 md:gap-10">
                            <div className="flex flex-col w-full relative  lg:gap-3 overflow-hidden">
                              {projects.map((project)=>  (
                                <div key={project.id} 
                                    className="w-full border border-transparent hover:bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.5),_transparent_70%)] hover:scale-105 transition-transform duration-300 p-5"
                                >  
                                <div className="flex flex-col lg:flex-row lg:gap-3">
                                    <Image 
                                        src={project.image} 
                                        alt={project.name} 
                                        width={200} 
                                        height={200} 
                                        className="p-3 lg:p-0 mx-auto w-full max-w-xs rounded-xl lg:max-w-none lg:w-1/3 lg:mx-0 object-cover object-top" 
                                    />
                                    <div>
                                        <h3 className="mt-3 text-gray-300 text-lg text-center lg:text-start lg:mt-0">{project.name}</h3>
                                        <p className="text-neutral-400 mt-1 text-sm">{project.description}</p>
                                        <p className="text-neutral-300 mt-2 text-sm  ">{project.tech}</p>
                                    </div>

                                    </div>
                                        
                                    <div className="flex items-center justify-end cursor-pointer gap-2 mt-2">
                                        {project.github ? (
                                            <Link href={project.github}>
                                                <Image 
                                                    className={"hover:scale-105 transition-transform duration-300"}
                                                    src={'/images/project/github1.png'} 
                                                    alt="GitHub"  
                                                    width={40}
                                                    height={40}
                                                />
                                            </Link>
                                        ):(
                                            <span className="hover:opacity-20 cursor-not-allowed">
                                                 <Image 
                                                className={"hover:scale-105 transition-transform duration-300"}
                                                src={'/images/project/github1.png'} 
                                                alt="GitHub"  
                                                width={40}
                                                height={40}
                                            />
                                            </span>
                                        )
                                    }
                                        
                                        {project.link ? (
                                            <Link href={project.link} >
                                                <ExternalLinkIcon/>
                                            </Link>
                                        ):(
                                            <span className="hover:opacity-20 cursor-not-allowed">
                                                <ExternalLinkIcon/>
                                            </span>
                                        )
                                    }
                                    </div>
                                </div>
                             ) )}
                    </div>
                </div>
            </div> 
    )
}
