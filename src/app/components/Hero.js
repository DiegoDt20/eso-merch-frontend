'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { storageUrl } from '../lib/storage';

export default function Hero({ productsCount, categoriesCount, products = [] }) {
    const [activeProduct, setActiveProduct] = useState(0);

    useEffect(() => {
        if (products.length === 0) return;
        const id = setInterval(() => {
            setActiveProduct(p => (p + 1) % Math.min(products.length, 4));
        }, 3000);
        return () => clearInterval(id);
    }, [products]);

    const featured = products.slice(0, 4);

    return (
        <section style={{
            minHeight: '90vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #1b3f72 0%, #122a52 100%)',
        }}>
            {/* Patrón decorativo de puntos — SIN CAMBIOS */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.15,
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }} />

            {/* Glow azul difuso central — SIN CAMBIOS */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700, height: 700, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(52,128,212,0.4), transparent 70%)',
                filter: 'blur(80px)',
            }} />

            {/* Círculos decorativos flotantes — SIN CAMBIOS */}
            <div style={{
                position: 'absolute', top: '20%', right: '10%',
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(168,204,240,0.1)', border: '1px solid rgba(168,204,240,0.2)',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', left: '15%',
                width: 120, height: 120, borderRadius: '50%',
                background: 'rgba(52,128,212,0.08)', border: '1px solid rgba(52,128,212,0.2)',
            }} />

            {/* LAYOUT: contenido centrado + productos a la derecha */}
            <div style={{
                position: 'relative', zIndex: 1,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 48,
                padding: '40px 5%', maxWidth: 1200,
                width: '100%', margin: '0 auto',
                flexWrap: 'wrap',
            }}>

                {/* CONTENIDO ORIGINAL — sin ningún cambio */}
                <div style={{ textAlign: 'center', flex: '1 1 500px' }}>

                    <div style={{
                        margin: '0 auto 28px',
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <div style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(168,204,240,0.2)',
                            borderRadius: 20, padding: '16px 32px',
                            backdropFilter: 'blur(8px)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        }}>
                            <Image src="/integridadlogoh.webp" alt="Integridad Democrática" width={280} height={75} style={{ objectFit: 'contain', display: 'block' }} priority />
                        </div>
                    </div>

                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'rgba(168,204,240,0.15)', border: '1px solid rgba(168,204,240,0.3)',
                        padding: '6px 16px', borderRadius: 100, marginBottom: 24,
                        backdropFilter: 'blur(8px)',
                    }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                        <span style={{ fontSize: 12, color: '#a8ccf0', fontWeight: 500, letterSpacing: '0.1em' }}>TIENDA OFICIAL 2026</span>
                    </div>

                    <h1 style={{
                        fontWeight: 900, lineHeight: 1.05, marginBottom: 16,
                        fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: '#ffffff',
                        textShadow: '0 4px 32px rgba(0,0,0,0.3)', letterSpacing: '-0.01em',
                    }}>
                        Representa tus{' '}<span style={{ color: '#5ba8f5' }}>valores</span><br />con orgullo.
                    </h1>

                    <p style={{ color: 'rgba(168,204,240,0.85)', fontSize: 17, maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.6 }}>
                        Merchandising oficial para militantes, simpatizantes y dirigentes de Integridad Democrática.
                    </p>

                    <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
                        <Link href="/productos" style={{ padding: '14px 32px', borderRadius: 100, background: '#3480d4', color: '#fff', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 8px 24px rgba(52,128,212,0.4)' }}>
                            Ver catálogo →
                        </Link>
                        <Link href="/mis-pedidos" style={{ padding: '14px 32px', borderRadius: 100, border: '1px solid rgba(168,204,240,0.4)', background: 'rgba(168,204,240,0.05)', backdropFilter: 'blur(8px)', fontSize: 14, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#a8ccf0', textDecoration: 'none' }}>
                            Mis pedidos
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24, maxWidth: 700, margin: '0 auto' }}>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{productsCount || '—'}</p>
                            <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Productos</p>
                        </div>
                        <div style={{ textAlign: 'center', borderLeft: '1px solid rgba(168,204,240,0.2)', borderRight: '1px solid rgba(168,204,240,0.2)' }}>
                            <p style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 4 }}>{categoriesCount || '—'}</p>
                            <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Categorías</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 4 }}>24h</p>
                            <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Entrega</p>
                        </div>
                    </div>
                </div>

                {/* PRODUCTOS — solo se muestra si hay productos */}
                {featured.length > 0 && (
                    <div style={{ flex: '0 0 340px', maxWidth: 340 }}>

                        {/* Card producto principal */}
                        <div style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(52,128,212,0.25)',
                            borderRadius: 20, overflow: 'hidden',
                            backdropFilter: 'blur(12px)',
                            marginBottom: 10, position: 'relative',
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 2, background: 'linear-gradient(90deg, transparent, #3480d4, transparent)' }} />

                            {/* Imagen */}
                            <div style={{ height: 200, background: 'rgba(52,128,212,0.1)', position: 'relative', overflow: 'hidden' }}>
                                {featured[activeProduct]?.image ? (
                                    <img
                                        src={storageUrl(featured[activeProduct].image)}
                                        alt={featured[activeProduct].name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s' }}
                                        onError={e => e.target.style.display = 'none'}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 48, opacity: 0.3 }}>🛍️</div>
                                )}
                                <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.4)', color: '#4ade80', fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: 100, letterSpacing: '0.1em' }}>
                                    DESTACADO
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ padding: '14px 18px' }}>
                                <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 8, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {featured[activeProduct]?.name || 'Producto Oficial'}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: 20, fontWeight: 900, color: '#5ba8f5' }}>
                                        S/ {featured[activeProduct]?.sale_price || featured[activeProduct]?.price || '—'}
                                    </span>
                                    <Link href={`/productos/${featured[activeProduct]?.slug || ''}`} style={{ background: '#3480d4', color: '#fff', fontSize: 11, fontWeight: 700, padding: '7px 16px', borderRadius: 100, textDecoration: 'none', letterSpacing: '0.06em' }}>
                                        Ver →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Miniaturas */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                            {featured.map((p, i) => (
                                <div key={p.id} onClick={() => setActiveProduct(i)} style={{
                                    height: 68, borderRadius: 10, overflow: 'hidden',
                                    border: `2px solid ${i === activeProduct ? '#3480d4' : 'rgba(168,204,240,0.15)'}`,
                                    cursor: 'pointer', background: 'rgba(52,128,212,0.1)',
                                    opacity: i === activeProduct ? 1 : 0.6,
                                    transition: 'all 0.25s ease',
                                }}>
                                    {p.image ? (
                                        <img src={storageUrl(p.image)} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={e => e.target.style.display = 'none'} />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🛍️</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Dots */}
                        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
                            {featured.map((_, i) => (
                                <div key={i} onClick={() => setActiveProduct(i)} style={{
                                    width: i === activeProduct ? 20 : 6, height: 6, borderRadius: 3,
                                    cursor: 'pointer', transition: 'all 0.3s ease',
                                    background: i === activeProduct ? '#3480d4' : 'rgba(168,204,240,0.3)',
                                }} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}