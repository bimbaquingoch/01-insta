/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [ 'links.papareact.com', 'avatars.githubusercontent.com', 'instagram.fuio1-1.fna.fbcdn.net', 'cloudflare-ipfs.com', 'raw.githubusercontent.com' ]
  }
};

module.exports = nextConfig;
