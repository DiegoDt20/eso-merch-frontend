'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { storageUrl } from '../lib/storage';

export default function Hero({ productsCount, categoriesCount, products = [] }) {
    const [activeProduct, setActiveProduct] = useState(0);

    // Rota productos cada 3 segundos
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
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #1b3f72 0%, #122a52 100%)',
        }}>
            {/* Patrón puntos */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.12,
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }} />

            {/* Glow central */}
            <div style={{
                position: 'absolute', top: '30%', left: '35%',
                transform: 'translate(-50%, -50%)',
                width: 600, height: 600, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(52,128,212,0.35), transparent 70%)',
                filter: 'blur(80px)', pointerEvents: 'none',
            }} />

            {/* Círculos animados fondo */}
            <div style={{ position: 'absolute', top: '5%', right: '2%', width: 320, height: 320, borderRadius: '50%', border: '1px solid rgba(168,204,240,0.08)', animation: 'spin 25s linear infinite' }} />
            <div style={{ position: 'absolute', top: '5%', right: '2%', width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(52,128,212,0.12)', animation: 'spin 18s linear infinite reverse', margin: '50px' }} />
            <div style={{ position: 'absolute', bottom: '5%', left: '2%', width: 260, height: 260, borderRadius: '50%', border: '1px solid rgba(168,204,240,0.07)', animation: 'spin 30s linear infinite' }} />

            {/* Cards flotantes beneficios */}
            <div style={{ position: 'absolute', left: '1%', top: '20%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(168,204,240,0.15)', borderRadius: 14, padding: '12px 16px', backdropFilter: 'blur(12px)', animation: 'float 7s ease-in-out infinite', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
                <span style={{ fontSize: 20 }}>🚚</span>
                <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#fff', margin: 0 }}>Envío rápido</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>24-48h Perú</p>
                </div>
            </div>
            <div style={{ position: 'absolute', left: '1%', top: '42%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(168,204,240,0.15)', borderRadius: 14, padding: '12px 16px', backdropFilter: 'blur(12px)', animation: 'float 9s ease-in-out infinite reverse', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
                <span style={{ fontSize: 20 }}>🔒</span>
                <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#fff', margin: 0 }}>Pago seguro</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>Yape · Plin</p>
                </div>
            </div>
            <div style={{ position: 'absolute', left: '1%', bottom: '22%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(168,204,240,0.15)', borderRadius: 14, padding: '12px 16px', backdropFilter: 'blur(12px)', animation: 'float 6s ease-in-out infinite', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
                <span style={{ fontSize: 20 }}>🇵🇪</span>
                <div>
                    <p style={{ fontSize: 11, fontWeight: 700, color: '#fff', margin: 0 }}>Hecho en Perú</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>Calidad premium</p>
                </div>
            </div>

            {/* LAYOUT SPLIT */}
            <div style={{
                position: 'relative', zIndex: 1,
                width: '100%', maxWidth: 1200,
                margin: '0 auto', padding: '80px 5%',
                display: 'flex', alignItems: 'center',
                gap: 48,
            }}>

                {/* IZQUIERDA — Contenido */}
                <div style={{ flex: 1, minWidth: 0 }}>

                    {/* Logo */}
                    <div style={{ marginBottom: 24 }}>
                        <div style={{
                            display: 'inline-block',
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(168,204,240,0.2)',
                            borderRadius: 16, padding: '12px 24px',
                            backdropFilter: 'blur(8px)',
                        }}>
                            <Image src="/integridadlogoh.webp" alt="Integridad Democrática" width={240} height={64} style={{ objectFit: 'contain', display: 'block' }} priority />
                        </div>
                    </div>

                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'rgba(168,204,240,0.15)', border: '1px solid rgba(168,204,240,0.3)',
                        padding: '6px 16px', borderRadius: 100, marginBottom: 20,
                    }}>
                        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                        <span style={{ fontSize: 11, color: '#a8ccf0', fontWeight: 600, letterSpacing: '0.1em' }}>TIENDA OFICIAL 2026</span>
                    </div>

                    {/* Título */}
                    <h1 style={{
                        fontWeight: 900, lineHeight: 1.05, marginBottom: 16,
                        fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#ffffff',
                        letterSpacing: '-0.02em',
                    }}>
                        Representa tus{' '}
                        <span style={{ color: '#5ba8f5' }}>valores</span>
                        <br />con orgullo.
                    </h1>

                    <p style={{
                        color: 'rgba(168,204,240,0.8)', fontSize: 16,
                        marginBottom: 32, lineHeight: 1.7, maxWidth: 440,
                    }}>
                        Merchandising oficial para militantes, simpatizantes y dirigentes de Integridad Democrática.
                    </p>

                    {/* CTAs */}
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
                        <Link href="/productos" style={{
                            padding: '14px 28px', borderRadius: 100,
                            background: '#3480d4', color: '#fff',
                            fontSize: 13, fontWeight: 700, letterSpacing: '0.06em',
                            textTransform: 'uppercase', textDecoration: 'none',
                            boxShadow: '0 8px 24px rgba(52,128,212,0.45)',
                            display: 'inline-block',
                        }}>
                            Ver catálogo →
                        </Link>
                        <Link href="/mis-pedidos" style={{
                            padding: '14px 28px', borderRadius: 100,
                            border: '1px solid rgba(168,204,240,0.35)',
                            background: 'rgba(168,204,240,0.05)',
                            fontSize: 13, fontWeight: 600, letterSpacing: '0.05em',
                            textTransform: 'uppercase', color: '#a8ccf0',
                            textDecoration: 'none', display: 'inline-block',
                        }}>
                            Mis pedidos
                        </Link>
                    </div>

                    {/* Stats */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(168,204,240,0.1)',
                        borderRadius: 16, overflow: 'hidden',
                        maxWidth: 420,
                    }}>
                        {[
                            { value: String(productsCount || 0), suffix: '+', label: 'Productos' },
                            { value: String(categoriesCount || 0), suffix: '+', label: 'Categorías' },
                            { value: '24', suffix: 'h', label: 'Entrega' },
                        ].map((s, i) => (
                            <div key={i} style={{
                                padding: '16px 12px', textAlign: 'center',
                                borderRight: i < 2 ? '1px solid rgba(168,204,240,0.1)' : 'none',
                            }}>
                                <p style={{ fontSize: 24, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 4 }}>
                                    {s.value}<span style={{ color: '#5ba8f5' }}>{s.suffix}</span>
                                </p>
                                <p style={{ fontSize: 9, color: 'rgba(168,204,240,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                                    {s.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DERECHA — Productos */}
                {featured.length > 0 && (
                    <div style={{ flexShrink: 0, width: 'clamp(280px, 35vw, 420px)' }}>

                        {/* Card producto principal */}
                        <div style={{
                            background: 'rgba(255,255,255,0.06)',
                            border: '1px solid rgba(52,128,212,0.25)',
                            borderRadius: 24, overflow: 'hidden',
                            backdropFilter: 'blur(12px)',
                            marginBottom: 12,
                            position: 'relative',
                        }}>
                            {/* Línea top */}
                            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 2, background: 'linear-gradient(90deg, transparent, #3480d4, transparent)' }} />

                            {/* Imagen */}
                            <div style={{
                                height: 220, position: 'relative', overflow: 'hidden',
                                background: 'rgba(52,128,212,0.1)',
                            }}>
                                {featured[activeProduct]?.image ? (
                                    <img
                                        src={storageUrl(featured[activeProduct].image)}
                                        alt={featured[activeProduct].name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.5s ease' }}
                                        onError={e => e.target.style.display = 'none'}
                                    />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ fontSize: 48, opacity: 0.3 }}>🛍️</span>
                                    </div>
                                )}
                                {/* Badge NUEVO */}
                                <div style={{
                                    position: 'absolute', top: 12, left: 12,
                                    background: 'rgba(74,222,128,0.2)', border: '1px solid rgba(74,222,128,0.4)',
                                    color: '#4ade80', fontSize: 9, fontWeight: 700,
                                    padding: '3px 10px', borderRadius: 100, letterSpacing: '0.1em',
                                }}>
                                    DESTACADO
                                </div>
                            </div>

                            {/* Info producto */}
                            <div style={{ padding: '16px 20px' }}>
                                <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {featured[activeProduct]?.name || 'Producto Oficial'}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: 20, fontWeight: 900, color: '#5ba8f5' }}>
                                        S/ {featured[activeProduct]?.sale_price || featured[activeProduct]?.price || '—'}
                                    </span>
                                    <Link href={`/productos/${featured[activeProduct]?.slug || ''}`} style={{
                                        background: '#3480d4', color: '#fff',
                                        fontSize: 11, fontWeight: 700, padding: '7px 16px',
                                        borderRadius: 100, textDecoration: 'none',
                                        letterSpacing: '0.06em',
                                    }}>
                                        Ver →
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Miniaturas productos */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                            {featured.map((p, i) => (
                                <div
                                    key={p.id}
                                    onClick={() => setActiveProduct(i)}
                                    style={{
                                        height: 72, borderRadius: 12, overflow: 'hidden',
                                        border: `2px solid ${i === activeProduct ? '#3480d4' : 'rgba(168,204,240,0.15)'}`,
                                        cursor: 'pointer', transition: 'all 0.25s ease',
                                        background: 'rgba(52,128,212,0.1)',
                                        opacity: i === activeProduct ? 1 : 0.6,
                                    }}
                                >
                                    {p.image ? (
                                        <img
                                            src={storageUrl(p.image)}
                                            alt={p.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            onError={e => e.target.style.display = 'none'}
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🛍️</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Dots indicadores */}
                        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12 }}>
                            {featured.map((_, i) => (
                                <div key={i} onClick={() => setActiveProduct(i)} style={{
                                    width: i === activeProduct ? 20 : 6, height: 6,
                                    borderRadius: 3, cursor: 'pointer',
                                    background: i === activeProduct ? '#3480d4' : 'rgba(168,204,240,0.3)',
                                    transition: 'all 0.3s ease',
                                }} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { box-shadow: 0 0 6px #4ade80; }
                    50% { box-shadow: 0 0 14px #4ade80; }
                }
            `}</style>
        </section>
    );
}