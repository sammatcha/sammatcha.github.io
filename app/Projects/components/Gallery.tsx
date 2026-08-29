import Image from "next/image";
import React from "react";
import Link from "next/link";
import ExternalLinkIcon from "./ExternalLinkIcon";

const featuredProjects = [
    {
        id:1, 
        image: '/images/project/3-1.webp',
        name: 'Stamp Calculator',
        description: 'Postage calculator that returns both retail and metered pricing for letter envelopes using the USPS API for metered pricing',
        tech: ['NodeJS', 'React', 'API', 'Docker', 'Reliability Monitoring'],
        github: 'https://github.com/sammatcha/stamp-calculator', 
        link: 'https://sammatcha.github.io/stamp-calculator'
    },
    {
        id:2, 
        image: '/images/project/9.webp',
        name: 'TCG E-Commerce Demo Site',
        description: 'Headless storefront for One Piece TCG and Pokémon with dynamic collection routes, GraphQL product queries, and responsive UI.',
        tech: ['Next.js', 'TypeScript', 'Shopify Storefront API', 'GraphQL', 'Tailwind CSS', 'Vercel'],
        github: 'https://github.com/sammatcha/tcg-store-web',
        link: 'https://tcg-store-web.vercel.app/'
    },
    {
        id:3, 
        image: '/images/project/1.webp',
        name: 'AI resume matcher',
        description: 'CLI tool that analyzes job postings and recommends the best-fit resume bullets and projects from a personal bank using Claude API',
        tech: ['Python', 'Anthropic Claude API', 'YAML', 'Rich', 'BeautifulSoup'],
        github: 'https://github.com/sammatcha/resumematch', 
    },
]
const projects = [
    {
        id:2,
        name: 'Content Platform',
        description: 'CMS-driven content platform tracking analytics on Vercel',
        tech: ['NextJS', 'React', 'PayloadCMS', 'Vercel'],
        link: 'https://www.beyondfabled.me/blog/tcg-player-how-i-ship-cards'
    },
    {
        id:3,
        name: 'URL Shortener',
        description: 'URL shortener with persistent database storage and server-side redirect handling',
        tech: ['Go', 'React', 'PostgreSQL', 'Docker'],
        github: 'https://github.com/sammatcha/urlshortener',
    },
    {
        id:4,
        name: 'Job Application Tracker',
        description: 'Job application tracking with Supabase authentication',
        tech: ['TypeScript', 'React', 'Supabase'],
        github: 'https://github.com/sammatcha/job-app-tracker',
        link: 'https://application-tracker-bice.vercel.app'
    },
    {
        id:5,
        name: 'Personal Finance Dashboard',
        description: 'Sandbox Plaid-integrated finance tracking with transaction summaries and budget-vs-actual insights',
        tech: ['TypeScript', 'React', 'Node/Express', 'PostgreSQL', 'Plaid API'],
        github: 'https://github.com/sammatcha/plaid-finance-dashboard',
        link: 'https://plaid-finance-dashboard-tau.vercel.app/'
    },
    {
        id:6,
        name: 'Job Finder Pipeline',
        description: 'Automated job scraping with Discord alert notifications',
        tech: ['Python', 'JobSpy', 'Cron', 'Discord Webhooks'],
        github: 'https://github.com/sammatcha/job-finder',
    },
]
export default function Gallery(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center mx-auto w-full">
                <p className="text-2xl mb-5 md:mb-10 lg:text-4xl">Projects</p>
             </div>
             {/* Featured projects */}
            <div className="mb-3 md:mb-4">
                <p className="text-sm tracking-widest uppercase text-slate-300"> - Featured</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
                {featuredProjects.map((featured) => (
                <div
                    key={featured.id}
                    className="flex flex-col overflow-hidden rounded-xl border border-white/10 bg-slightGrayBlue"
                >
                    <div className="relative w-full h-36 md:h-auto md:aspect-[16/10] bg-darkGrayBlue">
                        <Image 
                            src={featured.image} 
                            alt={featured.name} 
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    <div className="flex flex-1 flex-col p-3 sm:p-4 md:p-5 cursor-pointer">
                        <div className="flex items-start justify-between gap-3">
                            <h3 className="text-soft-white text-base sm:text-lg md:text-xl font-semibold leading-snug">
                                {featured.name}
                            </h3>
                            <div className="flex shrink-0 items-center gap-2">
                                {featured.github ? (
                                    <Link href={featured.github} target="_blank" rel="noopener noreferrer">
                                        <Image 
                                            className="hover:scale-105 transition-transform duration-300"
                                            src={'/images/project/github1.webp'} 
                                            alt="GitHub"  
                                            width={32}
                                            height={32}
                                        />
                                    </Link>
                                ) : null}
                                {featured.link ? (
                                    <Link href={featured.link} target="_blank" rel="noopener noreferrer" className="text-soft-white hover:text-cyan-300">
                                        <ExternalLinkIcon/>
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                        <p className="text-neutral-400 mt-2 text-sm leading-relaxed">
                            {featured.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {featured.tech.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-neutral-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
               {/* more projects */}
            <div className="mb-3 md:mb-4">
                <p className="text-sm tracking-widest uppercase text-slate-300"> - More Projects</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-4 cursor-pointer">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-lg border border-white/10 bg-darkGrayBlue/60 p-4 transition-colors hover:border-white/20"
                    >
                        <div className="flex items-start justify-between gap-2">
                            <h3 className="text-soft-white text-sm sm:text-base font-medium leading-snug">
                                {project.name}
                            </h3>
                            <div className="flex shrink-0 items-center gap-1.5">
                                {project.github ? (
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            className="hover:opacity-60 transition-opacity"
                                            src={'/images/project/github1.webp'}
                                            alt="GitHub"
                                            width={30}
                                            height={30}
                                        />
                                    </Link>
                                ) : null}
                                {project.link ? (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-soft-white hover:text-cyan-300 scale-90"
                                    >
                                        <ExternalLinkIcon />
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                        <p className="text-neutral-400 mt-1.5 text-xs sm:text-sm leading-relaxed">
                            {project.description}
                        </p>
                        <p className="text-neutral-500 mt-2 text-xs">
                            {project.tech.join(' · ')}
                        </p>
                    </div>
                ))}
            </div>
            </div> 
    )
}
