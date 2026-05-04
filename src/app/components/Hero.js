'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero({ productsCount, categoriesCount }) {
    return (
        <section style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', position: 'relative', overflow: 'hidden',
            background: '#0a1628',
        }}>
            {/* Fondo con gradientes múltiples */}
            <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 20% 50%, rgba(52,128,212,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(27,63,114,0.4) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(10,22,40,0.8) 0%, transparent 50%)',
            }} />

            {/* Líneas decorativas diagonales */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.05,
                backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 60px)',
            }} />

            {/* Círculo grande decorativo derecha */}
            <div style={{
                position: 'absolute', right: '-10%', top: '50%',
                transform: 'translateY(-50%)',
                width: 600, height: 600, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.2)',
            }} />
            <div style={{
                position: 'absolute', right: '-5%', top: '50%',
                transform: 'translateY(-50%)',
                width: 400, height: 400, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.15)',
            }} />

            {/* Círculo pequeño izquierda */}
            <div style={{
                position: 'absolute', left: '5%', top: '20%',
                width: 100, height: 100, borderRadius: '50%',
                background: 'rgba(52,128,212,0.1)',
                border: '1px solid rgba(52,128,212,0.2)',
            }} />
            <div style={{
                position: 'absolute', left: '8%', bottom: '20%',
                width: 60, height: 60, borderRadius: '50%',
                background: 'rgba(52,128,212,0.15)',
            }} />

            {/* Glow principal */}
            <div style={{
                position: 'absolute', top: '40%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 800, height: 400,
                background: 'radial-gradient(ellipse, rgba(52,128,212,0.2), transparent 70%)',
                filter: 'blur(40px)',
            }} />

            <div style={{ position: 'relative', textAlign: 'center', padding: '40px 24px', maxWidth: 900, width: '100%' }}>

                {/* Badge animado */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(52,128,212,0.15)',
                    border: '1px solid rgba(52,128,212,0.4)',
                    padding: '8px 20px', borderRadius: 100, marginBottom: 32,
                    backdropFilter: 'blur(8px)',
                }}>
                    <span style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: '#4ade80',
                        boxShadow: '0 0 8px #4ade80',
                    }} />
                    <span style={{ fontSize: 12, color: '#a8ccf0', fontWeight: 600, letterSpacing: '0.15em' }}>
                        TIENDA OFICIAL 2026
                    </span>
                </div>

                {/* Logo grande centrado */}
                <div style={{ margin: '0 auto 32px', display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src="/integridadlogoh.webp"
                        alt="Integridad Democrática"
                        width={320}
                        height={85}
                        style={{ objectFit: 'contain', filter: 'brightness(1.1)' }}
                        priority
                    />
                </div>

                {/* Línea decorativa */}
                <div style={{
                    width: 60, height: 3, background: 'linear-gradient(90deg, transparent, #3480d4, transparent)',
                    margin: '0 auto 28px', borderRadius: 2,
                }} />

                {/* Subtítulo */}
                <p style={{
                    color: 'rgba(168,204,240,0.9)', fontSize: 18, marginBottom: 16,
                    maxWidth: 560, margin: '0 auto 16px', lineHeight: 1.7,
                    fontWeight: 300, letterSpacing: '0.02em',
                }}>
                    Representa tus valores con orgullo.
                </p>
                <p style={{
                    color: 'rgba(168,204,240,0.6)', fontSize: 14, marginBottom: 48,
                    maxWidth: 460, margin: '0 auto 48px', lineHeight: 1.6,
                }}>
                    Productos exclusivos de merchandising oficial para militantes, simpatizantes y dirigentes.
                </p>

                {/* CTAs */}
                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 80 }}>
                    <Link href="/productos" style={{
                        padding: '16px 36px', borderRadius: 100,
                        background: 'linear-gradient(135deg, #3480d4, #1b3f72)',
                        color: '#fff', fontSize: 14, fontWeight: 700,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        textDecoration: 'none',
                        boxShadow: '0 8px 32px rgba(52,128,212,0.4), 0 0 0 1px rgba(52,128,212,0.3)',
                        transition: 'all 0.3s',
                    }}>
                        Ver catálogo →
                    </Link>
                    <Link href="/mis-pedidos" style={{
                        padding: '16px 36px', borderRadius: 100,
                        border: '1px solid rgba(168,204,240,0.3)',
                        background: 'rgba(168,204,240,0.05)',
                        backdropFilter: 'blur(8px)',
                        fontSize: 14, fontWeight: 600, letterSpacing: '0.08em',
                        textTransform: 'uppercase', color: '#a8ccf0',
                        textDecoration: 'none', transition: 'all 0.3s',
                    }}>
                        Mis pedidos
                    </Link>
                </div>

                {/* Stats mejoradas */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 0, maxWidth: 600, margin: '0 auto',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(168,204,240,0.1)',
                    borderRadius: 20, backdropFilter: 'blur(8px)',
                    overflow: 'hidden',
                }}>
                    {[
                        { value: productsCount || '—', label: 'Productos', icon: '📦' },
                        { value: categoriesCount || '—', label: 'Categorías', icon: '🗂️' },
                        { value: '24h', label: 'Entrega', icon: '🚚' },
                    ].map((stat, i) => (
                        <div key={i} style={{
                            padding: '24px 16px', textAlign: 'center',
                            borderRight: i < 2 ? '1px solid rgba(168,204,240,0.1)' : 'none',
                        }}>
                            <div style={{ fontSize: 20, marginBottom: 6 }}>{stat.icon}</div>
                            <p style={{ fontSize: 28, fontWeight: 900, color: '#fff', marginBottom: 4, lineHeight: 1 }}>
                                {stat.value}
                            </p>
                            <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, color: 'rgba(168,204,240,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                        Descubre más
                    </span>
                    <div style={{
                        width: 24, height: 40, border: '1px solid rgba(168,204,240,0.3)',
                        borderRadius: 12, display: 'flex', justifyContent: 'center',
                        paddingTop: 6,
                    }}>
                        <div style={{
                            width: 4, height: 8, background: '#3480d4',
                            borderRadius: 2,
                        }} />
                    </div>
                </div>
            </div>
        </section>
    );
}