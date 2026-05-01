'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import api from '../lib/api';
import Link from 'next/link';
import useCartStore from '../store/cartStore';
import useToastStore from '../store/toastStore';
import { storageUrl } from '../lib/storage';

/**
 * Componente interno con la lógica del catálogo.
 * Está separado para envolverlo en <Suspense>, requisito
 * de Next.js 15+ cuando se usa useSearchParams() en static export.
 */
function ProductosContent() {
    const searchParams = useSearchParams();
    const [products, setProducts]     = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading]       = useState(true);
    const [search, setSearch]         = useState('');
    const [selected, setSelected]     = useState(searchParams.get('categoria') || '');
    const addItem    = useCartStore(state => state.addItem);
    const showToast  = useToastStore(state => state.showToast);

    // Carga las categorías al montar el componente
    useEffect(() => {
        api.get('/categories').then(res => setCategories(res.data || []));
    }, []);

    // Recarga los productos cuando cambia la búsqueda o el filtro
    useEffect(() => {
        setLoading(true);
        let url = '/products?';
        if (selected) url += `category=${selected}&`;
        if (search)   url += `search=${search}&`;
        api.get(url).then(res => {
            setProducts(res.data.data || []);
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [selected, search]);

    return (
        <main style={{ background: '#e8f1fa', minHeight: '100vh' }}>

            {/* Header */}
            <div style={{ background: '#1b3f72', borderBottom: '1px solid rgba(168,204,240,0.15)', padding: '48px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: 11, letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(168,204,240,0.7)', marginBottom: 12 }}>
                    Tienda oficial
                </p>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff', margin: 0 }}>
                    Catálogo
                </h1>
            </div>

            <div style={{ maxWidth: 1152, margin: '0 auto', padding: '48px 24px' }}>

                {/* Barra de búsqueda */}
                <div style={{ display: 'flex', gap: 16, marginBottom: 40, alignItems: 'center', flexWrap: 'wrap' }}>
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        style={{
                            flex: 1, minWidth: 200, padding: '12px 18px',
                            borderRadius: 100, border: '1px solid #c2d8f0',
                            background: '#ffffff', color: '#122a52',
                            fontSize: 13, outline: 'none',
                        }}
                    />
                </div>

                {/* Filtros por categoría */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 48, flexWrap: 'wrap' }}>
                    <button
                        onClick={() => setSelected('')}
                        style={{
                            padding: '8px 20px', borderRadius: 100, fontSize: 12,
                            fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                            cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                            background: selected === '' ? '#1b3f72' : '#ffffff',
                            color: selected === '' ? '#ffffff' : '#3a6499',
                            boxShadow: selected === '' ? 'none' : '0 0 0 1px #c2d8f0',
                        }}
                    >
                        Todos
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelected(cat.slug)}
                            style={{
                                padding: '8px 20px', borderRadius: 100, fontSize: 12,
                                fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase',
                                cursor: 'pointer', transition: 'all 0.2s', border: 'none',
                                background: selected === cat.slug ? '#1b3f72' : '#ffffff',
                                color: selected === cat.slug ? '#ffffff' : '#3a6499',
                                boxShadow: selected === cat.slug ? 'none' : '0 0 0 1px #c2d8f0',
                            }}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid de productos */}
                {loading ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
                        {[...Array(8)].map((_, i) => (
                            <div key={i}>
                                <div style={{ height: 220, background: '#daeaf8', borderRadius: 12, marginBottom: 12 }} />
                                <div style={{ height: 16, width: '70%', background: '#daeaf8', borderRadius: 6, marginBottom: 8 }} />
                                <div style={{ height: 14, width: '40%', background: '#daeaf8', borderRadius: 6 }} />
                            </div>
                        ))}
                    </div>
                ) : products.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '96px 0' }}>
                        <p style={{ fontSize: 40, marginBottom: 16 }}>🔍</p>
                        <p style={{ color: '#3a6499' }}>No se encontraron productos.</p>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 24 }}>
                        {products.map(product => (
                            <div key={product.id} style={{
                                background: '#ffffff', borderRadius: 16,
                                border: '1px solid #c2d8f0', overflow: 'hidden',
                                transition: 'box-shadow 0.2s, border-color 0.2s',
                            }}>
                                <Link href={`/productos/${product.slug}`} style={{ textDecoration: 'none', color: '#122a52' }}>
                                    <div style={{ height: 220, background: '#daeaf8', position: 'relative', overflow: 'hidden' }}>
                                        {product.image ? (
                                            <img
                                                src={storageUrl(product.image)}
                                                alt={product.name}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <span style={{ color: 'rgba(27,63,114,0.15)', fontWeight: 900, fontSize: 40 }}>ESO</span>
                                            </div>
                                        )}
                                        {product.sale_price && (
                                            <span style={{ position: 'absolute', top: 12, left: 12, background: '#3480d4', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 100 }}>
                                                OFERTA
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ padding: '16px 16px 8px' }}>
                                        <p style={{ fontWeight: 600, fontSize: 14, marginBottom: 6, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#122a52' }}>
                                            {product.name}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                                            {product.sale_price ? (
                                                <>
                                                    <span style={{ fontWeight: 700, fontSize: 14, color: '#3480d4' }}>S/. {product.sale_price}</span>
                                                    <span style={{ fontSize: 12, color: '#3a6499', textDecoration: 'line-through' }}>S/. {product.price}</span>
                                                </>
                                            ) : (
                                                <span style={{ fontWeight: 700, fontSize: 14, color: '#1b3f72' }}>S/. {product.price}</span>
                                            )}
                                        </div>
                                    </div>
                                </Link>
                                <div style={{ padding: '0 16px 16px' }}>
                                    <button
                                        onClick={() => {
                                            addItem(product);
                                            showToast(`${product.name} agregado al carrito`);
                                        }}
                                        disabled={product.stock === 0}
                                        style={{
                                            width: '100%', padding: '10px', borderRadius: 10,
                                            background: product.stock === 0 ? '#e8f1fa' : '#1b3f72',
                                            color: product.stock === 0 ? '#a8ccf0' : '#ffffff',
                                            fontWeight: 600, fontSize: 12, letterSpacing: '0.05em',
                                            textTransform: 'uppercase', border: 'none',
                                            cursor: product.stock === 0 ? 'not-allowed' : 'pointer',
                                        }}
                                    >
                                        {product.stock === 0 ? 'Sin stock' : '+ Agregar'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

/**
 * Página del catálogo.
 * Envuelve el contenido en Suspense para permitir
 * el static export con useSearchParams().
 */
export default function ProductosPage() {
    return (
        <Suspense fallback={
            <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e8f1fa' }}>
                <p style={{ color: '#3a6499' }}>Cargando catálogo...</p>
            </div>
        }>
            <ProductosContent />
        </Suspense>
    );
}