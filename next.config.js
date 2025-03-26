/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/voices_of_bokamuso", // Remove the ENV check for simplicity
    assetPrefix: "/voices_of_bokamuso/", 
    images: {
      unoptimized: true,
    },
  };
  
module.exports = nextConfig;