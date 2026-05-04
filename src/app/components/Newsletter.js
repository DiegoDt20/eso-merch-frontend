'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail]     = useState('');
    const [status, setStatus]   = useState('idle'); // idle | loading | success | error
    const [focused, setFocused] = useState(false);

    const handleSubmit = async () => {
        if (!email || !email.includes('@')) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
            return;
        }
        setStatus('loading');
        // Simula envío — reemplaza con tu lógica real de suscripción
        await new Promise(r => setTimeout(r, 1200));
        setStatus('success');
        setEmail('');
    };

    return (
        <section style={{
            background: 'linear-gradient(160deg, #1a3a6b 0%, #162f5c 60%, #112448 100%)',
            borderTop: '1px solid rgba(52,128,212,0.2)',
            borderBottom: '1px solid rgba(52,128,212,0.2)',
            padding: '72px 5%',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Patrón diagonal */}
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.04,
                backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 50px)',
                pointerEvents: 'none',
            }} />

            {/* Glows */}
            <div style={{
                position: 'absolute', top: -60, right: -60,
                width: 320, height: 320, borderRadius: '50%',
                background: 'rgba(52,128,212,0.15)', filter: 'blur(80px)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: -60, left: -60,
                width: 260, height: 260, borderRadius: '50%',
                background: 'rgba(27,63,114,0.2)', filter: 'blur(60px)',
                pointerEvents: 'none',
            }} />

            {/* Círculos decorativos */}
            <div style={{
                position: 'absolute', right: '8%', top: '50%',
                transform: 'translateY(-50%)',
                width: 180, height: 180, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.12)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', left: '5%', top: '50%',
                transform: 'translateY(-50%)',
                width: 120, height: 120, borderRadius: '50%',
                border: '1px solid rgba(52,128,212,0.1)',
                pointerEvents: 'none',
            }} />

            <div style={{
                position: 'relative', zIndex: 1,
                maxWidth: 620, margin: '0 auto',
                textAlign: 'center',
            }}>
                {/* Ícono sobre */}
                <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: 'rgba(52,128,212,0.2)',
                    border: '1px solid rgba(52,128,212,0.35)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5ba8f5" strokeWidth="1.6">
                        <rect x="2" y="4" width="20" height="16" rx="3" />
                        <path d="M2 8l10 7 10-7" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Eyebrow */}
                <p style={{
                    fontSize: 10, color: '#5ba8f5', fontWeight: 700,
                    letterSpacing: '0.3em', textTransform: 'uppercase',
                    marginBottom: 10,
                }}>
                    Mantente informado
                </p>

                {/* Título */}
                <h2 style={{
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 900, color: '#fff',
                    marginBottom: 10, lineHeight: 1.15,
                }}>
                    Suscríbete al boletín
                </h2>
                <p style={{
                    fontSize: 14, color: 'rgba(168,204,240,0.6)',
                    lineHeight: 1.7, marginBottom: 36,
                    maxWidth: 460, margin: '0 auto 36px',
                }}>
                    Entérate primero de nuevos productos, promociones exclusivas y noticias de Integridad Democrática.
                </p>

                {/* Formulario */}
                {status === 'success' ? (
                    <div style={{
                        background: 'rgba(74,222,128,0.12)',
                        border: '1px solid rgba(74,222,128,0.35)',
                        borderRadius: 16, padding: '20px 24px',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center', gap: 12,
                        animation: 'fadeInUp 0.4s ease both',
                    }}>
                        <div style={{
                            width: 32, height: 32, borderRadius: '50%',
                            background: 'rgba(74,222,128,0.2)',
                            border: '1px solid rgba(74,222,128,0.4)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#4ade80" strokeWidth="2">
                                <path d="M2 7l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p style={{ color: '#4ade80', fontWeight: 700, fontSize: 14 }}>
                            ¡Suscrito exitosamente! Bienvenido.
                        </p>
                    </div>
                ) : (
                    <div style={{
                        display: 'flex', gap: 0,
                        background: focused ? 'rgba(52,128,212,0.12)' : 'rgba(255,255,255,0.06)',
                        border: `1px solid ${status === 'error' ? 'rgba(239,68,68,0.5)' : focused ? 'rgba(52,128,212,0.55)' : 'rgba(52,128,212,0.25)'}`,
                        borderRadius: 100,
                        transition: 'all 0.25s ease',
                        overflow: 'hidden',
                        backdropFilter: 'blur(8px)',
                        maxWidth: 480, margin: '0 auto',
                    }}>
                        {/* Ícono email dentro del input */}
                        <div style={{
                            paddingLeft: 20,
                            display: 'flex', alignItems: 'center',
                            flexShrink: 0,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(168,204,240,0.5)" strokeWidth="1.4">
                                <rect x="1" y="3" width="14" height="10" rx="2" />
                                <path d="M1 6l7 5 7-5" strokeLinecap="round" />
                            </svg>
                        </div>

                        <input
                            type="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value); setStatus('idle'); }}
                            onFocus={() => setFocused(true)}
                            onBlur={() => setFocused(false)}
                            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                            placeholder="tu@correo.com"
                            style={{
                                flex: 1,
                                background: 'transparent',
                                border: 'none', outline: 'none',
                                padding: '14px 16px',
                                fontSize: 13, color: '#fff',
                                letterSpacing: '0.02em',
                            }}
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={status === 'loading'}
                            style={{
                                background: status === 'loading' ? 'rgba(52,128,212,0.6)' : '#3480d4',
                                color: '#fff', border: 'none',
                                padding: '12px 24px', margin: 4,
                                borderRadius: 100, cursor: status === 'loading' ? 'wait' : 'pointer',
                                fontSize: 12, fontWeight: 700,
                                letterSpacing: '0.08em', textTransform: 'uppercase',
                                transition: 'all 0.25s ease',
                                whiteSpace: 'nowrap',
                                flexShrink: 0,
                            }}
                            onMouseEnter={e => {
                                if (status !== 'loading') {
                                    e.currentTarget.style.background = '#2a6ab8';
                                    e.currentTarget.style.transform = 'scale(1.03)';
                                }
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = status === 'loading' ? 'rgba(52,128,212,0.6)' : '#3480d4';
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {status === 'loading' ? (
                                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ animation: 'spin 0.8s linear infinite' }}>
                                        <circle cx="6" cy="6" r="4.5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                                        <path d="M6 1.5a4.5 4.5 0 014.5 4.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                    Enviando
                                </span>
                            ) : 'Suscribirme'}
                        </button>
                    </div>
                )}

                {/* Error message */}
                {status === 'error' && (
                    <p style={{
                        fontSize: 12, color: '#f87171',
                        marginTop: 10, letterSpacing: '0.02em',
                        animation: 'fadeInUp 0.3s ease both',
                    }}>
                        Por favor ingresa un correo válido.
                    </p>
                )}

                {/* Privacidad */}
                <p style={{
                    fontSize: 11, color: 'rgba(168,204,240,0.35)',
                    marginTop: 16, letterSpacing: '0.02em',
                }}>
                    Sin spam. Puedes desuscribirte cuando quieras.
                </p>

                {/* Beneficios */}
                <div style={{
                    display: 'flex', gap: 24,
                    justifyContent: 'center', flexWrap: 'wrap',
                    marginTop: 32,
                }}>
                    {[
                        { icon: '🎁', text: 'Ofertas exclusivas' },
                        { icon: '📦', text: 'Nuevos productos' },
                        { icon: '📣', text: 'Noticias del partido' },
                    ].map((b, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: 7,
                        }}>
                            <div style={{
                                width: 28, height: 28, borderRadius: 8,
                                background: 'rgba(52,128,212,0.15)',
                                border: '1px solid rgba(52,128,212,0.25)',
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center', fontSize: 13,
                            }}>
                                {b.icon}
                            </div>
                            <span style={{ fontSize: 12, color: 'rgba(168,204,240,0.6)' }}>
                                {b.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
                input::placeholder { color: rgba(168,204,240,0.4); }
            `}</style>
        </section>
    );
}