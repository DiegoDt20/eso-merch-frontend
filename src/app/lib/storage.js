/**
 * Helper para construir URLs de imágenes del backend Laravel.
 * Centraliza la URL para que cambie automáticamente entre
 * desarrollo (127.0.0.1:8000) y producción (api.integridaddemocratica.com.pe).
 *
 * Uso:
 *   import { storageUrl } from '@/app/lib/storage';
 *   <img src={storageUrl(product.image)} />
 */
export function storageUrl(path) {
    // Si no hay imagen retorna null para que el componente muestre placeholder
    if (!path) return null;

    // Toma la URL del .env.local y le quita '/api' del final
    const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace('/api', '')
        || 'http://127.0.0.1:8000';

    return `${baseUrl}/storage/${path}`;
}