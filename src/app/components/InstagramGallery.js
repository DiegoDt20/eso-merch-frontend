'use client';

import { useState } from 'react';

// ⚙️ CAMBIA ESTO: pon tu usuario real de Instagram
const INSTAGRAM_USER = 'integridaddemocratica';
const INSTAGRAM_URL  = `https://www.instagram.com/${INSTAGRAM_USER}/`;

// ⚙️ Si tienes imágenes reales, reemplaza las URLs aquí
// Por ahora usa placeholders con colores de la marca
const DEMO_POSTS = [
    { id: 1, likes: 142, comments: 18, span: 'tall', bg: 'linear-gradient(135deg, #1a3a6b, #3480d4)' },
    { id: 2, likes: 89,  comments: 7,  span: 'normal', bg: 'linear-gradient(135deg, #162f5c, #1b3f72)' },
    { id: 3, likes: 203, comments: 24, span: 'normal', bg: 'linear-gradient(135deg, #0f2240, #3480d4)' },
    { id: 4, likes: 67,  comments: 5,  span: 'normal', bg: 'linear-gradient(135deg, #1b3f72, #162f5c)' },
    { id: 5, likes: 118, comments: 11, span: 'normal', bg: 'linear-gradient(135deg, #112448, #1a3a6b)' },
    { id: 6, likes: 95,  comments: 9,  span: 'normal', bg: 'linear-gradient(135deg, #3480d4, #0f2240)' },
    { id: 7, likes: 176, comments: 21, span: 'normal', bg: 'linear-gradient(135deg, #162f5c, #3480d4)' },
];

function HeartIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
            <path d="M7 12.3S1.2 8.5 1.2 4.8A2.8 2.8 0 017 3.2a2.8 2.8 0 015.8 1.6C12.8 8.5 7 12.3 7 12.3z"/>
        </svg>
    );
}

function CommentIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="white" strokeWidth="1.4">
            <path d="M2 2.5h10a.5.5 0 01.5.5v6a.5.5 0 01-.5.5H4.5L2 11.5V3a.5.5 0 01.5-.5z" strokeLinejoin="round"/>
        </svg>
    );
}

function InstagramIcon({ size = 16, color = '#fff' }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
        </svg>
    );
}

function GalleryItem({ post, index }) {
    const [hovered, setHovered] = useState(false);
    const isTall = post.span === 'tall';

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                gridRow: isTall ? 'span 2' : 'span 1',
                borderRadius: 12,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer',
                background: post.bg,
                minHeight: isTall ? 'auto' : 100,
                transition: 'transform 0.3s ease',
                transform: hovered ? 'scale(1.02)' : 'scale(1)',
            }}
        >
            {/* Imagen real si existe */}
            {post.image && (
                <img
                    src={post.image}
                    alt={`Post ${index + 1}`}
                    style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        position: 'absolute', inset: 0,
                    }}
                />
            )}

            {/* Placeholder decorativo cuando no hay imagen */}
            {!post.image && (
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    opacity: 0.2,
                }}>
                    <InstagramIcon size={28} color="#fff" />
                </div>
            )}

            {/* Overlay hover */}
            <div style={{
                position: 'absolute', inset: 0,
                background: hovered ? 'rgba(10,22,40,0.65)' : 'rgba(10,22,40,0)',
                transition: 'background 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 20,
            }}>
                {hovered && (
                    <>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 5,
                            animation: 'fadeInUp 0.2s ease both',
                        }}>
                            <HeartIcon />
                            <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>
                                {post.likes}
                            </span>
                        </div>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 5,
                            animation: 'fadeInUp 0.2s ease 0.05s both',
                        }}>
                            <CommentIcon />
                            <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>
                                {post.comments}
                            </span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default function InstagramGallery({ posts = [] }) {
    const items = posts.length > 0 ? posts : DEMO_POSTS;

    return (
        <section style={{
            background: '#112448',
            borderTop: '1px solid rgba(52,128,212,0.15)',
            padding: '52px 5% 56px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Glow top */}
            <div style={{
                position: 'absolute', top: -80, left: '50%',
                transform: 'translateX(-50%)',
                width: 500, height: 200,
                background: 'radial-gradient(ellipse, rgba(52,128,212,0.15), transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>

                {/* HEADER */}
                <div style={{
                    display: 'flex', alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap', gap: 16,
                    marginBottom: 28,
                }}>
                    <div>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: 7,
                            marginBottom: 8,
                        }}>
                            <InstagramIcon size={15} color="#5ba8f5" />
                            <span style={{
                                fontSize: 10, color: '#5ba8f5', fontWeight: 700,
                                letterSpacing: '0.25em', textTransform: 'uppercase',
                            }}>
                                @{INSTAGRAM_USER}
                            </span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(20px, 3vw, 28px)',
                            fontWeight: 800, color: '#fff', margin: 0,
                        }}>
                            Nuestra comunidad
                        </h2>
                        <p style={{
                            fontSize: 13, color: 'rgba(168,204,240,0.55)',
                            marginTop: 6, lineHeight: 1.6,
                        }}>
                            Militantes que ya representan el cambio. ¿Y tú?
                        </p>
                    </div>

                    {/* CTA Instagram */}
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: 8,
                            background: 'rgba(52,128,212,0.15)',
                            border: '1px solid rgba(52,128,212,0.35)',
                            color: '#a8ccf0', fontSize: 12, fontWeight: 600,
                            padding: '10px 20px', borderRadius: 100,
                            textDecoration: 'none',
                            transition: 'all 0.25s ease',
                            backdropFilter: 'blur(8px)',
                            letterSpacing: '0.04em',
                            flexShrink: 0,
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(52,128,212,0.28)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(52,128,212,0.15)';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        <InstagramIcon size={14} color="#a8ccf0" />
                        Seguir en Instagram
                    </a>
                </div>

                {/* GRID */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: '120px',
                    gap: 10,
                }}>
                    {items.slice(0, 7).map((post, i) => (
                        <GalleryItem key={post.id || i} post={post} index={i} />
                    ))}
                </div>

                {/* FOOTER — stats de comunidad */}
                <div style={{
                    marginTop: 28,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 12,
                }}>
                    {[
                        { value: '4.8K', label: 'Seguidores' },
                        { value: '890+', label: 'Publicaciones' },
                        { value: '98%', label: 'Recomiendan' },
                    ].map((s, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(52,128,212,0.15)',
                            borderRadius: 14, padding: '18px 16px',
                            textAlign: 'center',
                        }}>
                            <p style={{
                                fontSize: 22, fontWeight: 900, color: '#fff',
                                lineHeight: 1, marginBottom: 5,
                            }}>
                                {s.value.slice(0, -1)}
                                <span style={{ color: '#5ba8f5' }}>{s.value.slice(-1)}</span>
                            </p>
                            <p style={{
                                fontSize: 10, color: 'rgba(168,204,240,0.5)',
                                letterSpacing: '0.15em', textTransform: 'uppercase',
                            }}>
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}