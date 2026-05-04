'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Banner promocional con countdown timer.
 * Identidad de Integridad Democrática.
 */
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
            margin: '0 24px 80px', borderRadius: 24,
            background: 'linear-gradient(135deg, #3480d4 0%, #1b3f72 100%)',
            position: 'relative', overflow: 'hidden',
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15), transparent 60%)' }} />
            <div style={{ position: 'relative', padding: '64px 24px', textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
                <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontWeight: 700, marginBottom: 12 }}>
                    Oferta por lanzamiento
                </p>
                <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', marginBottom: 8, color: '#fff' }}>
                    20% de descuento
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, marginBottom: 28 }}>
                    En todos los productos oficiales de Integridad Democrática
                </p>

                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
                    {boxes.map((b, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)', borderRadius: 12,
                            padding: '16px 20px', minWidth: 80,
                        }}>
                            <p style={{ fontSize: 32, fontWeight: 900, color: '#fff', marginBottom: 4, fontVariantNumeric: 'tabular-nums' }}>
                                {String(b.value).padStart(2, '0')}
                            </p>
                            <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                {b.label}
                            </p>
                        </div>
                    ))}
                </div>

                <Link href="/productos" style={{
                    padding: '14px 32px', borderRadius: 100,
                    background: '#fff', color: '#1b3f72',
                    fontSize: 14, fontWeight: 700, letterSpacing: '0.05em',
                    textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block',
                }}>
                    Comprar ahora →
                </Link>
            </div>
        </section>
    );
}