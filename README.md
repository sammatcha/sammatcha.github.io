My personal portfolio designed to showcase my portfolio deployed on github pages. It is built using Next.js with Tailwind CSS and TS.<br>
This project is a work in progress still. Please refer to todos for the updates!<br>
[This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).]

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Setup](#setup)
  - [Getting Started](#getting-started)
- [Build the Project](#build-the-project)
- [Notes](#notes)
  - [Font](#font)
- [Resources](#resources)
- [To Do](#to-do)

## Setup
### Getting Started

To run the development server
```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser

## Build the Project
To build the project for production
```
npm run build
```
The output is in the 'dist' directory, which contains all the static files necessary for deployment<br>
[Next.js Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
## Notes
Default export is 'out' but I am using 'dist'
Static export is necessary to deploy on github pages for a Next.js project <br>
- in package.json, set deploy as : 
  ```
  "npm run build && npm run export && gh-pages -d dist"
  ```

  - add dist to ignore and I had a bunch of files that I removed from git's tracking (but keep locally)
  ```
  git rm -r --cached dist
  ```
### Font
  - Next has built in font/google

## Resources

- [Next.js Documentation](https://nextjs.org/docs) 


## To Do
1. ~~Work on tablet layout - other layout issues~~
2. ~~Link blog~~
3. ~~Add to the Projects section~~
4. ~~Mobile layout~~