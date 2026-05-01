'use client';

/**
 * Sección de testimonios de clientes satisfechos.
 * Muestra 3 reseñas con avatar, nombre, rol y comentario.
 */
export default function Testimonials() {
    const reviews = [
        {
            name: 'María Gómez',
            role: 'Estudiante',
            avatar: 'MG',
            stars: 5,
            comment: 'Calidad excelente y llegó súper rápido. La taza es hermosa, definitivamente volveré a comprar.',
        },
        {
            name: 'Carlos Ruiz',
            role: 'Egresado',
            avatar: 'CR',
            stars: 5,
            comment: 'Los polos son de calidad premium, la tela es muy suave. Recomendado al 100%.',
        },
        {
            name: 'Ana Torres',
            role: 'Docente',
            avatar: 'AT',
            stars: 5,
            comment: 'Atención impecable y productos exclusivos. Encantada con mi pedido.',
        },
    ];

    return (
        <section style={{ background: '#e8f1fa', padding: '80px 24px' }}>
            <div style={{ maxWidth: 1152, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <p style={{ fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#3480d4', fontWeight: 700, marginBottom: 6 }}>
                        Testimonios
                    </p>
                    <h2 style={{ fontSize: 32, fontWeight: 900, color: '#122a52', margin: 0 }}>
                        Lo que dicen nuestros clientes
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
                    {reviews.map((r, i) => (
                        <div key={i} style={{
                            background: '#fff', borderRadius: 16,
                            padding: 28, border: '1px solid #c2d8f0',
                            position: 'relative',
                        }}>
                            {/* Comillas decorativas */}
                            <div style={{
                                position: 'absolute', top: -12, left: 24,
                                width: 32, height: 32, borderRadius: '50%',
                                background: '#3480d4', display: 'flex',
                                alignItems: 'center', justifyContent: 'center',
                                color: '#fff', fontWeight: 900, fontSize: 18,
                            }}>
                                "
                            </div>

                            {/* Estrellas de rating */}
                            <div style={{ marginBottom: 16, color: '#fbbf24', fontSize: 16, marginTop: 8 }}>
                                {'★'.repeat(r.stars)}
                            </div>

                            <p style={{ color: '#3a6499', marginBottom: 24, lineHeight: 1.6, fontSize: 14 }}>
                                {r.comment}
                            </p>

                            {/* Avatar e info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid #e8f1fa' }}>
                                <div style={{
                                    width: 44, height: 44, borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #1b3f72, #3480d4)',
                                    color: '#fff', display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontWeight: 700, fontSize: 14,
                                }}>
                                    {r.avatar}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 600, color: '#122a52', fontSize: 14 }}>{r.name}</p>
                                    <p style={{ fontSize: 12, color: '#3a6499' }}>{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}