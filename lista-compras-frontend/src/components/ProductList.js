import React, { useState, UseEffect, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');

    // Obtener los productos
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await axios.get('http://localhost:3001/api/products');
            setProducts(res.data);
        };
        fetchProducts();
    }, [])
    
    // Agregar producto
    const addProduct = async () => {
        const res =await axios.post('http://localhost:3001/api/products', { name });
        setProducts([...products, res.data]);
        setName('');
    };

    return (
        <div>
            <h2>Lista de compras</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre del producto"
            />
            <button onClick={addProduct}>Agregar</button>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - {product.bought ? 'Comprado' : 'Pendiente'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
