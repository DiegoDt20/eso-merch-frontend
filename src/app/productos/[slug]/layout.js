/**
 * Layout para rutas dinámicas de productos.
 * En modo static export, Next.js necesita conocer todos los slugs
 * en build-time. Esta función consulta la API de Laravel para obtener
 * la lista completa de productos y generar un HTML por cada uno.
 */
export async function generateStaticParams() {
    try {
        // URL del backend desde la variable de entorno
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';

        // Consulta todos los productos del catálogo
        const res     = await fetch(`${apiUrl}/products`);
        const data    = await res.json();

        // data.data contiene la lista paginada de productos
        const products = data.data || [];

        // Retorna un array de objetos con el slug de cada producto
        // Next.js generará un HTML estático por cada slug
        return products.map(product => ({ slug: product.slug }));
    } catch (error) {
        // Si la API no está disponible al hacer build, retorna placeholder
        // Esto evita que el build falle por completo
        console.warn('No se pudieron cargar los productos para el build:', error.message);
        return [{ slug: 'placeholder' }];
    }
}

export default function ProductoLayout({ children }) {
    return children;
}