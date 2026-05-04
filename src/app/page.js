'use client';

import { useEffect, useState } from 'react';
import api from './lib/api';
import Link from 'next/link';

// Importa todos los componentes de la página de inicio
import Hero              from './components/Hero';
import Benefits          from './components/Benefits';
import Carousel          from './components/Carousel';
import Countdown         from './components/Countdown';
import Testimonials      from './components/Testimonials';
import Newsletter        from './components/Newsletter';
import InstagramGallery  from './components/InstagramGallery';
import WhatsAppButton    from './components/WhatsAppButton';
import FadeIn            from './components/FadeIn';
import { storageUrl } from './lib/storage';

/**
 * Página de inicio principal de ESO.MERCH.
 * Combina todos los componentes en orden estratégico:
 * Hero → Beneficios → Carrusel → Categorías → Productos
 * → Countdown → Testimonios → Newsletter → Galería → CTA → WhatsApp.
 */
export default function Home() {
    const [products, setProducts]     = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading]       = useState(true);

    // Carga productos y categorías al montar el componente
    useEffect(() => {
        Promise.all([
            api.get('/products'),
            api.get('/categories'),
        ]).then(([p, c]) => {
            setProducts(p.data.data || []);
            setCategories(c.data || []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, []);

    return (
        <main>

            {/* Hero principal con stats y badge live verde */}
            <Hero
                productsCount={products.length}
                categoriesCount={categories.length}
            />

            {/* Beneficios: envío, calidad, pago seguro, edición limitada */}
            <FadeIn>
                <Benefits />
            </FadeIn>

            {/* Carrusel con autoplay de productos destacados */}
            {!loading && products.length > 0 && (
                <FadeIn>
                    <Carousel products={products} />
                </FadeIn>
            )}

            {/* CATEGORÍAS con íconos */}
            {categories.length > 0 && (
                <FadeIn>
                    <section style={{ maxWidth: 1152, margin: '0 auto', padding: '80px 24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 6 }}>
                                    Explora
                                </p>
                                <h2 style={{ fontSize: 32, fontWeight: 900, color: '#122a52', margin: 0 }}>
                                    Categorías
                                </h2>
                            </div>
                            <Link href="/productos" style={{ fontSize: 13, color: '#3480d4', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                Ver todo →
                            </Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
                            {categories.map(cat => (
                                <Link key={cat.id} href={`/productos?categoria=${cat.slug}`} style={{
                                    background: '#ffffff', border: '1px solid #c2d8f0',
                                    borderRadius: 16, padding: 24, textDecoration: 'none', color: '#122a52',
                                    display: 'block', transition: 'all 0.2s',
                                }}>
                                    <div style={{
                                        width: 40, height: 40, borderRadius: 10,
                                        background: '#daeaf8', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center',
                                        marginBottom: 12,
                                    }}>
                                        <svg width="20" height="20" fill="none" stroke="#1b3f72" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                                        </svg>
                                    </div>
                                    <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 4, color: '#122a52' }}>{cat.name}</p>
                                    <p style={{ color: '#3a6499', fontSize: 13 }}>{cat.products_count} productos</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                </FadeIn>
            )}

            {/* GRID DE PRODUCTOS DESTACADOS */}
            <FadeIn>
                <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #c2d8f0', borderBottom: '1px solid #c2d8f0' }}>
                    <div style={{ maxWidth: 1152, margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 6 }}>
                                    Lo más vendido
                                </p>
                                <h2 style={{ fontSize: 32, fontWeight: 900, color: '#122a52', margin: 0 }}>
                                    Productos destacados
                                </h2>
                            </div>
                            <Link href="/productos" style={{ fontSize: 13, color: '#3480d4', textDecoration: 'none', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                                Ver todo →
                            </Link>
                        </div>

                        {loading ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
                                {[...Array(4)].map((_, i) => (
                                    <div key={i}>
                                        <div style={{ height: 220, background: '#daeaf8', borderRadius: 12, marginBottom: 12 }} />
                                        <div style={{ height: 16, width: '70%', background: '#daeaf8', borderRadius: 6, marginBottom: 8 }} />
                                        <div style={{ height: 14, width: '40%', background: '#daeaf8', borderRadius: 6 }} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
                                {products.slice(0, 8).map(product => (
                                    <Link key={product.id} href={`/productos/${product.slug}`} style={{
                                        textDecoration: 'none', color: '#122a52',
                                        background: '#ffffff', borderRadius: 16,
                                        border: '1px solid #c2d8f0', overflow: 'hidden',
                                        display: 'block', transition: 'all 0.2s',
                                    }}>
                                        <div style={{ height: 220, background: '#daeaf8', position: 'relative', overflow: 'hidden' }}>
                                            {product.image ? (
                                                <img src={storageUrl(product.image)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                   <span style={{ color: 'rgba(27,63,114,0.15)', fontWeight: 900, fontSize: 40 }}>ID</span>
                                                </div>
                                            )}
                                            {product.sale_price && (
                                                <span style={{ position: 'absolute', top: 12, left: 12, background: '#3480d4', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100 }}>
                                                    OFERTA
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ padding: 16 }}>
                                            <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                {product.name}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                {product.sale_price ? (
                                                    <>
                                                        <span style={{ fontWeight: 700, fontSize: 14, color: '#3480d4' }}>S/. {product.sale_price}</span>
                                                        <span style={{ fontSize: 12, color: '#3a6499', textDecoration: 'line-through' }}>S/. {product.price}</span>
                                                    </>
                                                ) : (
                                                    <span style={{ fontWeight: 700, fontSize: 14, color: '#1b3f72' }}>S/. {product.price}</span>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </FadeIn>

            {/* Banner promocional con countdown timer */}
            <FadeIn>
                <Countdown />
            </FadeIn>

            {/* Testimonios de clientes con estrellas y avatares */}
            <FadeIn>
                <Testimonials />
            </FadeIn>

            {/* Newsletter para captar emails */}
            <FadeIn>
                <Newsletter />
            </FadeIn>

            {/* Galería estilo Instagram con productos */}
            {!loading && products.length > 0 && (
                <FadeIn>
                    <InstagramGallery products={products} />
                </FadeIn>
            )}

            {/* CTA BANNER FINAL — edición limitada */}
            <FadeIn>
                <section style={{ margin: '80px 24px', borderRadius: 24, background: 'linear-gradient(135deg, #1b3f72 0%, #122a52 100%)', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 50%, rgba(52,128,212,0.4), transparent 60%)' }} />
                    <div style={{ position: 'relative', padding: '64px 24px', textAlign: 'center' }}>
                        <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a8ccf0', fontWeight: 700, marginBottom: 12 }}>
                            Stock limitado
                        </p>
                        <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 16, color: '#ffffff' }}>
                            Merch Oficial
                        </h2>
                        <p style={{ color: 'rgba(168,204,240,0.85)', marginBottom: 32, fontSize: 16 }}>
                            Productos exclusivos de Integridad Democrática
                        </p>
                        <Link href="/productos" style={{
                            padding: '14px 32px', borderRadius: 100,
                            background: '#3480d4', color: '#fff',
                            fontSize: 14, fontWeight: 600, letterSpacing: '0.05em',
                            textTransform: 'uppercase', textDecoration: 'none',
                            boxShadow: '0 8px 24px rgba(52,128,212,0.4)',
                        }}>
                            Comprar ahora →
                        </Link>
                    </div>
                </section>
            </FadeIn>

            {/* Botón flotante de WhatsApp para contacto rápido */}
            <WhatsAppButton />
        </main>
    );
}