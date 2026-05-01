'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import useCartStore from '../store/cartStore';

/**
 * Componente del botón del carrito con badge dinámico.
 * Muestra un círculo rojo con la cantidad de productos agregados.
 * Se actualiza en tiempo real al agregar o quitar items.
 *
 * Usa estado 'mounted' para evitar errores de hidratación en SSR
 * (el carrito es client-side y el server no conoce los datos).
 */
export default function CartBadge() {
    const getTotalItems = useCartStore(state => state.getTotalItems);

    // Estado para saber si ya estamos en el cliente
    // Evita errores de hidratación al hacer SSR
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Cantidad total de productos en el carrito
    const totalItems = mounted ? getTotalItems() : 0;

    return (
        <Link href="/carrito" style={{
            position: 'relative',
            fontSize: 13,
            background: '#3480d4',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: 100,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'all 0.2s',
        }}>
            {/* Ícono del carrito */}
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Carrito

            {/* Badge con la cantidad — solo aparece si hay items */}
            {mounted && totalItems > 0 && (
                <span style={{
                    position: 'absolute',
                    top: -8,
                    right: -8,
                    background: '#dc2626',
                    color: '#fff',
                    fontSize: 11,
                    fontWeight: 700,
                    borderRadius: '50%',
                    minWidth: 22,
                    height: 22,
                    padding: '0 6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #1b3f72',
                    boxShadow: '0 2px 8px rgba(220,38,38,0.4)',
                    animation: 'pulse 0.4s ease-out',
                }}>
                    {totalItems > 99 ? '99+' : totalItems}
                </span>
            )}
        </Link>
    );
}