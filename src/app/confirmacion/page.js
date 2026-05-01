'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

/**
 * Componente interno que lee el número de orden de la URL.
 * Está separado para poder envolverlo en <Suspense>,
 * requisito de Next.js 15+ para useSearchParams() en static export.
 */
function ConfirmacionContent() {
    const searchParams = useSearchParams();
    const orderNumber  = searchParams.get('orden');

    return (
        <main style={{
            minHeight: '100vh', background: '#e8f1fa',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', padding: '24px',
        }}>
            <div style={{ maxWidth: 480, width: '100%', textAlign: 'center' }}>

                {/* Ícono de éxito */}
                <div style={{
                    width: 88, height: 88,
                    background: '#daeaf8',
                    border: '1px solid #c2d8f0',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 32px',
                }}>
                    <svg width="40" height="40" fill="none" stroke="#1b3f72" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                </div>

                {/* Título */}
                <h1 style={{
                    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
                    fontWeight: 900, textTransform: 'uppercase',
                    marginBottom: 8, letterSpacing: '-0.02em',
                    color: '#122a52',
                }}>
                    ¡Pedido confirmado!
                </h1>

                <p style={{ color: '#3a6499', marginBottom: 32, fontSize: 15 }}>
                    Tu compra fue registrada exitosamente
                </p>

                {/* Número de orden */}
                {orderNumber && (
                    <div style={{
                        background: '#ffffff',
                        border: '1px solid #c2d8f0',
                        borderRadius: 16, padding: '24px 32px',
                        marginBottom: 32,
                    }}>
                        <p style={{
                            fontSize: 11, letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: '#3a6499', marginBottom: 8,
                        }}>
                            Número de orden
                        </p>
                        <p style={{
                            fontSize: 22, fontWeight: 700,
                            letterSpacing: '0.05em', color: '#1b3f72',
                        }}>
                            {orderNumber}
                        </p>
                    </div>
                )}

                {/* Info adicional */}
                <div style={{
                    background: '#ffffff', border: '1px solid #c2d8f0',
                    borderRadius: 16, padding: '20px 24px', marginBottom: 32,
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#daeaf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="16" height="16" fill="none" stroke="#1b3f72" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <p style={{ fontSize: 13, color: '#3a6499', textAlign: 'left', margin: 0 }}>
                                Recibirás un correo con los detalles de tu pedido
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#daeaf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <svg width="16" height="16" fill="none" stroke="#1b3f72" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                            </div>
                            <p style={{ fontSize: 13, color: '#3a6499', textAlign: 'left', margin: 0 }}>
                                Nos contactaremos para coordinar la entrega
                            </p>
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <Link href="/productos" style={{
                        display: 'block', textDecoration: 'none', padding: '14px',
                        borderRadius: 100, background: '#1b3f72', color: '#fff',
                        fontSize: 14, fontWeight: 600, textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                    }}>
                        Seguir comprando
                    </Link>
                    <Link href="/" style={{
                        display: 'block', padding: '14px', borderRadius: 100,
                        border: '1px solid #c2d8f0', color: '#3a6499',
                        textDecoration: 'none', fontSize: 14, fontWeight: 600,
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>
                        Ir al inicio
                    </Link>
                </div>
            </div>
        </main>
    );
}

/**
 * Página de confirmación de pedido.
 * Envuelve el contenido en Suspense para permitir
 * el static export con useSearchParams().
 */
export default function ConfirmacionPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f1fa' }}>
                <p style={{ color: '#3a6499' }}>Cargando...</p>
            </div>
        }>
            <ConfirmacionContent />
        </Suspense>
    );
}