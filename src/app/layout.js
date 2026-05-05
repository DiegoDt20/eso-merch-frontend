import { Geist } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import CartBadge from './components/CartBadge';
import Toast from './components/Toast';

const geist = Geist({ subsets: ['latin'] });

export const metadata = {
    title: 'Integridad Democrática — Tienda Oficial',
    description: 'Productos exclusivos de merchandising de Integridad Democrática',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={geist.className} style={{ background: '#e8f1fa', color: '#122a52', minHeight: '100vh', margin: 0 }}>

                <style>{`
                    /* Navbar link hover */
                    .nav-link {
                        position: relative;
                        font-size: 13px;
                        color: rgba(168,204,240,0.75);
                        text-decoration: none;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        transition: color 0.25s ease;
                        padding-bottom: 2px;
                    }
                    .nav-link::after {
                        content: '';
                        position: absolute;
                        bottom: -2px; left: 0;
                        width: 0; height: 1.5px;
                        background: #5ba8f5;
                        transition: width 0.3s ease;
                        border-radius: 2px;
                    }
                    .nav-link:hover { color: #fff; }
                    .nav-link:hover::after { width: 100%; }

                    /* Navbar scroll effect */
                    .navbar-inner {
                        transition: padding 0.3s ease, background 0.3s ease;
                    }

                    /* Footer link hover */
                    .footer-link {
                        color: rgba(168,204,240,0.7);
                        font-size: 16px;
                        text-decoration: none;
                        transition: color 0.2s ease;
                        letter-spacing: 0.04em;
                    }
                    .footer-link:hover { color: #fff; }

                    /* Footer social icon hover */
                    .social-btn {
                        width: 36px; height: 36px;
                        border-radius: 50%;
                        background: rgba(255,255,255,0.06);
                        border: 1px solid rgba(168,204,240,0.15);
                        display: flex; align-items: center; justify-content: center;
                        transition: all 0.25s ease;
                        cursor: pointer;
                        text-decoration: none;
                    }
                    .social-btn:hover {
                        background: rgba(52,128,212,0.25);
                        border-color: rgba(52,128,212,0.5);
                        transform: translateY(-2px);
                    }

                    /* Fade in animación para el contenido */
                    .page-content {
                        animation: pageFadeIn 0.5s ease both;
                    }
                    @keyframes pageFadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }

                    /* Logo navbar hover */
                    .nav-logo {
                        transition: opacity 0.2s ease, transform 0.2s ease;
                    }
                    .nav-logo:hover { opacity: 0.85; transform: scale(1.02); }

                    /* Footer divider line glow */
                    .footer-divider {
                        height: 1px;
                        background: linear-gradient(90deg, transparent, rgba(52,128,212,0.4), rgba(168,204,240,0.2), transparent);
                        margin-bottom: 40px;
                    }

                    /* Dot pulsante footer */
                    @keyframes footerPulse {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.4; }
                    }
                `}</style>

                {/* ── NAVBAR ── */}
                <nav style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    background: 'rgba(15,34,64,0.96)',
                    backdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(52,128,212,0.2)',
                }}>
                    <div className="navbar-inner" style={{
                        maxWidth: 1152, margin: '0 auto',
                        padding: '10px 24px',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                        {/* Logo */}
                        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <Image
                                src="/integridadlogoh.webp"
                                alt="Integridad Democrática"
                                width={280}
                                height={72}
                                style={{ objectFit: 'contain', display: 'block' }}
                                priority
                            />
                        </Link>

                        {/* Links */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
                            <Link href="/productos" className="nav-link">Catálogo</Link>
                            <Link href="/mis-pedidos" className="nav-link">Mis pedidos</Link>
                            <CartBadge />
                        </div>
                    </div>
                </nav>

                {/* ── CONTENIDO ── */}
                <div className="page-content" style={{ paddingTop: 74 }}>
                    {children}
                </div>

                {/* ── FOOTER ── */}
                <footer style={{
                    background: 'linear-gradient(180deg, #0f2240 0%, #0a1628 100%)',
                    borderTop: '1px solid rgba(52,128,212,0.2)',
                    marginTop: 0,
                    padding: '56px 24px 32px',
                    position: 'relative',
                    overflow: 'hidden',
                }}>
                    {/* Glow decorativo fondo */}
                    <div style={{
                        position: 'absolute', bottom: -60, left: '50%',
                        transform: 'translateX(-50%)',
                        width: 500, height: 200,
                        background: 'radial-gradient(ellipse, rgba(52,128,212,0.1), transparent 70%)',
                        filter: 'blur(40px)',
                        pointerEvents: 'none',
                    }} />

                    <div style={{ maxWidth: 1152, margin: '0 auto', position: 'relative', zIndex: 1 }}>

                        {/* Fila superior */}
                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'flex-start', flexWrap: 'wrap', gap: 40,
                            marginBottom: 40,
                        }}>
                            {/* Logo + descripción */}
                            <div style={{ maxWidth: 320 }}>
                                <Image
                                    src="/integridadlogoh.webp"
                                    alt="Integridad Democrática"
                                    width={220}
                                    height={58}
                                    style={{ objectFit: 'contain', marginBottom: 16, display: 'block' }}
                                />
                                <p style={{
                                    color: 'rgba(168,204,240,0.6)', fontSize: 15,
                                    lineHeight: 1.7, margin: 0,
                                }}>
                                    Tienda oficial de merchandising para militantes, simpatizantes y dirigentes.
                                </p>
                                {/* Dot "en línea" */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 14 }}>
                                    <span style={{
                                        width: 7, height: 7, borderRadius: '50%',
                                        background: '#4ade80',
                                        display: 'inline-block',
                                        animation: 'footerPulse 2s infinite',
                                        boxShadow: '0 0 6px #4ade80',
                                    }} />
                                    <span style={{ fontSize: 13, color: 'rgba(168,204,240,0.6)', letterSpacing: '0.12em' }}>
                                        TIENDA ACTIVA 2026
                                    </span>
                                </div>
                            </div>

                            {/* Links */}
                            <div>
                                <p style={{
                                    fontSize: 13, color: '#5ba8f5', fontWeight: 700,
                                    letterSpacing: '0.25em', textTransform: 'uppercase',
                                    marginBottom: 16,
                                }}>
                                    Navegación
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <Link href="/productos" className="footer-link">Catálogo</Link>
                                    <Link href="/mis-pedidos" className="footer-link">Mis pedidos</Link>
                                    <Link href="/carrito" className="footer-link">Carrito</Link>
                                </div>
                            </div>

                            {/* Contacto */}
                            <div>
                                <p style={{
                                    fontSize: 13, color: '#5ba8f5', fontWeight: 700,
                                    letterSpacing: '0.25em', textTransform: 'uppercase',
                                    marginBottom: 16,
                                }}>
                                    Contacto
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <a href="https://wa.me/51999999999" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="#4ade80">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                        WhatsApp
                                    </a>
                                    <a href="https://www.instagram.com/eldiegodt/" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(168,204,240,0.6)" strokeWidth="1.8">
                                            <rect x="2" y="2" width="20" height="20" rx="5"/>
                                            <circle cx="12" cy="12" r="4.5"/>
                                            <circle cx="17.5" cy="6.5" r="1" fill="rgba(168,204,240,0.6)" stroke="none"/>
                                        </svg>
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="footer-divider" />

                        {/* Fila inferior */}
                        <div style={{
                            display: 'flex', justifyContent: 'space-between',
                            alignItems: 'center', flexWrap: 'wrap', gap: 16,
                        }}>
                            <p style={{ color: 'rgba(168,204,240,0.5)', fontSize: 14, margin: 0 }}>
                                © 2026 Integridad Democrática — Todos los derechos reservados
                            </p>
                            <p style={{ color: 'rgba(168,204,240,0.35)', fontSize: 13, margin: 0, letterSpacing: '0.08em' }}>
                                Hecho con ❤️ en Perú
                            </p>
                        </div>
                    </div>
                </footer>

                <Toast />
            </body>
        </html>
    );
}