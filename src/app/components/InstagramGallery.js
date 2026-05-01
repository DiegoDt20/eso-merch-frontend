'use client';

import Link from 'next/link';
import { storageUrl } from '../lib/storage';

/**
 * Galería estilo Instagram con productos en grid.
 * Muestra los últimos productos como un mosaico.
 * Incluye overlay con info al hacer hover.
 */
export default function InstagramGallery({ products }) {
    // Toma los primeros 6 productos para la galería
    const gallery = products.slice(0, 6);

    if (gallery.length === 0) return null;

    return (
        <section style={{ background: '#e8f1fa', padding: '80px 24px' }}>
            <div style={{ maxWidth: 1152, margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 6 }}>
                        @eso.merch
                    </p>
                    <h2 style={{ fontSize: 32, fontWeight: 900, color: '#122a52', margin: 0, marginBottom: 8 }}>
                        Síguenos en Instagram
                    </h2>
                    <p style={{ color: '#3a6499', fontSize: 14 }}>
                        Descubre lo último de nuestra colección
                    </p>
                </div>

                {/* Grid de imágenes */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: 8,
                }}>
                    {gallery.map(product => (
                        <Link key={product.id} href={`/productos/${product.slug}`} style={{
                            position: 'relative', aspectRatio: '1 / 1',
                            borderRadius: 8, overflow: 'hidden',
                            background: '#daeaf8', textDecoration: 'none',
                            cursor: 'pointer', display: 'block',
                        }}>
                            {product.image ? (
                                <img
                                    src={storageUrl(product.image)}
                                    alt={product.name}
                                    style={{
                                        width: '100%', height: '100%',
                                        objectFit: 'cover', transition: 'transform 0.4s',
                                    }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ color: 'rgba(27,63,114,0.15)', fontWeight: 900, fontSize: 30 }}>ESO</span>
                                </div>
                            )}

                            {/* Overlay con info al hacer hover */}
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'linear-gradient(to top, rgba(18,42,82,0.9) 0%, transparent 60%)',
                                padding: 12, display: 'flex',
                                flexDirection: 'column', justifyContent: 'flex-end',
                                opacity: 0, transition: 'opacity 0.3s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.opacity = 1}
                            onMouseLeave={e => e.currentTarget.style.opacity = 0}
                            >
                                <p style={{ color: '#fff', fontSize: 12, fontWeight: 600, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {product.name}
                                </p>
                                <p style={{ color: '#a8ccf0', fontSize: 12, fontWeight: 700 }}>
                                    S/. {product.sale_price ?? product.price}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}