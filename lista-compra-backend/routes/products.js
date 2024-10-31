// Configurar las rutas para los productos
const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Crear un producto
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
})

// Obtener un producto
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Marcar producto como comprados
router.put('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { bought: true },
            { new: true }
        );
        res.json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;