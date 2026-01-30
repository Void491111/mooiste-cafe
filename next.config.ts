/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Kita bolehin ambil gambar dari sini
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com', // Kadang unsplash pake domain ini juga
      },
    ],
  },
};

export default nextConfig;