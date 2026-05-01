'use client';

import { useEffect } from 'react';
import useToastStore from '../store/toastStore';

/**
 * Componente Toast — notificación flotante.
 * Aparece en la esquina inferior izquierda cuando se agrega algo al carrito.
 * Se cierra automáticamente después de 2.5 segundos.
 * Usa un store global para que cualquier página pueda mostrarlo.
 */
export default function Toast() {
    const { message, visible, hideToast } = useToastStore();

    // Auto-cierra el toast después de 2.5 segundos
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => hideToast(), 2500);
            return () => clearTimeout(timer);
        }
    }, [visible, hideToast]);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            zIndex: 200,
            background: '#1b3f72',
            color: '#fff',
            padding: '14px 20px',
            borderRadius: 12,
            boxShadow: '0 8px 32px rgba(27,63,114,0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            minWidth: 280,
            maxWidth: 360,
            animation: 'slideInLeft 0.3s ease-out',
            border: '1px solid rgba(168,204,240,0.2)',
        }}>
            {/* Ícono de check verde */}
            <div style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: '#22c55e',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}>
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
            </div>

            {/* Mensaje */}
            <div style={{ flex: 1 }}>
                <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: '#fff' }}>
                    {message || 'Agregado al carrito'}
                </p>
                <p style={{ fontSize: 11, color: 'rgba(168,204,240,0.8)', margin: 0, marginTop: 2 }}>
                    Revisa tu carrito para finalizar
                </p>
            </div>

            {/* Botón cerrar */}
            <button onClick={hideToast} style={{
                background: 'transparent',
                border: 'none',
                color: 'rgba(168,204,240,0.7)',
                cursor: 'pointer',
                fontSize: 18,
                padding: 4,
                lineHeight: 1,
            }}>
                ×
            </button>
        </div>
    );
}