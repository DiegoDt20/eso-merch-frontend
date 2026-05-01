'use client';

import { useState } from 'react';
import api from '../lib/api';
import Link from 'next/link';

/**
 * Página de historial de pedidos del cliente.
 * El cliente ingresa su email y ve todos sus pedidos registrados.
 * URL: /mis-pedidos
 */
export default function MisPedidosPage() {
    const [email, setEmail]     = useState('');
    const [orders, setOrders]   = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const [error, setError]     = useState('');

    // Busca los pedidos del cliente por su email
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSearched(false);

        try {
            // Llama al endpoint que busca pedidos por email
            const res = await api.get(`/orders/by-email?email=${email}`);
            setOrders(res.data.orders || []);
            setSearched(true);
        } catch {
            setError('No se pudieron cargar los pedidos. Intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    // Colores según el estado del pedido
    const statusColor = (status) => ({
        'pending':    { bg: '#fff8e1', color: '#b45309', border: '#fde68a' },
        'processing': { bg: '#e0f2fe', color: '#0369a1', border: '#bae6fd' },
        'shipped':    { bg: '#ede9fe', color: '#6d28d9', border: '#ddd6fe' },
        'delivered':  { bg: '#dcfce7', color: '#15803d', border: '#bbf7d0' },
        'cancelled':  { bg: '#fee2e2', color: '#b91c1c', border: '#fecaca' },
    }[status] || { bg: '#f1f5f9', color: '#475569', border: '#e2e8f0' });

    // Texto legible del estado
    const statusText = (status) => ({
        'pending':    'Pendiente',
        'processing': 'En proceso',
        'shipped':    'Enviado',
        'delivered':  'Entregado',
        'cancelled':  'Cancelado',
    }[status] || status);

    return (
        <main style={{ background: '#e8f1fa', minHeight: '100vh' }}>

            {/* Header */}
            <div style={{ background: '#1b3f72', borderBottom: '1px solid rgba(168,204,240,0.15)', padding: '48px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(168,204,240,0.7)', marginBottom: 12 }}>
                    Tu historial
                </p>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', color: '#ffffff', margin: 0 }}>
                    Mis pedidos
                </h1>
            </div>

            <div style={{ maxWidth: 800, margin: '0 auto', padding: '48px 24px' }}>

                {/* Formulario de búsqueda por email */}
                <div style={{ background: '#ffffff', border: '1px solid #c2d8f0', borderRadius: 16, padding: 28, marginBottom: 32 }}>
                    <h2 style={{ fontSize: 14, fontWeight: 700, color: '#122a52', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Buscar mis pedidos
                    </h2>
                    <p style={{ fontSize: 13, color: '#3a6499', marginBottom: 20 }}>
                        Ingresa el email que usaste al hacer tu compra.
                    </p>
                    <form onSubmit={handleSearch} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                            style={{
                                flex: 1, minWidth: 200,
                                padding: '12px 16px', borderRadius: 10,
                                border: '1px solid #c2d8f0', background: '#f5f9ff',
                                color: '#122a52', fontSize: 14, outline: 'none',
                            }}
                        />
                        <button type="submit" disabled={loading} style={{
                            padding: '12px 24px', borderRadius: 10,
                            background: loading ? '#daeaf8' : '#1b3f72',
                            color: loading ? '#3a6499' : '#fff',
                            border: 'none', fontWeight: 600, fontSize: 14,
                            cursor: loading ? 'not-allowed' : 'pointer',
                            textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>
                            {loading ? 'Buscando...' : 'Buscar'}
                        </button>
                    </form>
                </div>

                {/* Error */}
                {error && (
                    <div style={{ background: '#fde8e8', border: '1px solid #f5c2c2', color: '#c0392b', padding: '14px 20px', borderRadius: 12, marginBottom: 24, fontSize: 14 }}>
                        {error}
                    </div>
                )}

                {/* Sin resultados */}
                {searched && orders.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '48px 0' }}>
                        <p style={{ fontSize: 40, marginBottom: 16 }}>📭</p>
                        <p style={{ color: '#3a6499', marginBottom: 24 }}>No encontramos pedidos con ese email.</p>
                        <Link href="/productos" style={{
                            padding: '12px 24px', borderRadius: 100,
                            background: '#1b3f72', color: '#fff',
                            fontSize: 14, fontWeight: 600, textDecoration: 'none',
                            textTransform: 'uppercase', letterSpacing: '0.05em',
                        }}>
                            Ver catálogo
                        </Link>
                    </div>
                )}

                {/* Lista de pedidos */}
                {orders.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <p style={{ fontSize: 13, color: '#3a6499', marginBottom: 4 }}>
                            {orders.length} pedido{orders.length > 1 ? 's' : ''} encontrado{orders.length > 1 ? 's' : ''}
                        </p>
                        {orders.map(order => (
                            <div key={order.id} style={{
                                background: '#ffffff', border: '1px solid #c2d8f0',
                                borderRadius: 16, padding: 24, overflow: 'hidden',
                            }}>
                                {/* Cabecera del pedido */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, flexWrap: 'wrap', gap: 12 }}>
                                    <div>
                                        <p style={{ fontSize: 11, color: '#3a6499', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
                                            Número de orden
                                        </p>
                                        <p style={{ fontSize: 16, fontWeight: 700, color: '#1b3f72' }}>
                                            {order.order_number}
                                        </p>
                                    </div>
                                    {/* Badge de estado */}
                                    <span style={{
                                        padding: '5px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                                        background: statusColor(order.status).bg,
                                        color: statusColor(order.status).color,
                                        border: `1px solid ${statusColor(order.status).border}`,
                                    }}>
                                        {statusText(order.status)}
                                    </span>
                                </div>

                                {/* Productos del pedido */}
                                <div style={{ borderTop: '1px solid #e8f1fa', paddingTop: 16, marginBottom: 16 }}>
                                    {order.products.map(product => (
                                        <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                                            <span style={{ fontSize: 13, color: '#122a52' }}>
                                                {product.name}
                                                <span style={{ color: '#3a6499', marginLeft: 8 }}>x{product.pivot.quantity}</span>
                                            </span>
                                            <span style={{ fontSize: 13, fontWeight: 600, color: '#1b3f72' }}>
                                                S/. {(product.pivot.price * product.pivot.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer del pedido */}
                                <div style={{ borderTop: '1px solid #e8f1fa', paddingTop: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
                                    <div style={{ display: 'flex', gap: 20 }}>
                                        {/* Método de pago */}
                                        <div>
                                            <p style={{ fontSize: 11, color: '#3a6499', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Pago</p>
                                            <p style={{ fontSize: 13, fontWeight: 600, color: '#122a52', textTransform: 'capitalize' }}>{order.payment_method}</p>
                                        </div>
                                        {/* Fecha */}
                                        <div>
                                            <p style={{ fontSize: 11, color: '#3a6499', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Fecha</p>
                                            <p style={{ fontSize: 13, fontWeight: 600, color: '#122a52' }}>
                                                {new Date(order.created_at).toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' })}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Total */}
                                    <div style={{ textAlign: 'right' }}>
                                        <p style={{ fontSize: 11, color: '#3a6499', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 2 }}>Total</p>
                                        <p style={{ fontSize: 20, fontWeight: 700, color: '#1b3f72' }}>S/. {Number(order.total).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}