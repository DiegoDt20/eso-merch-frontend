'use client';

import { useEffect, useState } from 'react';
import api from './lib/api';
import Link from 'next/link';

import Hero             from './components/Hero';
import Benefits         from './components/Benefits';
import Carousel         from './components/Carousel';
import Countdown        from './components/Countdown';
import Testimonials     from './components/Testimonials';
import Newsletter       from './components/Newsletter';
import InstagramGallery from './components/InstagramGallery';
import WhatsAppButton   from './components/WhatsAppButton';
import FadeIn           from './components/FadeIn';
import { storageUrl }   from './lib/storage';

const categoryIcons = {
    textil: '👕', polos: '👕', ropa: '👕',
    accesorios: '🎒', bolsas: '🛍️',
    utiles: '✏️', escritorio: '📝',
    artesania: '🎨', artesanía: '🎨',
    empaque: '📦', cajas: '📦',
    otros: '⭐',
};

function getCategoryIcon(name) {
    const key = name?.toLowerCase();
    for (const [k, v] of Object.entries(categoryIcons)) {
        if (key?.includes(k)) return v;
    }
    return '🏷️';
}

export default function Home() {
    const [products, setProducts]     = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading]       = useState(true);

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
            <Hero productsCount={products.length} categoriesCount={categories.length} />

            <FadeIn><Benefits /></FadeIn>

            {!loading && products.length > 0 && (
                <FadeIn><Carousel products={products} /></FadeIn>
            )}

            {/* CATEGORÍAS — diseño premium */}
            {categories.length > 0 && (
                <FadeIn>
                    <section style={{
                        background: 'linear-gradient(180deg, #f0f6ff 0%, #e8f1fa 100%)',
                        padding: '96px 24px',
                        position: 'relative', overflow: 'hidden',
                    }}>
                        {/* Decoración fondo */}
                        <div style={{
                            position: 'absolute', top: -100, right: -100,
                            width: 400, height: 400, borderRadius: '50%',
                            background: 'rgba(52,128,212,0.06)',
                        }} />
                        <div style={{
                            position: 'absolute', bottom: -80, left: -80,
                            width: 300, height: 300, borderRadius: '50%',
                            background: 'rgba(27,63,114,0.04)',
                        }} />

                        <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                                <div>
                                    <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 8 }}>
                                        Explora
                                    </p>
                                    <h2 style={{ fontSize: 36, fontWeight: 900, color: '#122a52', margin: 0, lineHeight: 1 }}>
                                        Categorías
                                    </h2>
                                </div>
                                <Link href="/productos" style={{
                                    fontSize: 13, color: '#3480d4', textDecoration: 'none',
                                    fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                                    display: 'flex', alignItems: 'center', gap: 6,
                                    padding: '10px 20px', borderRadius: 100,
                                    border: '1px solid rgba(52,128,212,0.3)',
                                    background: 'rgba(52,128,212,0.05)',
                                }}>
                                    Ver todo →
                                </Link>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
                                {categories.map((cat, i) => (
                                    <Link key={cat.id} href={`/productos?categoria=${cat.slug}`} style={{
                                        background: '#ffffff',
                                        border: '1px solid rgba(194,216,240,0.8)',
                                        borderRadius: 20, padding: '28px 20px',
                                        textDecoration: 'none', color: '#122a52',
                                        display: 'block', transition: 'all 0.3s',
                                        position: 'relative', overflow: 'hidden',
                                        boxShadow: '0 2px 12px rgba(27,63,114,0.06)',
                                    }}>
                                        {/* Decoración esquina */}
                                        <div style={{
                                            position: 'absolute', top: -20, right: -20,
                                            width: 80, height: 80, borderRadius: '50%',
                                            background: 'rgba(52,128,212,0.06)',
                                        }} />

                                        <div style={{
                                            width: 52, height: 52, borderRadius: 14,
                                            background: 'linear-gradient(135deg, #daeaf8, #c2d8f0)',
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', marginBottom: 16,
                                            fontSize: 24,
                                        }}>
                                            {getCategoryIcon(cat.name)}
                                        </div>

                                        <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 6, color: '#122a52', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                                            {cat.name}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <p style={{ color: '#3a6499', fontSize: 12 }}>
                                                {cat.products_count || 0} productos
                                            </p>
                                            <span style={{ color: '#3480d4', fontSize: 16 }}>→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </FadeIn>
            )}

            {/* PRODUCTOS DESTACADOS — diseño premium */}
            <FadeIn>
                <section style={{
                    background: '#fff',
                    padding: '96px 24px',
                    position: 'relative',
                }}>
                    <div style={{ maxWidth: 1152, margin: '0 auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, flexWrap: 'wrap', gap: 16 }}>
                            <div>
                                <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 8 }}>
                                    Lo más vendido
                                </p>
                                <h2 style={{ fontSize: 36, fontWeight: 900, color: '#122a52', margin: 0 }}>
                                    Productos destacados
                                </h2>
                            </div>
                            <Link href="/productos" style={{
                                fontSize: 13, color: '#3480d4', textDecoration: 'none',
                                fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                                padding: '10px 20px', borderRadius: 100,
                                border: '1px solid rgba(52,128,212,0.3)',
                                background: 'rgba(52,128,212,0.05)',
                            }}>
                                Ver todo →
                            </Link>
                        </div>

                        {loading ? (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #e8f1fa' }}>
                                        <div style={{ height: 240, background: 'linear-gradient(135deg, #daeaf8, #c2d8f0)' }} />
                                        <div style={{ padding: 16 }}>
                                            <div style={{ height: 16, width: '70%', background: '#daeaf8', borderRadius: 6, marginBottom: 8 }} />
                                            <div style={{ height: 14, width: '40%', background: '#daeaf8', borderRadius: 6 }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 24 }}>
                                {products.slice(0, 8).map(product => (
                                    <Link key={product.id} href={`/productos/${product.slug}`} style={{
                                        textDecoration: 'none', color: '#122a52',
                                        background: '#ffffff', borderRadius: 20,
                                        border: '1px solid rgba(194,216,240,0.8)',
                                        overflow: 'hidden', display: 'block',
                                        transition: 'all 0.3s',
                                        boxShadow: '0 2px 12px rgba(27,63,114,0.06)',
                                    }}>
                                        <div style={{ height: 240, background: 'linear-gradient(135deg, #f0f6ff, #daeaf8)', position: 'relative', overflow: 'hidden' }}>
                                            {product.image ? (
                                                <img src={storageUrl(product.image)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' }} />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <span style={{ color: 'rgba(27,63,114,0.12)', fontWeight: 900, fontSize: 48 }}>ID</span>
                                                </div>
                                            )}
                                            {product.sale_price && (
                                                <span style={{
                                                    position: 'absolute', top: 12, left: 12,
                                                    background: 'linear-gradient(135deg, #3480d4, #1b3f72)',
                                                    color: '#fff', fontSize: 11, fontWeight: 700,
                                                    padding: '5px 12px', borderRadius: 100,
                                                    boxShadow: '0 4px 12px rgba(52,128,212,0.4)',
                                                }}>
                                                    OFERTA
                                                </span>
                                            )}
                                        </div>
                                        <div style={{ padding: '16px 20px 20px' }}>
                                            <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#122a52' }}>
                                                {product.name}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                                    {product.sale_price ? (
                                                        <>
                                                            <span style={{ fontWeight: 800, fontSize: 16, color: '#3480d4' }}>S/. {product.sale_price}</span>
                                                            <span style={{ fontSize: 12, color: '#3a6499', textDecoration: 'line-through' }}>S/. {product.price}</span>
                                                        </>
                                                    ) : (
                                                        <span style={{ fontWeight: 800, fontSize: 16, color: '#1b3f72' }}>S/. {product.price}</span>
                                                    )}
                                                </div>
                                                <span style={{
                                                    fontSize: 11, color: '#3480d4', fontWeight: 600,
                                                    background: 'rgba(52,128,212,0.08)',
                                                    padding: '4px 10px', borderRadius: 100,
                                                }}>
                                                    Ver →
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </FadeIn>

            <FadeIn><Countdown /></FadeIn>
            <FadeIn><Testimonials /></FadeIn>
            <FadeIn><Newsletter /></FadeIn>

            {!loading && products.length > 0 && (
                <FadeIn><InstagramGallery products={products} /></FadeIn>
            )}

            {/* CTA FINAL — premium */}
            <FadeIn>
                <section style={{
                    margin: '0 24px 80px', borderRadius: 28,
                    background: 'linear-gradient(135deg, #0a1628 0%, #1b3f72 50%, #3480d4 100%)',
                    position: 'relative', overflow: 'hidden',
                }}>
                    {/* Decoraciones */}
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05), transparent 50%)' }} />
                    <div style={{
                        position: 'absolute', right: -60, top: '50%',
                        transform: 'translateY(-50%)',
                        width: 300, height: 300, borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.08)',
                    }} />
                    <div style={{
                        position: 'absolute', right: -20, top: '50%',
                        transform: 'translateY(-50%)',
                        width: 180, height: 180, borderRadius: '50%',
                        border: '1px solid rgba(255,255,255,0.06)',
                    }} />
                    <div style={{
                        position: 'absolute', left: '5%', top: '20%',
                        width: 8, height: 8, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                    }} />
                    <div style={{
                        position: 'absolute', left: '15%', bottom: '25%',
                        width: 5, height: 5, borderRadius: '50%',
                        background: 'rgba(168,204,240,0.4)',
                    }} />

                    <div style={{ position: 'relative', padding: '72px 24px', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
                        <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(168,204,240,0.7)', fontWeight: 700, marginBottom: 16 }}>
                            Colección oficial
                        </p>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 16, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em' }}>
                            Merch<br/>
                            <span style={{ color: '#a8ccf0' }}>Oficial</span>
                        </h2>
                        <p style={{ color: 'rgba(168,204,240,0.8)', marginBottom: 40, fontSize: 16, lineHeight: 1.6 }}>
                            Representa a Integridad Democrática con productos exclusivos de alta calidad.
                        </p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/productos" style={{
                                padding: '16px 36px', borderRadius: 100,
                                background: '#fff', color: '#1b3f72',
                                fontSize: 14, fontWeight: 800, letterSpacing: '0.05em',
                                textTransform: 'uppercase', textDecoration: 'none',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                            }}>
                                Comprar ahora →
                            </Link>
                            <Link href="/mis-pedidos" style={{
                                padding: '16px 36px', borderRadius: 100,
                                border: '1px solid rgba(255,255,255,0.3)',
                                background: 'rgba(255,255,255,0.05)',
                                color: '#fff', fontSize: 14, fontWeight: 600,
                                letterSpacing: '0.05em', textTransform: 'uppercase',
                                textDecoration: 'none',
                            }}>
                                Mis pedidos
                            </Link>
                        </div>
                    </div>
                </section>
            </FadeIn>

            <WhatsAppButton />
        </main>
    );
}