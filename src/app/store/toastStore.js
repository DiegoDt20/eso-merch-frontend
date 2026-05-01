import { create } from 'zustand';

/**
 * Store global para el sistema de toasts (notificaciones flotantes).
 * Permite mostrar mensajes desde cualquier componente sin pasar props.
 *
 * Uso:
 *   const { showToast } = useToastStore();
 *   showToast('Producto agregado al carrito');
 */
const useToastStore = create((set) => ({
    // Estado actual del toast
    message: '',
    visible: false,

    /**
     * Muestra un toast con un mensaje personalizado.
     * Si ya hay uno visible, lo reemplaza.
     */
    showToast: (message) => {
        set({ message, visible: true });
    },

    /**
     * Oculta el toast actual.
     * Se llama automáticamente después de 2.5 segundos.
     */
    hideToast: () => {
        set({ visible: false });
    },
}));

export default useToastStore;