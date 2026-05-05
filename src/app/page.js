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
        <main style={{ background: '#0f2240' }}>

            {/* ── HERO ── */}
            {!loading && (
    <Hero productsCount={products.length} categoriesCount={categories.length} products={products} />
)}

            {/* ── BENEFITS ── */}
            <FadeIn><Benefits /></FadeIn>

            {/* ── CARRUSEL PRODUCTOS ── */}
            {!loading && products.length > 0 && (
                <FadeIn><Carousel products={products} /></FadeIn>
            )}

            {/* ── CATEGORÍAS ── */}
            {categories.length > 0 && (
                <FadeIn>
                    <section style={{
                        background: '#112448',
                        padding: '80px 5%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderTop: '1px solid rgba(52,128,212,0.15)',
                        borderBottom: '1px solid rgba(52,128,212,0.15)',
                    }}>
                        {/* Glow decorativo */}
                        <div style={{
                            position: 'absolute', top: -100, right: -100,
                            width: 400, height: 400, borderRadius: '50%',
                            background: 'rgba(52,128,212,0.08)',
                            filter: 'blur(60px)', pointerEvents: 'none',
                        }} />
                        <div style={{
                            position: 'absolute', bottom: -80, left: -80,
                            width: 300, height: 300, borderRadius: '50%',
                            background: 'rgba(27,63,114,0.1)',
                            filter: 'blur(50px)', pointerEvents: 'none',
                        }} />

                        <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative', zIndex: 1 }}>

                            {/* Header */}
                            <div style={{
                                display: 'flex', justifyContent: 'space-between',
                                alignItems: 'flex-end', marginBottom: 40,
                                flexWrap: 'wrap', gap: 16,
                            }}>
                                <div>
                                    <p style={{
                                        fontSize: 10, letterSpacing: '0.3em',
                                        textTransform: 'uppercase', color: '#5ba8f5',
                                        fontWeight: 700, marginBottom: 6,
                                    }}>
                                        Explora
                                    </p>
                                    <h2 style={{
                                        fontSize: 'clamp(22px, 3vw, 32px)',
                                        fontWeight: 900, color: '#fff', margin: 0,
                                    }}>
                                        Categorías
                                    </h2>
                                </div>
                                <Link href="/productos" style={{
                                    fontSize: 12, color: '#5ba8f5',
                                    textDecoration: 'none', fontWeight: 600,
                                    letterSpacing: '0.05em',
                                    padding: '9px 20px', borderRadius: 100,
                                    border: '1px solid rgba(52,128,212,0.3)',
                                    background: 'rgba(52,128,212,0.1)',
                                    transition: 'all 0.2s',
                                }}>
                                    Ver todo →
                                </Link>
                            </div>

                            {/* Grid categorías */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
                                gap: 14,
                            }}>
                                {categories.map((cat) => (
                                    <Link key={cat.id} href={`/productos?categoria=${cat.slug}`} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(52,128,212,0.2)',
                                        borderRadius: 18, padding: '24px 18px',
                                        textDecoration: 'none',
                                        display: 'block',
                                        transition: 'all 0.25s ease',
                                        position: 'relative', overflow: 'hidden',
                                    }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = 'rgba(52,128,212,0.12)';
                                            e.currentTarget.style.borderColor = 'rgba(52,128,212,0.45)';
                                            e.currentTarget.style.transform = 'translateY(-3px)';
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(52,128,212,0.2)';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {/* Glow esquina */}
                                        <div style={{
                                            position: 'absolute', top: -20, right: -20,
                                            width: 80, height: 80, borderRadius: '50%',
                                            background: 'rgba(52,128,212,0.08)',
                                            pointerEvents: 'none',
                                        }} />

                                        {/* Ícono */}
                                        <div style={{
                                            width: 48, height: 48, borderRadius: 13,
                                            background: 'rgba(52,128,212,0.15)',
                                            border: '1px solid rgba(52,128,212,0.25)',
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 14, fontSize: 22,
                                        }}>
                                            {getCategoryIcon(cat.name)}
                                        </div>

                                        <p style={{
                                            fontWeight: 700, fontSize: 13,
                                            marginBottom: 6, color: '#fff',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em',
                                        }}>
                                            {cat.name}
                                        </p>
                                        <div style={{
                                            display: 'flex', alignItems: 'center',
                                            justifyContent: 'space-between',
                                        }}>
                                            <p style={{ color: 'rgba(168,204,240,0.55)', fontSize: 11 }}>
                                                {cat.products_count || 0} productos
                                            </p>
                                            <span style={{ color: '#5ba8f5', fontSize: 14 }}>→</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                </FadeIn>
            )}

            {/* ── PRODUCTOS DESTACADOS ── */}
            <FadeIn>
                <section style={{
                    background: '#162f5c',
                    padding: '80px 5%',
                    position: 'relative',
                    borderTop: '1px solid rgba(52,128,212,0.15)',
                }}>
                    {/* Patrón diagonal sutil */}
                    <div style={{
                        position: 'absolute', inset: 0, opacity: 0.03,
                        backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 50px)',
                        pointerEvents: 'none',
                    }} />

                    <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative', zIndex: 1 }}>

                        {/* Header */}
                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'flex-end', marginBottom: 40,
                            flexWrap: 'wrap', gap: 16,
                        }}>
                            <div>
                                <p style={{
                                    fontSize: 10, letterSpacing: '0.3em',
                                    textTransform: 'uppercase', color: '#5ba8f5',
                                    fontWeight: 700, marginBottom: 6,
                                }}>
                                    Lo más vendido
                                </p>
                                <h2 style={{
                                    fontSize: 'clamp(22px, 3vw, 32px)',
                                    fontWeight: 900, color: '#fff', margin: 0,
                                }}>
                                    Productos destacados
                                </h2>
                            </div>
                            <Link href="/productos" style={{
                                fontSize: 12, color: '#5ba8f5',
                                textDecoration: 'none', fontWeight: 600,
                                padding: '9px 20px', borderRadius: 100,
                                border: '1px solid rgba(52,128,212,0.3)',
                                background: 'rgba(52,128,212,0.1)',
                            }}>
                                Ver todo →
                            </Link>
                        </div>

                        {/* Skeletons de carga */}
                        {loading ? (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                gap: 20,
                            }}>
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} style={{
                                        borderRadius: 18, overflow: 'hidden',
                                        border: '1px solid rgba(52,128,212,0.15)',
                                        background: 'rgba(255,255,255,0.04)',
                                    }}>
                                        <div style={{
                                            height: 220,
                                            background: 'linear-gradient(135deg, rgba(52,128,212,0.1), rgba(27,63,114,0.2))',
                                        }} />
                                        <div style={{ padding: 16 }}>
                                            <div style={{
                                                height: 14, width: '70%',
                                                background: 'rgba(52,128,212,0.1)',
                                                borderRadius: 6, marginBottom: 8,
                                            }} />
                                            <div style={{
                                                height: 12, width: '40%',
                                                background: 'rgba(52,128,212,0.08)',
                                                borderRadius: 6,
                                            }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                                gap: 20,
                            }}>
                                {products.slice(0, 8).map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </FadeIn>

            {/* ── COUNTDOWN ── */}
            <FadeIn><Countdown /></FadeIn>

            {/* ── TESTIMONIALS ── */}
            <FadeIn><Testimonials /></FadeIn>

            {/* ── NEWSLETTER ── */}
            <FadeIn><Newsletter /></FadeIn>

            {/* ── INSTAGRAM GALLERY ── */}
            {!loading && products.length > 0 && (
                <FadeIn><InstagramGallery products={products} /></FadeIn>
            )}

            {/* ── CTA FINAL ── */}
            <FadeIn>
                <section style={{
                    margin: '0 24px 80px',
                    borderRadius: 24,
                    background: 'linear-gradient(135deg, #1a3a6b 0%, #0f2240 50%, #1b3f72 100%)',
                    position: 'relative', overflow: 'hidden',
                    border: '1px solid rgba(52,128,212,0.2)',
                }}>
                    {/* Decoraciones */}
                    <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(circle at 20% 50%, rgba(52,128,212,0.12), transparent 50%)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute', right: -60, top: '50%',
                        transform: 'translateY(-50%)',
                        width: 300, height: 300, borderRadius: '50%',
                        border: '1px solid rgba(52,128,212,0.15)',
                        pointerEvents: 'none',
                    }} />
                    <div style={{
                        position: 'absolute', right: -20, top: '50%',
                        transform: 'translateY(-50%)',
                        width: 180, height: 180, borderRadius: '50%',
                        border: '1px solid rgba(52,128,212,0.1)',
                        pointerEvents: 'none',
                    }} />
                    {/* Dots decorativos */}
                    <div style={{ position: 'absolute', left: '5%', top: '25%', width: 7, height: 7, borderRadius: '50%', background: 'rgba(91,168,245,0.4)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', left: '12%', bottom: '25%', width: 5, height: 5, borderRadius: '50%', background: 'rgba(168,204,240,0.3)', pointerEvents: 'none' }} />
                    <div style={{ position: 'absolute', right: '18%', top: '20%', width: 4, height: 4, borderRadius: '50%', background: 'rgba(91,168,245,0.3)', pointerEvents: 'none' }} />

                    <div style={{
                        position: 'relative', zIndex: 1,
                        padding: '72px 24px', textAlign: 'center',
                        maxWidth: 680, margin: '0 auto',
                    }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'rgba(52,128,212,0.18)',
                            border: '1px solid rgba(52,128,212,0.4)',
                            padding: '5px 16px', borderRadius: 100, marginBottom: 20,
                        }}>
                            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                            <span style={{ fontSize: 10, color: '#a8ccf0', fontWeight: 700, letterSpacing: '0.2em' }}>
                                COLECCIÓN OFICIAL 2026
                            </span>
                        </div>

                        <h2 style={{
                            fontSize: 'clamp(2.2rem, 6vw, 3.8rem)',
                            fontWeight: 900, textTransform: 'uppercase',
                            marginBottom: 14, color: '#fff',
                            lineHeight: 1, letterSpacing: '-0.02em',
                        }}>
                            Merch<br/>
                            <span style={{ color: '#5ba8f5' }}>Oficial</span>
                        </h2>
                        <p style={{
                            color: 'rgba(168,204,240,0.75)',
                            marginBottom: 36, fontSize: 15, lineHeight: 1.7,
                        }}>
                            Representa a Integridad Democrática con productos exclusivos de alta calidad.
                        </p>
                        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/productos" style={{
                                padding: '14px 32px', borderRadius: 100,
                                background: '#3480d4', color: '#fff',
                                fontSize: 13, fontWeight: 800,
                                letterSpacing: '0.06em', textTransform: 'uppercase',
                                textDecoration: 'none',
                                boxShadow: '0 6px 24px rgba(52,128,212,0.45)',
                                transition: 'all 0.25s ease',
                                display: 'inline-block',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(52,128,212,0.6)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 6px 24px rgba(52,128,212,0.45)';
                                }}
                            >
                                Comprar ahora →
                            </Link>
                            <Link href="/mis-pedidos" style={{
                                padding: '14px 32px', borderRadius: 100,
                                border: '1px solid rgba(168,204,240,0.3)',
                                background: 'rgba(255,255,255,0.06)',
                                color: '#a8ccf0', fontSize: 13, fontWeight: 600,
                                letterSpacing: '0.05em', textTransform: 'uppercase',
                                textDecoration: 'none', display: 'inline-block',
                                transition: 'all 0.25s ease',
                            }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
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

// ── Componente ProductCard interno ──
function ProductCard({ product }) {
    const [hovered, setHovered] = useState(false);

    return (
        <Link
            href={`/productos/${product.slug}`}
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{
                background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.05)',
                border: `1px solid ${hovered ? 'rgba(52,128,212,0.45)' : 'rgba(52,128,212,0.2)'}`,
                borderRadius: 18, overflow: 'hidden',
                transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
                transition: 'all 0.25s ease',
            }}>
                {/* Imagen */}
                <div style={{
                    height: 220,
                    background: 'linear-gradient(135deg, rgba(52,128,212,0.12), rgba(27,63,114,0.25))',
                    position: 'relative', overflow: 'hidden',
                }}>
                    {product.image ? (
                        <img
                            src={storageUrl(product.image)}
                            alt={product.name}
                            style={{
                                width: '100%', height: '100%', objectFit: 'cover',
                                transform: hovered ? 'scale(1.05)' : 'scale(1)',
                                transition: 'transform 0.4s ease',
                            }}
                        />
                    ) : (
                        <div style={{
                            width: '100%', height: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <span style={{
                                color: 'rgba(91,168,245,0.15)',
                                fontWeight: 900, fontSize: 48,
                            }}>
                                ID
                            </span>
                        </div>
                    )}

                    {/* Badge oferta */}
                    {product.sale_price && (
                        <span style={{
                            position: 'absolute', top: 10, left: 10,
                            background: '#3480d4', color: '#fff',
                            fontSize: 9, fontWeight: 700,
                            padding: '3px 10px', borderRadius: 100,
                            letterSpacing: '0.1em',
                            boxShadow: '0 3px 10px rgba(52,128,212,0.4)',
                        }}>
                            OFERTA
                        </span>
                    )}

                    {/* Overlay hover */}
                    {hovered && (
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'rgba(10,22,40,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <div style={{
                                background: '#3480d4', color: '#fff',
                                fontSize: 11, fontWeight: 700,
                                padding: '8px 18px', borderRadius: 100,
                                letterSpacing: '0.08em',
                            }}>
                                Ver producto
                            </div>
                        </div>
                    )}
                </div>

                {/* Info */}
                <div style={{ padding: '14px 16px 18px' }}>
                    <p style={{
                        fontWeight: 600, fontSize: 13, color: '#fff',
                        marginBottom: 10,
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                    }}>
                        {product.name}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            {product.sale_price ? (
                                <>
                                    <span style={{ fontWeight: 800, fontSize: 15, color: '#5ba8f5' }}>
                                        S/. {product.sale_price}
                                    </span>
                                    <span style={{
                                        fontSize: 11, color: 'rgba(168,204,240,0.4)',
                                        textDecoration: 'line-through',
                                    }}>
                                        S/. {product.price}
                                    </span>
                                </>
                            ) : (
                                <span style={{ fontWeight: 800, fontSize: 15, color: '#5ba8f5' }}>
                                    S/. {product.price}
                                </span>
                            )}
                        </div>
                        <span style={{
                            fontSize: 10, color: '#5ba8f5', fontWeight: 600,
                            background: 'rgba(52,128,212,0.15)',
                            border: '1px solid rgba(52,128,212,0.3)',
                            padding: '4px 10px', borderRadius: 100,
                        }}>
                            Ver →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}