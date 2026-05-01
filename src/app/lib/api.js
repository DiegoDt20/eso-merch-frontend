import axios from 'axios';

/**
 * Instancia de axios configurada para la API de Laravel.
 * Todas las peticiones usarán esta base URL automáticamente.
 */
const api = axios.create({
    // URL base de la API de Laravel
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api',

    // Cabeceras por defecto para todas las peticiones
    headers: {
        'Content-Type': 'application/json',
        'Accept':        'application/json',
    },
});

/**
 * Interceptor de peticiones.
 * Agrega automáticamente el token de autenticación
 * si el usuario está logueado.
 */
api.interceptors.request.use((config) => {
    // Lee el token guardado al hacer login
    const token = localStorage.getItem('token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;