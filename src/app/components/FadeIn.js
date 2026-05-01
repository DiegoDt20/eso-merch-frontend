'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Componente que envuelve cualquier contenido con animación fade-in.
 * El contenido aparece suavemente cuando entra al viewport del usuario.
 * Usa IntersectionObserver para detectar cuándo se debe activar.
 */
export default function FadeIn({ children, delay = 0, direction = 'up' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Observer que detecta cuando el elemento entra en pantalla
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setVisible(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [delay]);

    // Define el desplazamiento inicial según la dirección
    const transforms = {
        up:    'translateY(40px)',
        down:  'translateY(-40px)',
        left:  'translateX(40px)',
        right: 'translateX(-40px)',
    };

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translate(0)' : transforms[direction],
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
        >
            {children}
        </div>
    );
}