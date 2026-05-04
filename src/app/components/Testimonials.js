'use client';

export default function Testimonials() {
    const reviews = [
        {
            name: 'Roberto Quispe',
            role: 'Militante — Lima',
            avatar: 'RQ',
            stars: 5,
            comment: 'Los productos son de excelente calidad. Recibí mi polo en tiempo récord y la tela es muy cómoda. Orgulloso de representar a Integridad Democrática.',
            color: '#3480d4',
        },
        {
            name: 'Carmen Flores',
            role: 'Simpatizante — Arequipa',
            avatar: 'CF',
            stars: 5,
            comment: 'La taza llegó perfectamente empaquetada y el diseño es muy bonito. Se nota el compromiso con la calidad. Definitivamente volvería a comprar.',
            color: '#1b3f72',
        },
        {
            name: 'Jorge Medina',
            role: 'Dirigente — Cusco',
            avatar: 'JM',
            stars: 5,
            comment: 'Atención rápida y productos exclusivos. Ideal para regalar a compañeros del partido. Muy recomendado para todos los que apoyan nuestra causa.',
            color: '#0a1628',
        },
    ];

    return (
        <section style={{
            background: 'linear-gradient(180deg, #f0f6ff 0%, #e8f1fa 100%)',
            padding: '96px 24px',
            position: 'relative', overflow: 'hidden',
        }}>
            {/* Decoraciones fondo */}
            <div style={{
                position: 'absolute', top: -100, right: -100,
                width: 400, height: 400, borderRadius: '50%',
                background: 'rgba(52,128,212,0.05)',
            }} />
            <div style={{
                position: 'absolute', bottom: -80, left: -80,
                width: 300, height: 300, borderRadius: '50%',
                background: 'rgba(27,63,114,0.04)',
            }} />

            <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56 }}>
                    <p style={{
                        fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase',
                        color: '#3480d4', fontWeight: 700, marginBottom: 10,
                    }}>
                        Testimonios
                    </p>
                    <h2 style={{ fontSize: 36, fontWeight: 900, color: '#122a52', margin: '0 0 12px' }}>
                        Lo que dicen nuestros miembros
                    </h2>
                    <p style={{ color: '#3a6499', fontSize: 15, maxWidth: 480, margin: '0 auto' }}>
                        Miles de peruanos ya confían en nuestra tienda oficial
                    </p>
                </div>

                {/* Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                    {reviews.map((r, i) => (
                        <div key={i} style={{
                            background: '#fff',
                            borderRadius: 24,
                            padding: '36px 28px',
                            border: '1px solid rgba(194,216,240,0.8)',
                            position: 'relative', overflow: 'hidden',
                            boxShadow: '0 4px 24px rgba(27,63,114,0.08)',
                        }}>
                            {/* Acento de color arriba */}
                            <div style={{
                                position: 'absolute', top: 0, left: 0, right: 0,
                                height: 4,
                                background: `linear-gradient(90deg, ${r.color}, #3480d4)`,
                            }} />

                            {/* Comillas grandes decorativas */}
                            <div style={{
                                position: 'absolute', top: 16, right: 24,
                                fontSize: 80, color: 'rgba(52,128,212,0.07)',
                                fontFamily: 'Georgia, serif', lineHeight: 1,
                                fontWeight: 900,
                            }}>
                                "
                            </div>

                            {/* Estrellas */}
                            <div style={{ marginBottom: 16, display: 'flex', gap: 4 }}>
                                {[...Array(r.stars)].map((_, j) => (
                                    <span key={j} style={{ color: '#fbbf24', fontSize: 18 }}>★</span>
                                ))}
                            </div>

                            {/* Comentario */}
                            <p style={{
                                color: '#3a6499', marginBottom: 28,
                                lineHeight: 1.7, fontSize: 15,
                                position: 'relative',
                            }}>
                                "{r.comment}"
                            </p>

                            {/* Separador */}
                            <div style={{
                                height: 1,
                                background: 'linear-gradient(90deg, rgba(194,216,240,0.8), transparent)',
                                marginBottom: 20,
                            }} />

                            {/* Avatar e info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                <div style={{
                                    width: 48, height: 48, borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${r.color}, #3480d4)`,
                                    color: '#fff', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: 800, fontSize: 15,
                                    boxShadow: `0 4px 12px ${r.color}40`,
                                    flexShrink: 0,
                                }}>
                                    {r.avatar}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 700, color: '#122a52', fontSize: 15, marginBottom: 2 }}>{r.name}</p>
                                    <p style={{ fontSize: 12, color: '#3a6499' }}>{r.role}</p>
                                </div>
                                {/* Badge verificado */}
                                <div style={{
                                    marginLeft: 'auto',
                                    background: 'rgba(52,128,212,0.08)',
                                    border: '1px solid rgba(52,128,212,0.2)',
                                    borderRadius: 100, padding: '4px 10px',
                                    fontSize: 11, color: '#3480d4', fontWeight: 600,
                                }}>
                                    ✓ Verificado
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats de confianza */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: 24, marginTop: 56,
                    background: '#fff',
                    border: '1px solid rgba(194,216,240,0.8)',
                    borderRadius: 20, padding: '32px 24px',
                    boxShadow: '0 4px 24px rgba(27,63,114,0.06)',
                }}>
                    {[
                        { value: '500+', label: 'Clientes satisfechos', icon: '😊' },
                        { value: '4.9', label: 'Calificación promedio', icon: '⭐' },
                        { value: '98%', label: 'Recomendarían', icon: '👍' },
                        { value: '24h', label: 'Tiempo de entrega', icon: '🚚' },
                    ].map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
                            <p style={{ fontSize: 28, fontWeight: 900, color: '#1b3f72', marginBottom: 4 }}>{s.value}</p>
                            <p style={{ fontSize: 12, color: '#3a6499', letterSpacing: '0.03em' }}>{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}