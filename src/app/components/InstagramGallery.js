'use client';

import Link from 'next/link';
import { storageUrl } from '../lib/storage';

export default function InstagramGallery({ products }) {
    const gallery = products.slice(0, 6);

    if (gallery.length === 0) return null;

    return (
        <section style={{
            background: '#0a1628',
            padding: '96px 24px',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Decoraciones */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(52,128,212,0.1), transparent 60%)',
            }} />
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.03,
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }} />

            <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56 }}>
                    <p style={{
                        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
                        color: '#3480d4', fontWeight: 700, marginBottom: 10,
                    }}>
                        @integridaddemocratica
                    </p>
                    <h2 style={{ fontSize: 36, fontWeight: 900, color: '#fff', margin: '0 0 12px' }}>
                        Nuestra colección
                    </h2>
                    <p style={{ color: 'rgba(168,204,240,0.6)', fontSize: 15 }}>
                        Productos exclusivos que representan nuestros valores
                    </p>
                </div>

                {/* Grid de imágenes */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 12,
                }}>
                    {gallery.map((product, i) => (
                        <Link key={product.id} href={`/productos/${product.slug}`} style={{
                            position: 'relative',
                            aspectRatio: '1 / 1',
                            borderRadius: i === 0 ? 20 : 16,
                            overflow: 'hidden',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(168,204,240,0.1)',
                            textDecoration: 'none',
                            display: 'block',
                            gridColumn: i === 0 ? 'span 2' : 'span 1',
                            gridRow: i === 0 ? 'span 2' : 'span 1',
                        }}>
                            {product.image ? (
                                <img
                                    src={storageUrl(product.image)}
                                    alt={product.name}
                                    style={{
                                        width: '100%', height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s',
                                    }}
                                />
                            ) : (
                                <div style={{
                                    width: '100%', height: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: 'rgba(52,128,212,0.1)',
                                }}>
                                    <span style={{ color: 'rgba(168,204,240,0.2)', fontWeight: 900, fontSize: i === 0 ? 48 : 24 }}>ID</span>
                                </div>
                            )}

                            {/* Overlay hover */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.3) 50%, transparent 100%)',
                                padding: '16px', display: 'flex',
                                flexDirection: 'column', justifyContent: 'flex-end',
                                opacity: 0, transition: 'opacity 0.3s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 1}
                            onMouseLeave={e => e.currentTarget.style.opacity = 0}
                            >
                                <p style={{
                                    color: '#fff', fontSize: i === 0 ? 14 : 12,
                                    fontWeight: 700, marginBottom: 4,
                                    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                                }}>
                                    {product.name}
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <p style={{ color: '#a8ccf0', fontSize: 13, fontWeight: 800 }}>
                                        S/. {product.sale_price ?? product.price}
                                    </p>
                                    <span style={{
                                        background: '#3480d4', color: '#fff',
                                        fontSize: 10, fontWeight: 700,
                                        padding: '3px 8px', borderRadius: 100,
                                    }}>
                                        Ver →
                                    </span>
                                </div>
                            </div>

                            {/* Badge oferta */}
                            {product.sale_price && (
                                <div style={{
                                    position: 'absolute', top: 10, left: 10,
                                    background: 'linear-gradient(135deg, #3480d4, #1b3f72)',
                                    color: '#fff', fontSize: 10, fontWeight: 700,
                                    padding: '3px 8px', borderRadius: 100,
                                }}>
                                    OFERTA
                                </div>
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', marginTop: 48 }}>
                    <Link href="/productos" style={{
                        padding: '14px 32px', borderRadius: 100,
                        border: '1px solid rgba(168,204,240,0.3)',
                        background: 'rgba(168,204,240,0.05)',
                        color: '#a8ccf0', fontSize: 13, fontWeight: 600,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        textDecoration: 'none', display: 'inline-block',
                        backdropFilter: 'blur(8px)',
                    }}>
                        Ver toda la colección →
                    </Link>
                </div>
            </div>
        </section>
    );
}