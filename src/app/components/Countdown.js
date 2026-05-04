'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const target = new Date();
        target.setDate(target.getDate() + 7);

        const interval = setInterval(() => {
            const now  = new Date();
            const diff = target - now;
            if (diff > 0) {
                setTimeLeft({
                    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / 1000 / 60) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const boxes = [
        { label: 'Días',     value: timeLeft.days },
        { label: 'Horas',    value: timeLeft.hours },
        { label: 'Minutos',  value: timeLeft.minutes },
        { label: 'Segundos', value: timeLeft.seconds },
    ];

    return (
        <section style={{
            background: '#0a1628',
            padding: '0 24px 80px',
            position: 'relative',
        }}>
            <div style={{
                maxWidth: 1152, margin: '0 auto',
                borderRadius: 28, overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, #0d1f3c 0%, #1b3f72 60%, #3480d4 100%)',
            }}>
                {/* Decoraciones de fondo */}
                <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06), transparent 40%), radial-gradient(circle at 20% 80%, rgba(52,128,212,0.3), transparent 40%)',
                }} />
                <div style={{
                    position: 'absolute', top: -80, right: -80,
                    width: 300, height: 300, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.06)',
                }} />
                <div style={{
                    position: 'absolute', top: -40, right: -40,
                    width: 180, height: 180, borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.08)',
                }} />
                <div style={{
                    position: 'absolute', bottom: -60, left: -60,
                    width: 200, height: 200, borderRadius: '50%',
                    border: '1px solid rgba(52,128,212,0.2)',
                }} />

                {/* Línea superior brillante */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: 2,
                    background: 'linear-gradient(90deg, transparent, rgba(168,204,240,0.6), transparent)',
                }} />

                <div style={{
                    position: 'relative', padding: '72px 24px',
                    textAlign: 'center', maxWidth: 800, margin: '0 auto',
                }}>
                    {/* Logo pequeño */}
                    <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'center' }}>
                        <Image
                            src="/integridadlogoh.webp"
                            alt="Integridad Democrática"
                            width={160}
                            height={42}
                            style={{ objectFit: 'contain', opacity: 0.85 }}
                        />
                    </div>

                    {/* Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '6px 16px', borderRadius: 100, marginBottom: 20,
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fbbf24', boxShadow: '0 0 8px #fbbf24' }} />
                        <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', fontWeight: 600, letterSpacing: '0.15em' }}>
                            OFERTA POR LANZAMIENTO
                        </span>
                    </div>

                    {/* Título grande */}
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
                        fontWeight: 900, textTransform: 'uppercase',
                        marginBottom: 8, color: '#fff', lineHeight: 0.95,
                        letterSpacing: '-0.02em',
                    }}>
                        20%
                    </h2>
                    <h3 style={{
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        fontWeight: 700, textTransform: 'uppercase',
                        marginBottom: 24, color: '#a8ccf0', letterSpacing: '0.1em',
                    }}>
                        de descuento
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, marginBottom: 40, letterSpacing: '0.02em' }}>
                        En todos los productos oficiales · Tiempo limitado
                    </p>

                    {/* Cajas del countdown */}
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
                        {boxes.map((b, i) => (
                            <div key={i} style={{
                                background: 'rgba(255,255,255,0.08)',
                                backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                borderRadius: 16, padding: '20px 24px',
                                minWidth: 88, position: 'relative',
                            }}>
                                {/* Línea superior de acento */}
                                <div style={{
                                    position: 'absolute', top: 0, left: '20%', right: '20%',
                                    height: 2, background: '#3480d4', borderRadius: 1,
                                }} />
                                <p style={{
                                    fontSize: 40, fontWeight: 900, color: '#fff',
                                    marginBottom: 6, fontVariantNumeric: 'tabular-nums',
                                    lineHeight: 1,
                                }}>
                                    {String(b.value).padStart(2, '0')}
                                </p>
                                <p style={{
                                    fontSize: 10, color: 'rgba(255,255,255,0.6)',
                                    textTransform: 'uppercase', letterSpacing: '0.12em',
                                }}>
                                    {b.label}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link href="/productos" style={{
                        padding: '16px 40px', borderRadius: 100,
                        background: '#fff', color: '#1b3f72',
                        fontSize: 14, fontWeight: 800, letterSpacing: '0.06em',
                        textTransform: 'uppercase', textDecoration: 'none',
                        display: 'inline-block',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                    }}>
                        Aprovechar oferta →
                    </Link>
                </div>
            </div>
        </section>
    );
}