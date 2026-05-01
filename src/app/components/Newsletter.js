'use client';

import { useState } from 'react';

/**
 * Formulario de newsletter para captar emails.
 * Muestra un mensaje de éxito al suscribirse.
 */
export default function Newsletter() {
    const [email, setEmail]         = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se conectaría con un servicio real de email marketing
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setEmail('');
        }, 3000);
    };

    return (
        <section style={{ background: '#fff', padding: '80px 24px', borderTop: '1px solid #c2d8f0' }}>
            <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
                {/* Ícono de email */}
                <div style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: '#daeaf8', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                }}>
                    <svg width="28" height="28" fill="none" stroke="#1b3f72" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                </div>

                <h2 style={{ fontSize: 28, fontWeight: 900, color: '#122a52', marginBottom: 12 }}>
                    Mantente al día
                </h2>
                <p style={{ color: '#3a6499', marginBottom: 32, fontSize: 15 }}>
                    Suscríbete y entérate primero de nuevos productos y ofertas exclusivas.
                </p>

                {submitted ? (
                    // Mensaje de confirmación tras suscribirse
                    <div style={{
                        background: '#dcfce7', border: '1px solid #bbf7d0',
                        color: '#15803d', padding: '16px 24px', borderRadius: 12,
                        fontSize: 14, fontWeight: 600,
                    }}>
                        ✓ ¡Gracias! Te has suscrito correctamente.
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 12, maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{
                                flex: 1, minWidth: 200, padding: '14px 18px',
                                borderRadius: 100, border: '1px solid #c2d8f0',
                                background: '#f5f9ff', color: '#122a52',
                                fontSize: 14, outline: 'none',
                            }}
                        />
                        <button type="submit" style={{
                            padding: '14px 28px', borderRadius: 100,
                            background: '#1b3f72', color: '#fff',
                            fontSize: 13, fontWeight: 600, border: 'none', cursor: 'pointer',
                            textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>
                            Suscribirme
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}