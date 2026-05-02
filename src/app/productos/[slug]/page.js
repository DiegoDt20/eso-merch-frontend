'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import api from '../../lib/api';
import Link from 'next/link';
import useCartStore from '../../store/cartStore';
import useToastStore from '../../store/toastStore';
import { storageUrl } from '../../lib/storage';

/**
 * Página de detalle de producto.
 * Compatible con static export — el slug se resuelve client-side.
 * URL: /productos/[slug]
 */
export default function ProductoDetallePage() {
    const { slug }                = useParams();
    const [product, setProduct]   = useState(null);
    const [loading, setLoading]   = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [added, setAdded]       = useState(false);

    const addItem   = useCartStore(state => state.addItem);
    const showToast = useToastStore(state => state.showToast);

    // Carga el producto desde la API usando el slug de la URL
    useEffect(() => {
        if (!slug) return;
        api.get(`/products/${slug}`)
            .then(res => { setProduct(res.data); setLoading(false); })
            .catch(() => setLoading(false));
    }, [slug]);

    // Agrega al carrito y muestra el toast de confirmación
    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) addItem(product);
        showToast(`${product.name} agregado (${quantity})`);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    if (loading) return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f1fa' }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#daeaf8', margin: '0 auto 16px' }} />
                <p style={{ color: '#3a6499' }}>Cargando...</p>
            </div>
        </div>
    );

    if (!product) return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f1fa' }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 64, marginBottom: 16, color: '#1b3f72' }}>404</p>
                <p style={{ color: '#3a6499', marginBottom: 24 }}>Producto no encontrado.</p>
                <Link href="/productos" style={{
                    padding: '12px 28px', borderRadius: 100,
                    background: '#1b3f72', color: '#fff',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                    Ver catálogo
                </Link>
            </div>
        </div>
    );

    const price = product.sale_price ?? product.price;

    return (
        <main style={{ background: '#e8f1fa', minHeight: '100vh' }}>
            <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 48px' }}>

                {/* Breadcrumb */}
                <p style={{ fontSize: 13, marginBottom: 48, color: '#3a6499' }}>
                    <Link href="/" style={{ color: '#3a6499', textDecoration: 'none' }}>Inicio</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <Link href="/productos" style={{ color: '#3a6499', textDecoration: 'none' }}>Catálogo</Link>
                    <span style={{ margin: '0 8px' }}>/</span>
                    <span style={{ color: '#122a52', fontWeight: 600 }}>{product.name}</span>
                </p>

                {/* Grid principal */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

                    {/* IMAGEN */}
                    <div style={{
                        borderRadius: 20, overflow: 'hidden',
                        position: 'relative', height: 500,
                        background: '#daeaf8',
                        border: '1px solid #c2d8f0',
                    }}>
                        {storageUrl(product.image) ? (
                            <img
                                src={storageUrl(product.image)}
                                alt={product.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        ) : (
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ color: 'rgba(27,63,114,0.15)', fontWeight: 900, fontSize: 60 }}>ESO</span>
                            </div>
                        )}
                        {product.sale_price && (
                            <span style={{
                                position: 'absolute', top: 16, left: 16,
                                background: '#3480d4', color: '#fff',
                                fontSize: 11, fontWeight: 700,
                                padding: '5px 12px', borderRadius: 100,
                            }}>
                                OFERTA
                            </span>
                        )}
                    </div>

                    {/* INFO */}
                    <div style={{ paddingTop: 16 }}>

                        {/* Badge categoría */}
                        {product.category && (
                            <span style={{
                                display: 'inline-block', marginBottom: 16,
                                background: '#daeaf8', color: '#1b3f72',
                                fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                                textTransform: 'uppercase', padding: '4px 12px', borderRadius: 100,
                                border: '1px solid #c2d8f0',
                            }}>
                                {product.category.name}
                            </span>
                        )}

                        {/* Nombre */}
                        <h1 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 900, textTransform: 'uppercase',
                            lineHeight: 1, marginBottom: 24, marginTop: 12,
                            color: '#122a52',
                        }}>
                            {product.name}
                        </h1>

                        {/* Precio */}
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
                            <span style={{ fontSize: 36, fontWeight: 700, color: '#1b3f72' }}>
                                S/. {price}
                            </span>
                            {product.sale_price && (
                                <span style={{ fontSize: 18, color: '#3a6499', textDecoration: 'line-through' }}>
                                    S/. {product.price}
                                </span>
                            )}
                        </div>

                        {/* Descripción */}
                        {product.description && (
                            <p style={{ color: '#3a6499', lineHeight: 1.7, marginBottom: 24, fontSize: 15 }}>
                                {product.description}
                            </p>
                        )}

                        {/* Stock */}
                        <p style={{
                            fontSize: 13, fontWeight: 600, marginBottom: 28,
                            color: product.stock > 0 ? '#1b6b3a' : '#c0392b',
                        }}>
                            {product.stock > 0
                                ? `✓ ${product.stock} unidades disponibles`
                                : '✕ Sin stock'}
                        </p>

                        {/* Selector cantidad */}
                        {product.stock > 0 && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                                <span style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#3a6499' }}>
                                    Cantidad
                                </span>
                                <div style={{
                                    display: 'flex', alignItems: 'center',
                                    border: '1px solid #c2d8f0', borderRadius: 12,
                                    overflow: 'hidden', background: '#ffffff',
                                }}>
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        style={{ padding: '10px 18px', background: 'transparent', color: '#1b3f72', border: 'none', cursor: 'pointer', fontSize: 18 }}
                                    >
                                        −
                                    </button>
                                    <span style={{
                                        padding: '10px 20px', fontWeight: 700, color: '#122a52',
                                        borderLeft: '1px solid #c2d8f0', borderRight: '1px solid #c2d8f0',
                                    }}>
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                                        style={{ padding: '10px 18px', background: 'transparent', color: '#1b3f72', border: 'none', cursor: 'pointer', fontSize: 18 }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Botón agregar al carrito */}
                        <button
                            onClick={handleAddToCart}
                            disabled={product.stock === 0}
                            style={{
                                width: '100%', padding: '16px', fontSize: 15,
                                borderRadius: 100, border: 'none', cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                                fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                                transition: 'all 0.2s',
                                background: added ? '#1b6b3a' : product.stock === 0 ? '#daeaf8' : '#1b3f72',
                                color: added ? '#fff' : product.stock === 0 ? '#a8ccf0' : '#fff',
                            }}
                        >
                            {added ? '✓ Agregado al carrito' : product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                        </button>

                        {/* Link al carrito (aparece tras agregar) */}
                        {added && (
                            <Link href="/carrito" style={{
                                display: 'block', textAlign: 'center', marginTop: 12,
                                color: '#3480d4', fontSize: 13, textDecoration: 'none', fontWeight: 600,
                            }}>
                                Ver carrito →
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}