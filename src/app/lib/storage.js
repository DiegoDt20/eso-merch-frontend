/**
 * Helper para construir URLs de imágenes.
 * Soporta Cloudinary (producción) y storage local (desarrollo).
 */
export function storageUrl(path) {
    // Sin imagen → null para mostrar placeholder
    if (!path) return null;

    // Ya es URL completa
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // Contiene cloudinary en el path
    if (path.includes('cloudinary')) {
        return path;
    }

    // Producción: Cloudinary
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dnzq3zzau';
    if (cloudName) {
        return `https://res.cloudinary.com/${cloudName}/image/upload/${path}`;
    }

    // Fallback local
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')
        || 'http://127.0.0.1:8000';

    return `${baseUrl}/storage/${path}`;
}