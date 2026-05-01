import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Store global del carrito de compras.
 * Usa Zustand con persist para guardar el carrito
 * en localStorage y no perderlo al recargar la página.
 */
const useCartStore = create(
    persist(
        (set, get) => ({
            // Lista de productos en el carrito
            items: [],

            /**
             * Agrega un producto al carrito.
             * Si ya existe, aumenta la cantidad.
             */
            addItem: (product) => {
                const items = get().items;
                const exists = items.find(i => i.id === product.id);

                if (exists) {
                    // Si ya existe, incrementa la cantidad
                    set({
                        items: items.map(i =>
                            i.id === product.id
                                ? { ...i, quantity: i.quantity + 1 }
                                : i
                        ),
                    });
                } else {
                    // Si no existe, lo agrega con cantidad 1
                    set({ items: [...items, { ...product, quantity: 1 }] });
                }
            },

            /**
             * Elimina un producto del carrito por su ID.
             */
            removeItem: (id) => {
                set({ items: get().items.filter(i => i.id !== id) });
            },

            /**
             * Cambia la cantidad de un producto en el carrito.
             * Si la cantidad llega a 0 lo elimina.
             */
            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    set({ items: get().items.filter(i => i.id !== id) });
                } else {
                    set({
                        items: get().items.map(i =>
                            i.id === id ? { ...i, quantity } : i
                        ),
                    });
                }
            },

            /**
             * Vacía completamente el carrito.
             * Se usa después de completar una orden.
             */
            clearCart: () => set({ items: [] }),

            /**
             * Calcula el total de items en el carrito.
             * Suma todas las cantidades.
             */
            getTotalItems: () => {
                return get().items.reduce((sum, i) => sum + i.quantity, 0);
            },

            /**
             * Calcula el subtotal del carrito.
             * Usa el precio de oferta si existe.
             */
            getSubtotal: () => {
                return get().items.reduce((sum, i) => {
                    const price = i.sale_price ?? i.price;
                    return sum + (price * i.quantity);
                }, 0);
            },
        }),
        {
            // Nombre de la clave en localStorage
            name: 'cart-storage',
        }
    )
);

export default useCartStore;