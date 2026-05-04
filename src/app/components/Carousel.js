'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { storageUrl } from '../lib/storage';

/**
 * Carrusel de productos destacados con autoplay.
 * Identidad de Integridad Democrática.
 */
export default function Carousel({ products }) {
    const [current, setCurrent] = useState(0);

    const slides = products.slice(0, 5);

    useEffect(() => {
        if (slides.length === 0) return;
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    if (slides.length === 0) return null;

    const next = () => setCurrent((current + 1) % slides.length);
    const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

    return (
        <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #c2d8f0' }}>
            <div style={{ maxWidth: 1152, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 6 }}>
                        Lo más popular
                    </p>
                    <h2 style={{ fontSize: 32, fontWeight: 900, color: '#122a52', margin: 0 }}>
                        Productos destacados
                    </h2>
                </div>

                <div style={{
                    position: 'relative', borderRadius: 24, overflow: 'hidden',
                    background: 'linear-gradient(135deg, #1b3f72 0%, #122a52 100%)',
                    minHeight: 480,
                }}>
                    <div style={{
                        position: 'absolute', top: '50%', right: '20%',
                        transform: 'translateY(-50%)',
                        width: 400, height: 400, borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(52,128,212,0.4), transparent 70%)',
                        filter: 'blur(60px)',
                    }} />

                    {slides.map((product, i) => (
                        <div key={product.id} style={{
                            position: i === current ? 'relative' : 'absolute',
                            inset: 0,
                            opacity: i === current ? 1 : 0,
                            transition: 'opacity 0.6s ease',
                            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
                            padding: 48, alignItems: 'center',
                        }}>
                            <div>
                                <span style={{
                                    display: 'inline-block', background: 'rgba(168,204,240,0.15)',
                                    color: '#a8ccf0', padding: '4px 12px', borderRadius: 100,
                                    fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
                                    textTransform: 'uppercase', marginBottom: 16,
                                    border: '1px solid rgba(168,204,240,0.3)',
                                }}>
                                    Destacado
                                </span>
                                <h3 style={{
                                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900,
                                    color: '#fff', marginBottom: 16, textTransform: 'uppercase',
                                    lineHeight: 1.1,
                                }}>
                                    {product.name}
                                </h3>
                                <p style={{ color: 'rgba(168,204,240,0.85)', marginBottom: 24, fontSize: 15, lineHeight: 1.6 }}>
                                    {product.description?.slice(0, 120) || 'Producto exclusivo de Integridad Democrática.'}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 28 }}>
                                    <span style={{ fontSize: 36, fontWeight: 900, color: '#fff' }}>
                                        S/. {product.sale_price ?? product.price}
                                    </span>
                                    {product.sale_price && (
                                        <span style={{ fontSize: 18, color: '#a8ccf0', textDecoration: 'line-through' }}>
                                            S/. {product.price}
                                        </span>
                                    )}
                                </div>
                                <Link href={`/productos/${product.slug}`} style={{
                                    padding: '12px 28px', borderRadius: 100,
                                    background: '#3480d4', color: '#fff',
                                    fontSize: 13, fontWeight: 600, letterSpacing: '0.05em',
                                    textTransform: 'uppercase', textDecoration: 'none',
                                    display: 'inline-block', boxShadow: '0 8px 24px rgba(52,128,212,0.4)',
                                }}>
                                    Ver detalle →
                                </Link>
                            </div>

                            <div style={{
                                position: 'relative', height: 380, borderRadius: 16,
                                background: 'rgba(255,255,255,0.08)',
                                border: '1px solid rgba(168,204,240,0.2)',
                                overflow: 'hidden', backdropFilter: 'blur(8px)',
                            }}>
                                {product.image ? (
                                    <img src={storageUrl(product.image)}
                                         alt={product.name}
                                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'rgba(255,255,255,0.1)', fontWeight: 900, fontSize: 60 }}>ID</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}

                    <button onClick={prev} style={{
                        position: 'absolute', top: '50%', left: 16,
                        transform: 'translateY(-50%)',
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff', cursor: 'pointer', fontSize: 20,
                        backdropFilter: 'blur(8px)', zIndex: 2,
                    }}>‹</button>

                    <button onClick={next} style={{
                        position: 'absolute', top: '50%', right: 16,
                        transform: 'translateY(-50%)',
                        width: 44, height: 44, borderRadius: '50%',
                        background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)',
                        color: '#fff', cursor: 'pointer', fontSize: 20,
                        backdropFilter: 'blur(8px)', zIndex: 2,
                    }}>›</button>

                    <div style={{
                        position: 'absolute', bottom: 20, left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex', gap: 8, zIndex: 2,
                    }}>
                        {slides.map((_, i) => (
                            <button key={i} onClick={() => setCurrent(i)} style={{
                                width: i === current ? 32 : 8, height: 8,
                                borderRadius: 100, border: 'none',
                                background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
                                cursor: 'pointer', transition: 'all 0.3s',
                            }} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}