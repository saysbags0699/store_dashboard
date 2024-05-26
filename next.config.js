/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'p16-oec-va.ibyteimg.com', // Tambahkan hostname yang diperlukan
        'p19-oec-va.ibyteimg.com', // Tambahkan hostname lainnya jika diperlukan
        'p16-oec-sg.ibyteimg.com',
        'p19-oec-sg.ibyteimg.com'
      ],
    },
  };
  
  module.exports = nextConfig;
  