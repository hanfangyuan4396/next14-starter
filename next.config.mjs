/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: "c-ssl.dtstatic.com"
        }
      ]
    }
  }
  

export default nextConfig;
