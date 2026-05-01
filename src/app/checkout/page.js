'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '../lib/api';
import useCartStore from '../store/cartStore';

export default function CheckoutPage() {
    const router        = useRouter();
    const items         = useCartStore(state => state.items);
    const getSubtotal   = useCartStore(state => state.getSubtotal);
    const clearCart     = useCartStore(state => state.clearCart);
    const [loading, setLoading] = useState(false);
    const [error, setError]     = useState('');
    const [form, setForm] = useState({
        name: '', email: '', phone: '',
        address: '', city: '', department: 'lima',
        payment_method: 'yape',
    });

    const shipping = 10.00;
    const subtotal = getSubtotal();
    const total    = subtotal + shipping;

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await api.post('/orders', {
                ...form,
                products: items.map(i => ({ id: i.id, quantity: i.quantity })),
            });
            clearCart();
            router.push(`/confirmacion?orden=${res.data.order.order_number}`);
        } catch {
            setError('Error al procesar el pedido. Intenta de nuevo.');
            setLoading(false);
        }
    };

    if (items.length === 0) return (
        <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f1fa' }}>
            <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#3a6499', marginBottom: 24 }}>No tienes productos en el carrito.</p>
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

    const inputStyle = {
        background: '#ffffff', border: '1px solid #c2d8f0',
        color: '#122a52', padding: '12px 16px', borderRadius: 10,
        width: '100%', fontSize: 14, outline: 'none',
        boxSizing: 'border-box',
    };

    const labelStyle = {
        fontSize: 12, color: '#3a6499', marginBottom: 8,
        display: 'block', textTransform: 'uppercase', letterSpacing: '0.05em',
    };

    const sectionStyle = {
        background: '#ffffff', border: '1px solid #c2d8f0',
        borderRadius: 16, padding: 24, marginBottom: 20,
    };

    return (
        <main style={{ background: '#e8f1fa', minHeight: '100vh' }}>

            {/* Header */}
            <div style={{ background: '#1b3f72', borderBottom: '1px solid rgba(168,204,240,0.15)', padding: '48px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(168,204,240,0.7)', marginBottom: 12 }}>
                    Último paso
                </p>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', margin: 0 }}>
                    Finalizar pedido
                </h1>
            </div>

            <div style={{ maxWidth: 1152, margin: '0 auto', padding: '48px 24px' }}>

                {error && (
                    <div style={{ background: '#fde8e8', border: '1px solid #f5c2c2', color: '#c0392b', padding: '14px 20px', borderRadius: 12, marginBottom: 24, fontSize: 14 }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 32, alignItems: 'start' }}>

                    <div>
                        {/* Datos personales */}
                        <div style={sectionStyle}>
                            <h2 style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20, color: '#122a52' }}>
                                Datos personales
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label style={labelStyle}>Nombre completo *</label>
                                    <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Correo electrónico *</label>
                                    <input type="email" name="email" value={form.email} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Teléfono</label>
                                    <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>
                        </div>

                        {/* Dirección */}
                        <div style={sectionStyle}>
                            <h2 style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20, color: '#122a52' }}>
                                Dirección de envío
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                                <div style={{ gridColumn: '1 / -1' }}>
                                    <label style={labelStyle}>Dirección *</label>
                                    <input name="address" value={form.address} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Ciudad *</label>
                                    <input name="city" value={form.city} onChange={handleChange} required style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Departamento *</label>
                                    <select name="department" value={form.department} onChange={handleChange} style={inputStyle}>
                                        {['lima','arequipa','cusco','trujillo','piura','chiclayo','iquitos','huancayo','tacna','otro'].map(d => (
                                            <option key={d} value={d}>{d.charAt(0).toUpperCase() + d.slice(1)}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Método de pago */}
                        <div style={sectionStyle}>
                            <h2 style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20, color: '#122a52' }}>
                                Método de pago
                            </h2>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                {['yape','plin','efectivo','transferencia'].map(method => (
                                    <label key={method} style={{
                                        border: `1px solid ${form.payment_method === method ? '#1b3f72' : '#c2d8f0'}`,
                                        background: form.payment_method === method ? '#daeaf8' : '#ffffff',
                                        borderRadius: 12, padding: '14px 16px', cursor: 'pointer',
                                        display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.2s',
                                    }}>
                                        <input type="radio" name="payment_method" value={method} checked={form.payment_method === method} onChange={handleChange} style={{ accentColor: '#1b3f72' }} />
                                        <span style={{ fontWeight: 600, fontSize: 13, textTransform: 'capitalize', color: '#122a52' }}>{method}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Resumen */}
                    <div style={{ background: '#ffffff', border: '1px solid #c2d8f0', borderRadius: 20, padding: 28, position: 'sticky', top: 80 }}>
                        <h2 style={{ fontWeight: 700, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20, color: '#122a52' }}>
                            Tu pedido
                        </h2>

                        <div style={{ marginBottom: 20 }}>
                            {items.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <span style={{ color: '#3a6499', fontSize: 13 }}>{item.name} x{item.quantity}</span>
                                    <span style={{ fontSize: 13, fontWeight: 500, color: '#122a52' }}>S/. {((item.sale_price ?? item.price) * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid #e8f1fa', paddingTop: 16 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                <span style={{ color: '#3a6499', fontSize: 14 }}>Subtotal</span>
                                <span style={{ fontSize: 14, color: '#122a52' }}>S/. {subtotal.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <span style={{ color: '#3a6499', fontSize: 14 }}>Envío</span>
                                <span style={{ fontSize: 14, color: '#122a52' }}>S/. {shipping.toFixed(2)}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 16, borderTop: '1px solid #e8f1fa', marginBottom: 24 }}>
                                <span style={{ fontWeight: 700, color: '#122a52' }}>Total</span>
                                <span style={{ fontWeight: 700, fontSize: 20, color: '#1b3f72' }}>S/. {total.toFixed(2)}</span>
                            </div>

                            <button type="submit" disabled={loading} style={{
                                width: '100%', padding: '14px', fontSize: 14,
                                borderRadius: 100, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                                fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                                background: loading ? '#daeaf8' : '#1b3f72',
                                color: loading ? '#3a6499' : '#ffffff',
                                transition: 'all 0.2s',
                            }}>
                                {loading ? 'Procesando...' : 'Confirmar pedido'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}