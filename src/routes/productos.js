const express = require('express');
const router = express.Router();

// Base de datos en memoria
let productos = [
  {
    id: 1,
    nombre: "Laptop HP",
    precio: 2500000,
    stock: 5,
    categoria: "tecnologia"
  },
  {
    id: 2,
    nombre: "Mouse Logitech",
    precio: 80000,
    stock: 20,
    categoria: "tecnologia"
  },
  {
    id: 3,
    nombre: "Teclado Redragon",
    precio: 150000,
    stock: 15,
    categoria: "tecnologia"
  }
];

// GET todos los productos
router.get('/', (req, res) => {
  res.status(200).json(productos);
});

// GET producto por ID
router.get('/:id', (req, res) => {
  const producto = productos.find(p => p.id == req.params.id);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(200).json(producto);
});

// EXPORTAR SIEMPRE AL FINAL
module.exports = router;