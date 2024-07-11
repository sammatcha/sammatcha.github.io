/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath:'/sammatcha.github.io',
    output:'export',
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
    images:{
        unoptimized: true,
    }
};

export default nextConfig;
