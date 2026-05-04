'use client';

import { useEffect, useState } from 'react';

// ⚙️ CAMBIA ESTA FECHA AL EVENTO REAL
const TARGET_DATE = new Date('2026-04-05T08:00:00');

function useCountdown(target) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calc = () => {
            const diff = target - new Date();
            if (diff <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }
            setTimeLeft({
                days:    Math.floor(diff / 86400000),
                hours:   Math.floor((diff % 86400000) / 3600000),
                minutes: Math.floor((diff % 3600000) / 60000),
                seconds: Math.floor((diff % 60000) / 1000),
            });
        };
        calc();
        const id = setInterval(calc, 1000);
        return () => clearInterval(id);
    }, [target]);

    return timeLeft;
}

function Pad(n) { return String(n).padStart(2, '0'); }

function CDBox({ value, label }) {
    const display = Pad(value);

    return (
        <div style={{ textAlign: 'center' }}>
            {/* Caja del número */}
            <div style={{
                position: 'relative',
                width: 72, height: 80,
                borderRadius: 14,
                background: 'rgba(52,128,212,0.18)',
                border: '1px solid rgba(52,128,212,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                backdropFilter: 'blur(8px)',
            }}>
                {/* Reflejo superior */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    height: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '14px 14px 0 0',
                }} />
                {/* Línea central */}
                <div style={{
                    position: 'absolute', top: '50%',
                    left: 0, right: 0, height: 1,
                    background: 'rgba(0,0,0,0.25)',
                }} />
                <span style={{
                    fontSize: 32, fontWeight: 900, color: '#fff',
                    lineHeight: 1, position: 'relative', zIndex: 1,
                    letterSpacing: '-0.02em',
                }}>
                    {display}
                </span>
            </div>
            <p style={{
                fontSize: 10, color: 'rgba(168,204,240,0.5)',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                marginTop: 8, fontWeight: 600,
            }}>
                {label}
            </p>
        </div>
    );
}

export default function Countdown() {
    const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);
    const finished = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

    return (
        <section style={{
            position: 'relative',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #1b3f72 0%, #0f2240 100%)',
            borderTop: '1px solid rgba(52,128,212,0.2)',
            borderBottom: '1px solid rgba(52,128,212,0.2)',
            padding: '48px 24px',
        }}>
            {/* Patrón diagonal sutil */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.04,
                backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 40px)',
                pointerEvents: 'none',
            }} />

            {/* Glow central */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600, height: 200,
                background: 'radial-gradient(ellipse, rgba(52,128,212,0.2), transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
            }} />

            {/* Círculo decorativo izquierda */}
            <div style={{
                position: 'absolute', left: -60, top: '50%',
                transform: 'translateY(-50%)',
                width: 200, height: 200, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.12)',
                pointerEvents: 'none',
            }} />

            {/* Círculo decorativo derecha */}
            <div style={{
                position: 'absolute', right: -60, top: '50%',
                transform: 'translateY(-50%)',
                width: 200, height: 200, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.12)',
                pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>

                {/* Eyebrow */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(52,128,212,0.18)',
                    border: '1px solid rgba(52,128,212,0.4)',
                    padding: '5px 16px', borderRadius: 100, marginBottom: 16,
                    backdropFilter: 'blur(8px)',
                }}>
                    <span style={{
                        width: 6, height: 6, borderRadius: '50%',
                        background: '#f59e0b',
                        boxShadow: '0 0 8px #f59e0b',
                        animation: 'pulse 2s infinite',
                    }} />
                    <span style={{ fontSize: 10, color: '#fbbf24', fontWeight: 700, letterSpacing: '0.2em' }}>
                        CUENTA REGRESIVA
                    </span>
                </div>

                {/* Título */}
                <h2 style={{
                    fontSize: 'clamp(18px, 3vw, 26px)',
                    fontWeight: 800, color: '#fff',
                    marginBottom: 6, lineHeight: 1.2,
                }}>
                    Elecciones 2026 — Prepárate para el gran día
                </h2>
                <p style={{
                    fontSize: 13, color: 'rgba(168,204,240,0.55)',
                    marginBottom: 32, letterSpacing: '0.02em',
                }}>
                    Consigue tu merchandising oficial antes que se agote
                </p>

                {/* Cajas countdown */}
                {finished ? (
                    <div style={{
                        fontSize: 22, fontWeight: 800, color: '#5ba8f5',
                        padding: '24px 0',
                    }}>
                        ¡El día ha llegado! 🎉
                    </div>
                ) : (
                    <div style={{
                        display: 'flex', gap: 12,
                        justifyContent: 'center', alignItems: 'flex-start',
                        flexWrap: 'wrap',
                    }}>
                        <CDBox value={days}    label="Días" />
                        <Separator />
                        <CDBox value={hours}   label="Horas" />
                        <Separator />
                        <CDBox value={minutes} label="Minutos" />
                        <Separator />
                        <CDBox value={seconds} label="Segundos" />
                    </div>
                )}

                {/* CTA */}
                <div style={{ marginTop: 36 }}>
                    <a href="/productos" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 8,
                        background: '#3480d4',
                        color: '#fff', fontSize: 13, fontWeight: 700,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '13px 28px', borderRadius: 100,
                        textDecoration: 'none',
                        boxShadow: '0 4px 20px rgba(52,128,212,0.4)',
                        transition: 'all 0.25s ease',
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 28px rgba(52,128,212,0.55)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(52,128,212,0.4)';
                        }}
                    >
                        Asegura tu pedido ahora →
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50%       { opacity: 0.5; }
                }
            `}</style>
        </section>
    );
}

function Separator() {
    return (
        <div style={{
            fontSize: 32, fontWeight: 900,
            color: 'rgba(52,128,212,0.6)',
            paddingTop: 20, lineHeight: 1,
            userSelect: 'none',
        }}>
            :
        </div>
    );
}