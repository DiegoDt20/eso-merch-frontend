'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ productsCount, categoriesCount }) {
    return (
        <section style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #1b3f72 0%, #122a52 100%)',
        }}>
            {/* Patrón de puntos */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.15,
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }} />

            {/* Glow central */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700, height: 700, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(52,128,212,0.4), transparent 70%)',
                filter: 'blur(80px)',
            }} />

            {/* Círculos animados */}
            <div style={{
                position: 'absolute', top: '10%', right: '5%',
                width: 300, height: 300, borderRadius: '50%',
                border: '1px solid rgba(168,204,240,0.1)',
                animation: 'spin 20s linear infinite',
            }} />
            <div style={{
                position: 'absolute', top: '10%', right: '5%',
                width: 200, height: 200, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.15)',
                animation: 'spin 15s linear infinite reverse',
                margin: '50px',
            }} />
            <div style={{
                position: 'absolute', bottom: '5%', left: '3%',
                width: 250, height: 250, borderRadius: '50%',
                border: '1px solid rgba(168,204,240,0.08)',
                animation: 'spin 25s linear infinite',
            }} />

            {/* Círculos sólidos flotantes */}
            <div style={{
                position: 'absolute', top: '20%', right: '10%',
                width: 80, height: 80, borderRadius: '50%',
                background: 'rgba(168,204,240,0.1)', border: '1px solid rgba(168,204,240,0.2)',
                animation: 'float 6s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', bottom: '20%', left: '15%',
                width: 120, height: 120, borderRadius: '50%',
                background: 'rgba(52,128,212,0.08)', border: '1px solid rgba(52,128,212,0.2)',
                animation: 'float 8s ease-in-out infinite reverse',
            }} />
            <div style={{
                position: 'absolute', top: '60%', right: '20%',
                width: 50, height: 50, borderRadius: '50%',
                background: 'rgba(91,168,245,0.12)', border: '1px solid rgba(91,168,245,0.2)',
                animation: 'float 5s ease-in-out infinite',
            }} />
            <div style={{
                position: 'absolute', top: '15%', left: '8%',
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(74,222,128,0.1)', border: '1px solid rgba(74,222,128,0.2)',
                animation: 'float 7s ease-in-out infinite reverse',
            }} />

            {/* Cards flotantes — ecommerce */}
            {/* Card izquierda: Envío gratis */}
            <div style={{
                position: 'absolute', left: '3%', top: '35%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(168,204,240,0.15)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                animation: 'float 7s ease-in-out infinite',
                display: 'flex', alignItems: 'center', gap: 10,
                minWidth: 180,
            }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(52,128,212,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                }}>🚚</div>
                <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0 }}>Envío rápido</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>24-48h a todo el Perú</p>
                </div>
            </div>

            {/* Card derecha: Pago seguro */}
            <div style={{
                position: 'absolute', right: '3%', top: '30%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(168,204,240,0.15)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                animation: 'float 9s ease-in-out infinite reverse',
                display: 'flex', alignItems: 'center', gap: 10,
                minWidth: 180,
            }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(74,222,128,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                }}>🔒</div>
                <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0 }}>Pago seguro</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>Yape, Plin, transferencia</p>
                </div>
            </div>

            {/* Card abajo derecha: Calidad */}
            <div style={{
                position: 'absolute', right: '4%', bottom: '25%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(168,204,240,0.15)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                animation: 'float 6s ease-in-out infinite',
                display: 'flex', alignItems: 'center', gap: 10,
                minWidth: 170,
            }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(245,158,11,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                }}>⭐</div>
                <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0 }}>Calidad premium</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>Productos oficiales</p>
                </div>
            </div>

            {/* Card abajo izquierda: Hecho en Perú */}
            <div style={{
                position: 'absolute', left: '3%', bottom: '28%',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(168,204,240,0.15)',
                borderRadius: 16, padding: '14px 18px',
                backdropFilter: 'blur(12px)',
                animation: 'float 8s ease-in-out infinite reverse',
                display: 'flex', alignItems: 'center', gap: 10,
                minWidth: 160,
            }}>
                <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'rgba(239,68,68,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                }}>🇵🇪</div>
                <div>
                    <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', margin: 0 }}>Hecho en Perú</p>
                    <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.6)', margin: 0 }}>Apoya lo nuestro</p>
                </div>
            </div>

            {/* CONTENIDO CENTRAL */}
            <div style={{ position: 'relative', textAlign: 'center', padding: '40px 24px', maxWidth: 800, zIndex: 1 }}>

                {/* Logo */}
                <div style={{ margin: '0 auto 28px', display: 'flex', justifyContent: 'center' }}>
                    <div style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(168,204,240,0.2)',
                        borderRadius: 20, padding: '16px 32px',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    }}>
                        <Image
                            src="/integridadlogoh.webp"
                            alt="Integridad Democrática"
                            width={280} height={75}
                            style={{ objectFit: 'contain', display: 'block' }}
                            priority
                        />
                    </div>
                </div>

                {/* Badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(168,204,240,0.15)', border: '1px solid rgba(168,204,240,0.3)',
                    padding: '6px 16px', borderRadius: 100, marginBottom: 24,
                    backdropFilter: 'blur(8px)',
                }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: 12, color: '#a8ccf0', fontWeight: 500, letterSpacing: '0.1em' }}>
                        TIENDA OFICIAL 2026
                    </span>
                </div>

                {/* Título */}
                <h1 style={{
                    fontWeight: 900, lineHeight: 1.05, marginBottom: 16,
                    fontSize: 'clamp(2rem, 6vw, 4.5rem)', color: '#ffffff',
                    textShadow: '0 4px 32px rgba(0,0,0,0.3)', letterSpacing: '-0.01em',
                }}>
                    Representa tus{' '}
                    <span style={{ color: '#5ba8f5' }}>valores</span>
                    <br />con orgullo.
                </h1>

                <p style={{
                    color: 'rgba(168,204,240,0.85)', fontSize: 17, marginBottom: 40,
                    maxWidth: 500, margin: '0 auto 40px', lineHeight: 1.6,
                }}>
                    Merchandising oficial para militantes, simpatizantes y dirigentes de Integridad Democrática.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56 }}>
                    <Link href="/productos" style={{
                        padding: '14px 32px', borderRadius: 100,
                        background: '#3480d4', color: '#fff',
                        fontSize: 14, fontWeight: 600, letterSpacing: '0.05em',
                        textTransform: 'uppercase', textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(52,128,212,0.4)',
                        transition: 'all 0.25s ease', display: 'inline-block',
                    }}>
                        Ver catálogo →
                    </Link>
                    <Link href="/mis-pedidos" style={{
                        padding: '14px 32px', borderRadius: 100,
                        border: '1px solid rgba(168,204,240,0.4)',
                        background: 'rgba(168,204,240,0.05)',
                        backdropFilter: 'blur(8px)',
                        fontSize: 14, fontWeight: 600, letterSpacing: '0.05em',
                        textTransform: 'uppercase', color: '#a8ccf0', textDecoration: 'none',
                        display: 'inline-block',
                    }}>
                        Mis pedidos
                    </Link>
                </div>

                {/* Stats */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 0, maxWidth: 600, margin: '0 auto',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(168,204,240,0.1)',
                    borderRadius: 20, overflow: 'hidden',
                    backdropFilter: 'blur(8px)',
                }}>
                    {[
                        { value: productsCount || '—', label: 'Productos', icon: '📦' },
                        { value: categoriesCount || '—', label: 'Categorías', icon: '🗂️' },
                        { value: '24h', label: 'Entrega Lima', icon: '🚚' },
                    ].map((s, i) => (
                        <div key={i} style={{
                            padding: '20px 16px', textAlign: 'center',
                            borderRight: i < 2 ? '1px solid rgba(168,204,240,0.1)' : 'none',
                        }}>
                            <p style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</p>
                            <p style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 4, lineHeight: 1 }}>
                                {s.value}
                            </p>
                            <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.7)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0 }}>
                                {s.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; box-shadow: 0 0 6px #4ade80; }
                    50% { opacity: 0.6; box-shadow: 0 0 14px #4ade80; }
                }
            `}</style>
        </section>
    );
}