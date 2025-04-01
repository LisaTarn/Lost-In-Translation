/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    reactStrictMode: true,
  images: { unoptimized: true},
 // basePath: isProd? '/Lost-In-Translation' : "",
 // assetPrefix: isProd? '/Lost-in-Translation' : "",
  
};

export default nextConfig;
