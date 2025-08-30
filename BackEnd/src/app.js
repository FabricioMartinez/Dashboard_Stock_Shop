const express = require("express");
const db = require("./database/models"); // tu ruta a models
const { Op } = require("sequelize");
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors()); 
app.use(express.json());
app.get("/resumen", async (req, res) => {
  try {
    const { Ventas, ComprasDetalle, Stock } = db;

    // Total vendidos (en plata)
    const totalVendidosResult = await Ventas.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("precio_unitario")), "totalVendidos"]
      ],
      raw: true
    });
    const totalVendidos = parseFloat(totalVendidosResult[0].totalVendidos || 0);

    // Total gastado (en compras)
    const totalGastadoResult = await ComprasDetalle.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("precio_unitario")), "totalGastado"]
      ],
      raw: true
    });
    const totalGastado = parseFloat(totalGastadoResult[0].totalGastado || 0);

    // Stock total (número de productos en stock)
    const totalStockResult = await Stock.findAll({
      attributes: [
        [db.sequelize.fn("SUM", db.sequelize.col("cantidad_actual")), "totalStock"]
      ],
      raw: true
    });
    const totalStock = parseInt(totalStockResult[0].totalStock || 0);

    // Ganancia = total ventas - total compras
    const ganancia = totalVendidos - totalGastado;

    res.json({
      ganancia,
      totalGastado,
      totalVendidos,
      totalStock
    });
  } catch (error) {
    console.error("Error en /resumen:", error);
    res.status(500).json({ error: "Error al calcular el resumen" });
  }
});


app.get("/productos", async (req, res) => {
  try {
    const { Productos, ProductoDetalle, Stock, Ventas } = db;

    // Traemos todos los productos con sus detalles y stock
    const productos = await ProductoDetalle.findAll({
      attributes: ["id_detalle", "descripcion", "talle", "color"],
      include: [
        {
          model: Productos,
          attributes: ["nombre_producto"]
        },
        {
          model: Stock,
          attributes: ["cantidad_actual"]
        },
        {
          model: Ventas,
          attributes: ["cantidad", "precio_unitario"]
        }
      ]
    });

    res.json(productos);
  } catch (error) {
    console.error("Error en /productos:", error);
    res.status(500).json({ error: "Error al listar productos" });
  }
});


app.get("/ventas", async (req, res) => {
  try {
    const { Ventas, ProductoDetalle, Productos, Locales } = db;

    const ventas = await Ventas.findAll({
      attributes: ["id_venta", "cantidad", "precio_unitario", "fecha"],
      include: [
        {
          model: ProductoDetalle,
          attributes: ["descripcion", "talle", "color"],
          include: [
            {
              model: Productos,
              attributes: ["nombre_producto"]
            }
          ]
        },
        {
          model: Locales,
          attributes: ["nombre_local"]
        }
      ],
      order: [["fecha", "DESC"]] // opcional: ordenamos por fecha descendente
    });

    res.json(ventas);
  } catch (error) {
    console.error("Error en /ventas:", error);
    res.status(500).json({ error: "Error al listar las ventas" });
  }
});

app.get("/compras", async (req, res) => {
  try {
    const { Compras, ComprasDetalle, ProductoDetalle, Productos } = db;

    const compras = await ComprasDetalle.findAll({
      attributes: ["cantidad", "precio_unitario"],
      include: [
        {
          model: Compras,
          attributes: ["fecha"]
        },
        {
          model: ProductoDetalle,
          attributes: ["descripcion", "talle", "color"],
          include: [
            {
              model: Productos,
              attributes: ["nombre_producto"]
            }
          ]
        }
      ],
      order: [[{ model: Compras }, "fecha", "DESC"]] // orden por fecha descendente
    });

    res.json(compras);
  } catch (error) {
    console.error("Error en /compras:", error);
    res.status(500).json({ error: "Error al listar las compras" });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
