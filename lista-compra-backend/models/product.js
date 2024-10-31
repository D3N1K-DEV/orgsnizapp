// Crear el modelo de producto: Definir el esquema para un producto
const mongoose = require('mongoose');

const ProductShema = new mongoose.Schema({
    name: {type: String, required: true},
    quantity: {type: Number, required: true, default: 1},
    bought: {type: Boolean, default: false},
})

module.exports = mongoose.model('Product', ProductShema);
