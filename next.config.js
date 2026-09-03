/** @type {import('next').NextConfig} */

const imageUrl = process.env.WP_IMAGE_URL;

const nextConfig = {
  reactStrictMode: true,
  images: { 
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
        {
          protocol: "http",
          hostname: imageUrl,
          pathname: "/**",
        },
      ],
  }
};

module.exports = nextConfig;
