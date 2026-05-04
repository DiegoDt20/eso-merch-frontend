'use client';

export default function Benefits() {
    const benefits = [
        {
            icon: '🚚',
            title: 'Envío rápido',
            desc: 'A todo el Perú en 24-48h',
            color: '#3480d4',
            bg: 'rgba(52,128,212,0.1)',
            border: 'rgba(52,128,212,0.2)',
        },
        {
            icon: '🏅',
            title: 'Calidad garantizada',
            desc: 'Productos oficiales premium',
            color: '#f59e0b',
            bg: 'rgba(245,158,11,0.1)',
            border: 'rgba(245,158,11,0.2)',
        },
        {
            icon: '💳',
            title: 'Pago seguro',
            desc: 'Yape, Plin, transferencia',
            color: '#10b981',
            bg: 'rgba(16,185,129,0.1)',
            border: 'rgba(16,185,129,0.2)',
        },
        {
            icon: '🇵🇪',
            title: 'Hecho en Perú',
            desc: 'Apoya lo nuestro',
            color: '#ef4444',
            bg: 'rgba(239,68,68,0.1)',
            border: 'rgba(239,68,68,0.2)',
        },
    ];

    return (
        <section style={{
            background: 'linear-gradient(180deg, #0a1628 0%, #122a52 100%)',
            padding: '80px 24px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Línea superior decorativa */}
            <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,128,212,0.5), transparent)',
            }} />

            <div style={{ maxWidth: 1152, margin: '0 auto' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56 }}>
                    <p style={{
                        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
                        color: '#3480d4', fontWeight: 700, marginBottom: 10,
                    }}>
                        ¿Por qué elegirnos?
                    </p>
                    <h2 style={{ fontSize: 32, fontWeight: 900, color: '#fff', margin: 0 }}>
                        Tu compra, nuestra prioridad
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 20,
                }}>
                    {benefits.map((b, i) => (
                        <div key={i} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${b.border}`,
                            borderRadius: 20,
                            padding: '32px 24px',
                            textAlign: 'center',
                            transition: 'all 0.3s',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            {/* Glow de fondo */}
                            <div style={{
                                position: 'absolute', top: 0, left: '50%',
                                transform: 'translateX(-50%)',
                                width: 120, height: 120,
                                background: b.bg,
                                borderRadius: '50%',
                                filter: 'blur(30px)',
                            }} />

                            {/* Ícono */}
                            <div style={{
                                width: 64, height: 64, borderRadius: 18,
                                background: b.bg,
                                border: `1px solid ${b.border}`,
                                display: 'flex', alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                fontSize: 28,
                                position: 'relative',
                            }}>
                                {b.icon}
                            </div>

                            <p style={{
                                fontWeight: 700, fontSize: 16,
                                color: '#fff', marginBottom: 8,
                                position: 'relative',
                            }}>
                                {b.title}
                            </p>
                            <p style={{
                                fontSize: 13, color: 'rgba(168,204,240,0.7)',
                                position: 'relative', lineHeight: 1.5,
                            }}>
                                {b.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Línea inferior decorativa */}
            <div style={{
                position: 'absolute', bottom: 0, left: '10%', right: '10%',
                height: 1,
                background: 'linear-gradient(90deg, transparent, rgba(52,128,212,0.3), transparent)',
            }} />
        </section>
    );
}