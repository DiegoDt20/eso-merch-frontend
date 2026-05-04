'use client';

import { useState } from 'react';

const TESTIMONIALS = [
    {
        id: 1,
        name: 'María Fernández',
        role: 'Militante — Lima',
        initials: 'MF',
        rating: 5,
        text: 'Excelente calidad en los polos. Se nota que son productos oficiales, el bordado del logo quedó perfecto. Lo recomiendo a todos los compañeros del partido.',
        color: '#3480d4',
    },
    {
        id: 2,
        name: 'Carlos Quispe',
        role: 'Dirigente — Arequipa',
        initials: 'CQ',
        rating: 5,
        text: 'Pedí gorras para toda la dirigencia regional y llegaron en tiempo récord. La atención por WhatsApp fue muy rápida. Definitivamente volvemos a pedir.',
        color: '#5ba8f5',
    },
    {
        id: 3,
        name: 'Ana Torres',
        role: 'Simpatizante — Trujillo',
        initials: 'AT',
        rating: 5,
        text: 'Los stickers y pins son de muy buena calidad. Perfectos para las actividades de campaña. El envío llegó antes de lo esperado.',
        color: '#4ade80',
    },
    {
        id: 4,
        name: 'Roberto Silva',
        role: 'Coordinador — Cusco',
        initials: 'RS',
        rating: 5,
        text: 'Compramos tazas y cuadernos para los eventos del partido. Todos quedaron impresionados con la calidad. El precio es muy justo para ser producto oficial.',
        color: '#f59e0b',
    },
    {
        id: 5,
        name: 'Lucía Mamani',
        role: 'Militante — Puno',
        initials: 'LM',
        rating: 5,
        text: 'Me llegó el polo en dos días. La tela es gruesa y el estampado no se despega. Ya hice mi segundo pedido. Totalmente recomendado.',
        color: '#a78bfa',
    },
];

function StarIcon({ filled }) {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill={filled ? '#f59e0b' : 'rgba(245,158,11,0.2)'}>
            <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5z"/>
        </svg>
    );
}

function TestimonialCard({ item, active }) {
    return (
        <div style={{
            background: active ? 'rgba(52,128,212,0.12)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${active ? 'rgba(52,128,212,0.4)' : 'rgba(52,128,212,0.15)'}`,
            borderRadius: 20,
            padding: '28px 24px',
            transition: 'all 0.4s ease',
            transform: active ? 'scale(1.02)' : 'scale(1)',
            position: 'relative',
            overflow: 'hidden',
            height: '100%',
        }}>
            {/* Comilla decorativa */}
            <div style={{
                position: 'absolute', top: 16, right: 20,
                fontSize: 64, lineHeight: 1,
                color: active ? 'rgba(52,128,212,0.2)' : 'rgba(52,128,212,0.08)',
                fontFamily: 'Georgia, serif',
                userSelect: 'none',
                transition: 'color 0.4s',
            }}>
                "
            </div>

            {/* Glow si activo */}
            {active && (
                <div style={{
                    position: 'absolute', top: -30, left: -30,
                    width: 120, height: 120, borderRadius: '50%',
                    background: `rgba(52,128,212,0.1)`,
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                }} />
            )}

            {/* Estrellas */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 16, position: 'relative' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < item.rating} />
                ))}
            </div>

            {/* Texto */}
            <p style={{
                fontSize: 13, color: 'rgba(168,204,240,0.8)',
                lineHeight: 1.75, marginBottom: 20,
                position: 'relative', zIndex: 1,
            }}>
                "{item.text}"
            </p>

            {/* Autor */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative' }}>
                <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: `${item.color}22`,
                    border: `2px solid ${item.color}55`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700, color: item.color,
                    flexShrink: 0,
                }}>
                    {item.initials}
                </div>
                <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>
                        {item.name}
                    </p>
                    <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.5)', letterSpacing: '0.04em' }}>
                        {item.role}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const prev = () => setActive(a => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    const next = () => setActive(a => (a + 1) % TESTIMONIALS.length);

    // Mostrar 3 cards: prev, active, next
    const visible = [
        TESTIMONIALS[(active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length],
        TESTIMONIALS[active],
        TESTIMONIALS[(active + 1) % TESTIMONIALS.length],
    ];

    return (
        <section style={{
            background: '#0f2240',
            borderTop: '1px solid rgba(52,128,212,0.15)',
            borderBottom: '1px solid rgba(52,128,212,0.15)',
            padding: '72px 5%',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Glow central */}
            <div style={{
                position: 'absolute', bottom: -60, left: '50%',
                transform: 'translateX(-50%)',
                width: 600, height: 200,
                background: 'radial-gradient(ellipse, rgba(52,128,212,0.12), transparent 70%)',
                filter: 'blur(40px)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 48 }}>
                    <p style={{
                        fontSize: 10, color: '#5ba8f5', fontWeight: 700,
                        letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 8,
                    }}>
                        Lo que dicen
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(22px, 3vw, 32px)',
                        fontWeight: 900, color: '#fff', margin: '0 0 10px',
                    }}>
                        Nuestra comunidad habla
                    </h2>
                    <p style={{ fontSize: 13, color: 'rgba(168,204,240,0.5)', maxWidth: 440, margin: '0 auto' }}>
                        Miles de militantes y simpatizantes ya representan el cambio.
                    </p>
                </div>

                {/* Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 16,
                    marginBottom: 36,
                }}>
                    {visible.map((item, i) => (
                        <TestimonialCard key={item.id} item={item} active={i === 1} />
                    ))}
                </div>

                {/* Controles */}
                <div style={{
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'center', gap: 16,
                }}>
                    {/* Prev */}
                    <button onClick={prev} style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(52,128,212,0.15)',
                        border: '1px solid rgba(52,128,212,0.35)',
                        color: '#a8ccf0', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, transition: 'all 0.2s ease',
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,128,212,0.3)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(52,128,212,0.15)'}
                    >
                        ←
                    </button>

                    {/* Dots */}
                    <div style={{ display: 'flex', gap: 6 }}>
                        {TESTIMONIALS.map((_, i) => (
                            <button key={i} onClick={() => setActive(i)} style={{
                                width: i === active ? 20 : 6,
                                height: 6, borderRadius: 3,
                                background: i === active ? '#3480d4' : 'rgba(52,128,212,0.3)',
                                border: 'none', cursor: 'pointer',
                                padding: 0, transition: 'all 0.3s ease',
                            }} />
                        ))}
                    </div>

                    {/* Next */}
                    <button onClick={next} style={{
                        width: 40, height: 40, borderRadius: '50%',
                        background: 'rgba(52,128,212,0.15)',
                        border: '1px solid rgba(52,128,212,0.35)',
                        color: '#a8ccf0', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 16, transition: 'all 0.2s ease',
                    }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(52,128,212,0.3)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'rgba(52,128,212,0.15)'}
                    >
                        →
                    </button>
                </div>

                {/* Rating global */}
                <div style={{
                    marginTop: 40,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 20, flexWrap: 'wrap',
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 4 }}>
                            4.9<span style={{ color: '#5ba8f5' }}>★</span>
                        </p>
                        <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                            Calificación
                        </p>
                    </div>
                    <div style={{ width: 1, height: 40, background: 'rgba(52,128,212,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 4 }}>
                            500<span style={{ color: '#5ba8f5' }}>+</span>
                        </p>
                        <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                            Pedidos
                        </p>
                    </div>
                    <div style={{ width: 1, height: 40, background: 'rgba(52,128,212,0.2)' }} />
                    <div style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: 36, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 4 }}>
                            98<span style={{ color: '#5ba8f5' }}>%</span>
                        </p>
                        <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                            Satisfacción
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}