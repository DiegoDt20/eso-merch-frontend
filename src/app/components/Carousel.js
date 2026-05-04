'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Carousel({ products = [] }) {
    const trackRef = useRef(null);
    const [activeDot, setActiveDot] = useState(0);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(true);

    // Productos de demo si no llegan por props
    const DEMO = [
        { id: 1, name: 'Polo Oficial ID', category: 'Vestimenta', price: 45, badge: 'NUEVO',   badgeColor: '#4ade80', badgeBg: 'rgba(74,222,128,0.15)',  badgeBorder: 'rgba(74,222,128,0.35)',  accent: 'rgba(52,128,212,0.25)' },
        { id: 2, name: 'Gorra Oficial',   category: 'Accesorios',  price: 30, badge: 'POPULAR', badgeColor: '#f87171', badgeBg: 'rgba(239,68,68,0.15)',   badgeBorder: 'rgba(239,68,68,0.35)',   accent: 'rgba(27,63,114,0.4)'   },
        { id: 3, name: 'Taza Oficial',    category: 'Hogar',        price: 20, badge: 'OFERTA',  badgeColor: '#fbbf24', badgeBg: 'rgba(245,158,11,0.15)',  badgeBorder: 'rgba(245,158,11,0.35)', accent: 'rgba(16,185,129,0.2)'  },
        { id: 4, name: 'Cuaderno ID',     category: 'Papelería',    price: 18, badge: 'NUEVO',   badgeColor: '#4ade80', badgeBg: 'rgba(74,222,128,0.15)',  badgeBorder: 'rgba(74,222,128,0.35)',  accent: 'rgba(245,158,11,0.2)'  },
        { id: 5, name: 'Pin Metálico',    category: 'Accesorios',   price: 12, badge: 'POPULAR', badgeColor: '#f87171', badgeBg: 'rgba(239,68,68,0.15)',   badgeBorder: 'rgba(239,68,68,0.35)',   accent: 'rgba(239,68,68,0.2)'   },
        { id: 6, name: 'Sticker Pack',    category: 'Papelería',    price: 8,  badge: 'NUEVO',   badgeColor: '#4ade80', badgeBg: 'rgba(74,222,128,0.15)',  badgeBorder: 'rgba(74,222,128,0.35)',  accent: 'rgba(52,128,212,0.18)' },
    ];

    const items = products.length > 0 ? products : DEMO;
    const DOTS = Math.ceil(items.length / 3);

    const updateState = () => {
        const t = trackRef.current;
        if (!t) return;
        setCanLeft(t.scrollLeft > 10);
        setCanRight(t.scrollLeft < t.scrollWidth - t.clientWidth - 10);
        const pct = t.scrollLeft / (t.scrollWidth - t.clientWidth);
        setActiveDot(Math.round(pct * (DOTS - 1)));
    };

    const scroll = (dir) => {
        const t = trackRef.current;
        if (!t) return;
        t.scrollBy({ left: dir * 340, behavior: 'smooth' });
    };

    const scrollToDot = (i) => {
        const t = trackRef.current;
        if (!t) return;
        const target = (i / (DOTS - 1)) * (t.scrollWidth - t.clientWidth);
        t.scrollTo({ left: target, behavior: 'smooth' });
    };

    useEffect(() => {
        const t = trackRef.current;
        if (!t) return;
        t.addEventListener('scroll', updateState);
        updateState();
        return () => t.removeEventListener('scroll', updateState);
    }, []);

    return (
        <section style={{
            background: '#162f5c',
            padding: '40px 0 36px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Línea top decorativa */}
            <div style={{
                position: 'absolute', top: 0, left: '8%', right: '8%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,128,212,0.4), transparent)',
            }} />

            {/* HEADER */}
            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 5%', marginBottom: 20,
            }}>
                <div>
                    <p style={{
                        fontSize: 10, color: '#5ba8f5', fontWeight: 700,
                        letterSpacing: '0.25em', textTransform: 'uppercase',
                        marginBottom: 5,
                    }}>
                        Colección 2026
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(18px, 3vw, 24px)',
                        fontWeight: 800, color: '#fff', margin: 0,
                    }}>
                        Lo más popular
                    </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {/* Botones prev/next */}
                    {[{ dir: -1, disabled: !canLeft }, { dir: 1, disabled: !canRight }].map(({ dir, disabled }, i) => (
                        <button key={i} onClick={() => scroll(dir)} style={{
                            width: 36, height: 36, borderRadius: '50%',
                            background: disabled ? 'rgba(52,128,212,0.08)' : 'rgba(52,128,212,0.2)',
                            border: `1px solid ${disabled ? 'rgba(52,128,212,0.15)' : 'rgba(52,128,212,0.4)'}`,
                            color: disabled ? 'rgba(168,204,240,0.3)' : '#a8ccf0',
                            cursor: disabled ? 'default' : 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            fontSize: 14,
                        }}>
                            {dir === -1 ? '←' : '→'}
                        </button>
                    ))}

                    <Link href="/productos" style={{
                        fontSize: 12, color: '#5ba8f5',
                        textDecoration: 'none',
                        border: '1px solid rgba(52,128,212,0.3)',
                        padding: '7px 16px', borderRadius: 100,
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,128,212,0.12)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                        Ver todo →
                    </Link>
                </div>
            </div>

            {/* TRACK */}
            <div
                ref={trackRef}
                style={{
                    display: 'flex',
                    gap: 14,
                    padding: '4px 5% 8px',
                    overflowX: 'auto',
                    scrollbarWidth: 'none',
                    WebkitOverflowScrolling: 'touch',
                    scrollSnapType: 'x mandatory',
                }}
            >
                {items.map((item, i) => (
                    <ProductCard key={item.id || i} item={item} />
                ))}
            </div>

            {/* DOTS */}
            <div style={{
                display: 'flex', gap: 6,
                justifyContent: 'center', marginTop: 16,
            }}>
                {Array.from({ length: DOTS }).map((_, i) => (
                    <button key={i} onClick={() => scrollToDot(i)} style={{
                        width: i === activeDot ? 20 : 6,
                        height: 6, borderRadius: 3,
                        background: i === activeDot ? '#3480d4' : 'rgba(52,128,212,0.3)',
                        border: 'none', cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        padding: 0,
                    }} />
                ))}
            </div>

            {/* Línea bottom decorativa */}
            <div style={{
                position: 'absolute', bottom: 0, left: '8%', right: '8%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,128,212,0.25), transparent)',
            }} />

            <style>{`
                div::-webkit-scrollbar { display: none; }
            `}</style>
        </section>
    );
}

function ProductCard({ item }) {
    const [hovered, setHovered] = useState(false);

    // Si el item viene de la API real, usa item.image, item.price, etc.
    const name     = item.name     || item.nombre     || 'Producto';
    const category = item.category || item.categoria  || '';
    const price    = item.price    || item.precio      || 0;
    const image    = item.image    || item.imagen      || null;
    const slug     = item.slug     || item.id          || '#';

    const badge       = item.badge       || null;
    const badgeColor  = item.badgeColor  || '#4ade80';
    const badgeBg     = item.badgeBg     || 'rgba(74,222,128,0.15)';
    const badgeBorder = item.badgeBorder || 'rgba(74,222,128,0.35)';
    const accent      = item.accent      || 'rgba(52,128,212,0.25)';

    return (
        <Link href={`/productos/${slug}`} style={{ textDecoration: 'none' }}>
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    flex: '0 0 168px',
                    background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${hovered ? 'rgba(52,128,212,0.4)' : 'rgba(52,128,212,0.2)'}`,
                    borderRadius: 16,
                    overflow: 'hidden',
                    scrollSnapAlign: 'start',
                    transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                }}
            >
                {/* Imagen / placeholder */}
                <div style={{
                    height: 120,
                    background: `linear-gradient(135deg, ${accent}, rgba(15,34,64,0.6))`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    position: 'relative',
                }}>
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    ) : (
                        <div style={{
                            width: 52, height: 52, borderRadius: 13,
                            background: accent,
                            border: `1px solid rgba(52,128,212,0.4)`,
                        }} />
                    )}

                    {/* Badge */}
                    {badge && (
                        <span style={{
                            position: 'absolute', top: 8, left: 8,
                            fontSize: 8, fontWeight: 700,
                            background: badgeBg,
                            border: `1px solid ${badgeBorder}`,
                            color: badgeColor,
                            padding: '3px 9px', borderRadius: 100,
                            letterSpacing: '0.1em',
                        }}>
                            {badge}
                        </span>
                    )}

                    {/* Hover overlay */}
                    {hovered && (
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(10,22,40,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s',
                        }}>
                            <div style={{
                                background: '#3480d4',
                                color: '#fff', fontSize: 10, fontWeight: 700,
                                padding: '6px 14px', borderRadius: 100,
                                letterSpacing: '0.08em',
                            }}>
                                Ver producto
                            </div>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div style={{ padding: '12px 14px 14px' }}>
                    {category && (
                        <p style={{
                            fontSize: 9, color: 'rgba(168,204,240,0.4)',
                            letterSpacing: '0.14em', textTransform: 'uppercase',
                            marginBottom: 3,
                        }}>
                            {category}
                        </p>
                    )}
                    <p style={{
                        fontSize: 13, fontWeight: 600, color: '#fff',
                        marginBottom: 8, lineHeight: 1.3,
                    }}>
                        {name}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: 15, fontWeight: 800, color: '#5ba8f5' }}>
                            S/ {Number(price).toFixed(2)}
                        </span>
                        <div style={{
                            width: 28, height: 28, borderRadius: '50%',
                            background: hovered ? '#3480d4' : 'rgba(52,128,212,0.2)',
                            border: '1px solid rgba(52,128,212,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.2s ease',
                            fontSize: 13, color: '#fff',
                        }}>
                            →
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}