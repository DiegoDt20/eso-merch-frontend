'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Newsletter() {
    const [email, setEmail]         = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section style={{
            background: 'linear-gradient(180deg, #0a1628 0%, #122a52 100%)',
            padding: '96px 24px',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Decoraciones */}
            <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(52,128,212,0.15), transparent 50%), radial-gradient(circle at 80% 50%, rgba(27,63,114,0.2), transparent 50%)',
            }} />
            <div style={{
                position: 'absolute', top: -100, left: '50%',
                transform: 'translateX(-50%)',
                width: 600, height: 200,
                background: 'radial-gradient(ellipse, rgba(52,128,212,0.15), transparent 70%)',
                filter: 'blur(40px)',
            }} />
            <div style={{
                position: 'absolute', inset: 0, opacity: 0.03,
                backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                backgroundSize: '32px 32px',
            }} />

            {/* Línea superior */}
            <div style={{
                position: 'absolute', top: 0, left: '15%', right: '15%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,128,212,0.5), transparent)',
            }} />

            <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

                {/* Logo */}
                <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
                    <Image
                        src="/integridadlogoh.webp"
                        alt="Integridad Democrática"
                        width={160}
                        height={42}
                        style={{ objectFit: 'contain', opacity: 0.7 }}
                    />
                </div>

                {/* Badge */}
                <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    background: 'rgba(52,128,212,0.15)',
                    border: '1px solid rgba(52,128,212,0.3)',
                    padding: '6px 16px', borderRadius: 100, marginBottom: 24,
                }}>
                    <span style={{ fontSize: 14 }}>✉️</span>
                    <span style={{ fontSize: 11, color: '#a8ccf0', fontWeight: 600, letterSpacing: '0.15em' }}>
                        NEWSLETTER OFICIAL
                    </span>
                </div>

                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    fontWeight: 900, color: '#fff',
                    marginBottom: 16, lineHeight: 1.1,
                }}>
                    Únete al<br/>
                    <span style={{ color: '#a8ccf0' }}>movimiento</span>
                </h2>

                <p style={{
                    color: 'rgba(168,204,240,0.7)', marginBottom: 40,
                    fontSize: 15, lineHeight: 1.7, maxWidth: 500, margin: '0 auto 40px',
                }}>
                    Suscríbete y sé el primero en conocer nuevos productos, ofertas exclusivas y noticias de Integridad Democrática.
                </p>

                {submitted ? (
                    <div style={{
                        background: 'rgba(74,222,128,0.1)',
                        border: '1px solid rgba(74,222,128,0.3)',
                        color: '#4ade80', padding: '20px 32px', borderRadius: 16,
                        fontSize: 15, fontWeight: 600,
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                    }}>
                        <span style={{ fontSize: 20 }}>✓</span>
                        ¡Bienvenido a la comunidad de Integridad Democrática!
                    </div>
                ) : (
                    <div>
                        <form onSubmit={handleSubmit} style={{
                            display: 'flex', gap: 12,
                            maxWidth: 520, margin: '0 auto 20px',
                            flexWrap: 'wrap', justifyContent: 'center',
                        }}>
                            <input
                                type="email"
                                placeholder="tu@email.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                style={{
                                    flex: 1, minWidth: 220, padding: '16px 22px',
                                    borderRadius: 100,
                                    border: '1px solid rgba(168,204,240,0.2)',
                                    background: 'rgba(255,255,255,0.06)',
                                    color: '#fff', fontSize: 14, outline: 'none',
                                    backdropFilter: 'blur(8px)',
                                }}
                            />
                            <button type="submit" style={{
                                padding: '16px 32px', borderRadius: 100,
                                background: 'linear-gradient(135deg, #3480d4, #1b3f72)',
                                color: '#fff', fontSize: 13, fontWeight: 700,
                                border: 'none', cursor: 'pointer',
                                textTransform: 'uppercase', letterSpacing: '0.06em',
                                boxShadow: '0 8px 24px rgba(52,128,212,0.4)',
                                whiteSpace: 'nowrap',
                            }}>
                                Suscribirme →
                            </button>
                        </form>

                        {/* Garantía */}
                        <p style={{ color: 'rgba(168,204,240,0.4)', fontSize: 12, letterSpacing: '0.05em' }}>
                            🔒 Sin spam · Puedes cancelar cuando quieras
                        </p>
                    </div>
                )}

                {/* Stats debajo */}
                <div style={{
                    display: 'flex', gap: 32, justifyContent: 'center',
                    marginTop: 48, flexWrap: 'wrap',
                }}>
                    {[
                        { value: '2,000+', label: 'Suscriptores' },
                        { value: '100%', label: 'Sin spam' },
                        { value: 'Gratis', label: 'Siempre' },
                    ].map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <p style={{ fontSize: 20, fontWeight: 900, color: '#fff', marginBottom: 2 }}>{s.value}</p>
                            <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Línea inferior */}
            <div style={{
                position: 'absolute', bottom: 0, left: '15%', right: '15%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,128,212,0.3), transparent)',
            }} />
        </section>
    );
}