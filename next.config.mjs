/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
          pathname: '/images/oet0l5ch/production/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  