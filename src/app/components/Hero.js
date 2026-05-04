'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Hero({ productsCount, categoriesCount }) {
    const glowRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!glowRef.current) return;
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            glowRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(52,128,212,0.12), transparent 60%)`;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        { label: 'Productos',    value: String(productsCount || 0),  suffix: '+' },
        { label: 'Categorías',   value: String(categoriesCount || 0), suffix: '+' },
        { label: 'Entrega Lima', value: '24',                         suffix: 'h' },
    ];

    return (
        <section style={{
            minHeight: '100vh', display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden', background: '#0f2240',
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #1a3a6b 0%, #162f5c 40%, #112448 100%)' }} />
            <div ref={glowRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', transition: 'background 0.3s ease' }} />
            <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 50px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)', width: 500, height: 500, borderRadius: '50%', border: '1px solid rgba(52,128,212,0.15)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: 400, height: 400, borderRadius: '50%', background: 'rgba(52,128,212,0.18)', filter: 'blur(90px)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: 300, height: 300, borderRadius: '50%', background: 'rgba(52,128,212,0.1)', filter: 'blur(70px)', pointerEvents: 'none' }} />

            <div style={{ flex: 1, display: 'flex', alignItems: 'center', position: 'relative', zIndex: 1, padding: '80px 5% 48px', maxWidth: 1200, margin: '0 auto', width: '100%', gap: 48 }}>

                {/* IZQUIERDA */}
                <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(52,128,212,0.18)', border: '1px solid rgba(52,128,212,0.4)', padding: '6px 16px', borderRadius: 100, marginBottom: 28, animation: 'fadeInDown 0.6s ease both' }}>
                        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80', animation: 'pulse 2s infinite', display: 'inline-block' }} />
                        <span style={{ fontSize: 11, color: '#a8ccf0', fontWeight: 600, letterSpacing: '0.15em' }}>TIENDA OFICIAL 2026</span>
                    </div>

                    <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, color: '#fff', lineHeight: 1.08, marginBottom: 8, letterSpacing: '-0.02em', animation: 'fadeInUp 0.7s ease 0.1s both' }}>
                        Viste tus <span style={{ color: '#5ba8f5' }}>valores</span>.<br />Representa<br />el cambio.
                    </h1>

                    <p style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', fontWeight: 300, color: 'rgba(168,204,240,0.75)', marginBottom: 18, animation: 'fadeInUp 0.7s ease 0.2s both' }}>
                        Merchandising oficial
                    </p>

                    <div style={{ width: 48, height: 3, background: '#3480d4', borderRadius: 2, marginBottom: 18, animation: 'expandWidth 0.8s ease 0.3s both' }} />

                    <p style={{ fontSize: 14, color: 'rgba(168,204,240,0.65)', lineHeight: 1.75, marginBottom: 32, maxWidth: 420, animation: 'fadeInUp 0.7s ease 0.3s both' }}>
                        Productos exclusivos para militantes, simpatizantes y dirigentes de Integridad Democrática. Calidad premium, hecho en Perú.
                    </p>

                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 36, animation: 'fadeInUp 0.7s ease 0.4s both' }}>
                        <Link href="/productos" style={{ padding: '14px 28px', borderRadius: 100, background: '#3480d4', color: '#fff', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 20px rgba(52,128,212,0.4)', display: 'inline-block' }}>
                            Ver catálogo →
                        </Link>
                        <Link href="/mis-pedidos" style={{ padding: '14px 28px', borderRadius: 100, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(168,204,240,0.3)', color: '#a8ccf0', fontSize: 13, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                            Mis pedidos
                        </Link>
                    </div>

                    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', animation: 'fadeInUp 0.7s ease 0.5s both' }}>
                        {['Calidad garantizada', 'Pago seguro', 'Envío 24–48h'].map((label, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#3480d4', boxShadow: '0 0 6px rgba(52,128,212,0.6)' }} />
                                <span style={{ fontSize: 11, color: 'rgba(168,204,240,0.6)' }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DERECHA */}
                <div style={{ flexShrink: 0, width: 'clamp(200px, 22vw, 260px)', animation: 'fadeInRight 0.8s ease 0.3s both' }}>
                    <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(52,128,212,0.25)', borderRadius: 20, padding: '24px 20px', textAlign: 'center', position: 'relative', backdropFilter: 'blur(12px)' }}>
                        <div style={{ position: 'absolute', top: -1, left: '20%', right: '20%', height: 2, background: 'linear-gradient(90deg, transparent, #3480d4, transparent)', borderRadius: 2 }} />
                        <div style={{ marginBottom: 8 }}>
                            <Image src="/integridadlogoh.webp" alt="Integridad Democrática" width={200} height={54} style={{ objectFit: 'contain', filter: 'brightness(1.1)' }} priority />
                        </div>
                        <p style={{ fontSize: 9, color: 'rgba(168,204,240,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Integridad Democrática</p>
                        <div style={{ borderTop: '1px solid rgba(52,128,212,0.15)', paddingTop: 14, marginBottom: 10 }}>
                            <p style={{ fontSize: 9, color: 'rgba(168,204,240,0.4)', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 10 }}>Producto destacado</p>
                        </div>
                        <div style={{ background: 'rgba(52,128,212,0.1)', border: '1px solid rgba(52,128,212,0.22)', borderRadius: 12, padding: 12, textAlign: 'left' }}>
                            <div style={{ width: '100%', height: 72, background: 'rgba(52,128,212,0.15)', borderRadius: 8, marginBottom: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'rgba(52,128,212,0.3)', border: '1px solid rgba(52,128,212,0.4)' }} />
                            </div>
                            <p style={{ fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 6 }}>Polo Oficial ID</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: 15, fontWeight: 800, color: '#5ba8f5' }}>S/ 45.00</span>
                                <span style={{ fontSize: 8, fontWeight: 700, background: 'rgba(74,222,128,0.15)', border: '1px solid rgba(74,222,128,0.3)', color: '#4ade80', padding: '2px 8px', borderRadius: 100 }}>NUEVO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STATS BAR */}
            <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderTop: '1px solid rgba(52,128,212,0.18)', background: 'rgba(0,0,0,0.15)', backdropFilter: 'blur(8px)' }}>
                {stats.map((s, i) => (
                    <div key={i} style={{ padding: '22px 16px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(52,128,212,0.12)' : 'none' }}>
                        <p style={{ fontSize: 28, fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: 5 }}>
                            {s.value}<span style={{ color: '#5ba8f5' }}>{s.suffix}</span>
                        </p>
                        <p style={{ fontSize: 10, color: 'rgba(168,204,240,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{s.label}</p>
                    </div>
                ))}
            </div>

            <style>{`
                @keyframes fadeInDown { from { opacity:0; transform:translateY(-16px) } to { opacity:1; transform:translateY(0) } }
                @keyframes fadeInUp   { from { opacity:0; transform:translateY(20px)  } to { opacity:1; transform:translateY(0) } }
                @keyframes fadeInRight{ from { opacity:0; transform:translateX(30px)  } to { opacity:1; transform:translateX(0) } }
                @keyframes expandWidth{ from { width:0; opacity:0 } to { width:48px; opacity:1 } }
                @keyframes pulse { 0%,100% { box-shadow:0 0 6px #4ade80 } 50% { box-shadow:0 0 14px #4ade80,0 0 24px rgba(74,222,128,0.4) } }
            `}</style>
        </section>
    );
}