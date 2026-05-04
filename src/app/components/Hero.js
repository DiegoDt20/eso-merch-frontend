'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * Sección Hero principal de la página de inicio.
 * Identidad visual de Integridad Democrática.
 */
export default function Hero({ productsCount, categoriesCount }) {
    return (
        <section style={{
            minHeight: '90vh', display: 'flex', alignItems: 'center',
            justifyContent: 'center', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(135deg, #1b3f72 0%, #122a52 100%)',
        }}>
            {/* Patrón decorativo de puntos */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.15,
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }} />

            {/* Glow azul difuso central */}
            <div style={{
                position: 'absolute', top: '30%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 700, height: 700, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(52,128,212,0.4), transparent 70%)',
                filter: 'blur(80px)',
            }} />

            {/* Círculos decorativos flotantes */}
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

            <div style={{ position: 'relative', textAlign: 'center', padding: '40px 24px', maxWidth: 1100 }}>

                {/* Logo institucional */}
                <div style={{ margin: '0 auto 28px', display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src="/integridadlogoh.webp"
                        alt="Integridad Democrática"
                        width={260}
                        height={70}
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </div>

                {/* Badge "live" con punto verde pulsante */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(168,204,240,0.15)', border: '1px solid rgba(168,204,240,0.3)',
                    padding: '6px 16px', borderRadius: 100, marginBottom: 24,
                    backdropFilter: 'blur(8px)',
                }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80' }} />
                    <span style={{ fontSize: 12, color: '#a8ccf0', fontWeight: 500, letterSpacing: '0.1em' }}>
                        COLECCIÓN OFICIAL 2026
                    </span>
                </div>

                {/* Título principal */}
                <h1 style={{
                    fontWeight: 900, textTransform: 'uppercase', lineHeight: 1,
                    marginBottom: 24, fontSize: 'clamp(2.5rem, 8vw, 6rem)', color: '#ffffff',
                    textShadow: '0 4px 32px rgba(0,0,0,0.3)',
                }}>
                    Tienda <span style={{ color: '#3480d4' }}>Oficial</span>
                </h1>

                <p style={{
                    color: 'rgba(168,204,240,0.85)', fontSize: 18, marginBottom: 40,
                    maxWidth: 540, margin: '0 auto 40px', lineHeight: 1.6,
                }}>
                    Productos exclusivos de Integridad Democrática. Representa tus valores con orgullo.
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 64 }}>
                    <Link href="/productos" style={{
                        padding: '14px 32px', borderRadius: 100,
                        background: '#3480d4', color: '#fff',
                        fontSize: 14, fontWeight: 600, letterSpacing: '0.05em',
                        textTransform: 'uppercase', textDecoration: 'none',
                        boxShadow: '0 8px 24px rgba(52,128,212,0.4)',
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
                    }}>
                        Mis pedidos
                    </Link>
                </div>

                {/* Stats */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: 24, maxWidth: 700, margin: '0 auto',
                }}>
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
        </section>
    );
}