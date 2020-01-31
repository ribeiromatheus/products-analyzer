import React, { useEffect, useState } from 'react';
import socketio from 'socket.io-client';

import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
    const [products, setProducts] = useState([]);

    const user_id = localStorage.getItem('user');

    const socket = socketio('http://localhost:3333', {
        query: { user_id }
    });

    useEffect(() => {
        socket.on('product', data => {
            setProducts([...products, data]);
        });
    }, [products, socket]);

    useEffect(() => {
        async function loadProducts() {
            const user_id = localStorage.getItem('user');
            const response = await api.get('/recognize', {
                headers: { user_id }
            });

            setProducts(response.data);
        }

        loadProducts();
    }, []);

    return (
        <>
            <ul className="product-list">
                {products.map(product => (
                    <li key={product._id}>
                        <img src={product.image_url} alt={product.name} />
                        <strong>{product.name}</strong>
                        <span>{product.status}</span>
                    </li>
                ))}
            </ul>
        </>
    );
}