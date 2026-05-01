/** @type {import('next').NextConfig} */
const nextConfig = {
    // Vercel optimiza imágenes automáticamente.
    // Define los dominios desde donde se cargan las imágenes del backend.
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.up.railway.app',
            },
            {
                protocol: 'https',
                hostname: 'api.integridaddemocratica.com.pe',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
            },
        ],
    },
};

export default nextConfig;