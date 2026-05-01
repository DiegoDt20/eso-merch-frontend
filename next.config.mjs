/** @type {import('next').NextConfig} */
const nextConfig = {
    // Activa el modo de exportación estática (HTML/CSS/JS).
    // Genera todos los archivos en la carpeta 'out/' al ejecutar 'npm run build'.
    output: 'export',

    // Desactiva la optimización automática de imágenes.
    // En modo estático no hay servidor que las optimice en tiempo real.
    images: {
        unoptimized: true,
    },

    // Agrega slash al final de URLs para mejor compatibilidad con Apache.
    trailingSlash: true,
};

export default nextConfig;