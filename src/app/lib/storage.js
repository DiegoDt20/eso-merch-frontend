/**
 * Helper para construir URLs de imágenes.
 * Soporta Cloudinary (producción) y storage local (desarrollo).
 *
 * Uso:
 *   import { storageUrl } from '@/app/lib/storage';
 *   <img src={storageUrl(product.image)} />
 */
export function storageUrl(path) {
    // Si no hay imagen retorna null para placeholder
    if (!path) return null;

    // Si ya es una URL completa (Cloudinary u otro), úsala directo
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // Si la imagen viene con prefijo cloudinary o res.cloudinary.com
    if (path.includes('cloudinary')) {
        return path;
    }

    // En producción, construir URL de Cloudinary
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    if (cloudName) {
        return `https://res.cloudinary.com/${cloudName}/image/upload/${path}`;
    }

    // Fallback: storage local para desarrollo
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')
        || 'http://127.0.0.1:8000';

    return `${baseUrl}/storage/${path}`;
}