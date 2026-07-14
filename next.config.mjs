/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be deployed to Vercel/Render (or any
  // static host) as a plain HTML/CSS/JS bundle. Output lands in ./out
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
