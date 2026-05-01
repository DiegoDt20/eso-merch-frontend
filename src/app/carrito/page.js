'use client';

import Link from 'next/link';
import useCartStore from '../store/cartStore';
import { storageUrl } from '../lib/storage';

export default function CarritoPage() {
    const items          = useCartStore(state => state.items);
    const removeItem     = useCartStore(state => state.removeItem);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const getSubtotal    = useCartStore(state => state.getSubtotal);
    const clearCart      = useCartStore(state => state.clearCart);

    const shipping = 10.00;
    const subtotal = getSubtotal();
    const total    = subtotal + shipping;

    if (items.length === 0) return (
        <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f1fa' }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 64, marginBottom: 24 }}>🛒</p>
                <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12, color: '#122a52' }}>Tu carrito está vacío</h1>
                <p style={{ color: '#3a6499', marginBottom: 32 }}>Agrega productos desde el catálogo.</p>
                <Link href="/productos" style={{
                    padding: '12px 28px', borderRadius: 100,
                    background: '#1b3f72', color: '#fff',
                    fontSize: 14, fontWeight: 600, textDecoration: 'none',
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                }}>
                    Ver catálogo
                </Link>
            </div>
        </main>
    );

    return (
        <main style={{ background: '#e8f1fa', minHeight: '100vh' }}>

            {/* Header */}
            <div style={{ background: '#1b3f72', borderBottom: '1px solid rgba(168,204,240,0.15)', padding: '48px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(168,204,240,0.7)', marginBottom: 12 }}>
                    Tu selección
                </p>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', margin: 0 }}>
                    Carrito
                </h1>
            </div>

            <div style={{ maxWidth: 1152, margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>

                {/* Lista productos */}
                <div style={{ background: '#ffffff', borderRadius: 20, border: '1px solid #c2d8f0', overflow: 'hidden' }}>
                    {items.map((item, index) => (
                        <div key={item.id} style={{
                            display: 'flex', gap: 20, padding: '20px 24px',
                            borderBottom: index < items.length - 1 ? '1px solid #e8f1fa' : 'none',
                            alignItems: 'center',
                        }}>
                            {/* Imagen */}
                            <div style={{ width: 80, height: 80, borderRadius: 12, overflow: 'hidden', background: '#daeaf8', flexShrink: 0 }}>
                                {item.image ? (
                                    <img src={storageUrl(item.image)} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: 'rgba(27,63,114,0.15)', fontSize: 10, fontWeight: 900 }}>ESO</span>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div style={{ flex: 1 }}>
                                <p style={{ fontWeight: 600, marginBottom: 4, color: '#122a52' }}>{item.name}</p>
                                <p style={{ color: '#3a6499', fontSize: 13 }}>S/. {item.sale_price ?? item.price} c/u</p>
                            </div>

                            {/* Cantidad */}
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #c2d8f0', borderRadius: 10, overflow: 'hidden', background: '#f5f9ff' }}>
                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    style={{ padding: '8px 14px', background: 'transparent', color: '#1b3f72', border: 'none', cursor: 'pointer', fontSize: 16 }}>−</button>
                                <span style={{ padding: '8px 14px', borderLeft: '1px solid #c2d8f0', borderRight: '1px solid #c2d8f0', fontWeight: 600, color: '#122a52' }}>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    style={{ padding: '8px 14px', background: 'transparent', color: '#1b3f72', border: 'none', cursor: 'pointer', fontSize: 16 }}>+</button>
                            </div>

                            {/* Subtotal */}
                            <p style={{ fontWeight: 700, minWidth: 80, textAlign: 'right', color: '#1b3f72' }}>
                                S/. {((item.sale_price ?? item.price) * item.quantity).toFixed(2)}
                            </p>

                            {/* Eliminar */}
                            <button onClick={() => removeItem(item.id)}
                                style={{ background: 'transparent', border: 'none', color: '#a8ccf0', cursor: 'pointer', fontSize: 18, padding: 8 }}>✕</button>
                        </div>
                    ))}

                    <div style={{ padding: '12px 24px' }}>
                        <button onClick={clearCart}
                            style={{ background: 'transparent', border: 'none', color: '#3a6499', cursor: 'pointer', fontSize: 13 }}>
                            Vaciar carrito
                        </button>
                    </div>
                </div>

                {/* Resumen */}
                <div style={{ background: '#ffffff', border: '1px solid #c2d8f0', borderRadius: 20, padding: 28, position: 'sticky', top: 80 }}>
                    <h2 style={{ fontWeight: 700, fontSize: 16, marginBottom: 24, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#122a52' }}>
                        Resumen
                    </h2>
                    <div style={{ marginBottom: 20 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                            <span style={{ color: '#3a6499', fontSize: 14 }}>Subtotal</span>
                            <span style={{ fontSize: 14, color: '#122a52' }}>S/. {subtotal.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                            <span style={{ color: '#3a6499', fontSize: 14 }}>Envío</span>
                            <span style={{ fontSize: 14, color: '#122a52' }}>S/. {shipping.toFixed(2)}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid #e8f1fa' }}>
                            <span style={{ fontWeight: 700, color: '#122a52' }}>Total</span>
                            <span style={{ fontWeight: 700, fontSize: 18, color: '#1b3f72' }}>S/. {total.toFixed(2)}</span>
                        </div>
                    </div>
                    <Link href="/checkout" style={{
                        display: 'block', textAlign: 'center', textDecoration: 'none',
                        padding: '14px', borderRadius: 100,
                        background: '#1b3f72', color: '#fff',
                        fontWeight: 600, fontSize: 14,
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>
                        Proceder al pago
                    </Link>
                    <Link href="/productos" style={{
                        display: 'block', textAlign: 'center', textDecoration: 'none',
                        padding: '12px', borderRadius: 100, marginTop: 10,
                        border: '1px solid #c2d8f0', color: '#3a6499',
                        fontWeight: 600, fontSize: 13,
                        textTransform: 'uppercase', letterSpacing: '0.05em',
                    }}>
                        Seguir comprando
                    </Link>
                </div>
            </div>
        </main>
    );
}