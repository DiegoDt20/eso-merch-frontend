import { Geist } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import CartBadge from './components/CartBadge';
import Toast from './components/Toast';

const geist = Geist({ subsets: ['latin'] });

export const metadata = {
    title: 'Merch ESO — Tienda Oficial',
    description: 'Productos exclusivos de merchandising',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={geist.className} style={{ background: '#e8f1fa', color: '#122a52', minHeight: '100vh', margin: 0 }}>

                {/* Navbar */}
                <nav style={{
                    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
                    background: 'rgba(27,63,114,0.97)', backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}>
                    <div style={{ maxWidth: 1152, margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link href="/" style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>
                            ESO<span style={{ color: '#a8ccf0' }}>.</span>MERCH
                        </Link>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                            <Link href="/productos" style={{ fontSize: 13, color: 'rgba(168,204,240,0.85)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Catálogo
                            </Link>
                            <Link href="/mis-pedidos" style={{ fontSize: 13, color: 'rgba(168,204,240,0.85)', textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Mis pedidos
                            </Link>
                            <CartBadge />
                        </div>
                    </div>
                </nav>

                {/* Contenido */}
                <div style={{ paddingTop: 64 }}>
                    {children}
                </div>

                {/* Footer */}
                <footer style={{ background: '#122a52', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 96, padding: '48px 24px' }}>
                    <div style={{ maxWidth: 1152, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
                        <p style={{ fontSize: 20, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0, color: '#fff' }}>
                            ESO<span style={{ color: '#a8ccf0' }}>.</span>MERCH
                        </p>
                        <p style={{ color: 'rgba(168,204,240,0.6)', fontSize: 13, margin: 0 }}>
                            © 2026 — Todos los derechos reservados
                        </p>
                        <div style={{ display: 'flex', gap: 24 }}>
                            <Link href="/productos" style={{ color: 'rgba(168,204,240,0.7)', fontSize: 13, textDecoration: 'none' }}>Catálogo</Link>
                            <Link href="/mis-pedidos" style={{ color: 'rgba(168,204,240,0.7)', fontSize: 13, textDecoration: 'none' }}>Mis pedidos</Link>
                            <Link href="/carrito" style={{ color: 'rgba(168,204,240,0.7)', fontSize: 13, textDecoration: 'none' }}>Carrito</Link>
                        </div>
                    </div>
                </footer>

                {/* Toast global — aparece en todas las páginas al agregar productos */}
                <Toast />
            </body>
        </html>
    );
}