'use client';

/**
 * Sección de beneficios de comprar en la tienda oficial
 * de Integridad Democrática.
 */
export default function Benefits() {
    const benefits = [
        { icon: '🚚', title: 'Envío rápido',        desc: 'A todo el Perú en 24-48h' },
        { icon: '🏅', title: 'Calidad garantizada', desc: 'Productos oficiales premium' },
        { icon: '💳', title: 'Pago seguro',          desc: 'Yape, Plin, transferencia' },
        { icon: '🇵🇪', title: 'Hecho en Perú',      desc: 'Apoya lo nuestro' },
    ];

    return (
        <section style={{ background: '#fff', padding: '64px 24px', borderBottom: '1px solid #c2d8f0' }}>
            <div style={{
                maxWidth: 1152, margin: '0 auto',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32,
            }}>
                {benefits.map((b, i) => (
                    <div key={i} style={{ textAlign: 'center' }}>
                        <div style={{
                            width: 56, height: 56, borderRadius: 16,
                            background: '#daeaf8', display: 'flex',
                            alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 16px', fontSize: 24,
                        }}>
                            {b.icon}
                        </div>
                        <p style={{ fontWeight: 700, fontSize: 15, color: '#122a52', marginBottom: 4 }}>{b.title}</p>
                        <p style={{ fontSize: 13, color: '#3a6499' }}>{b.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}