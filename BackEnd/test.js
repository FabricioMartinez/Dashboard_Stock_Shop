const db = require("../BackEnd/src/database/models")
const { Op } = require("sequelize")

// db.ComprasDetalle.findAll({ raw: true })
//   .then(ComprasDetalle => console.log(ComprasDetalle))
//   .catch(err => console.error(err));

// async function testProductosStock() {
//   try {
//     // Traer todos los detalles de productos junto con su stock
//     const detalles = await db.ProductoDetalle.findAll({
//       include: [
//         {
//           model: db.Stock,
//           attributes: ["cantidad_actual"], // solo queremos la cantidad
//         }
//       ],
//       attributes: ["descripcion"], // solo queremos la descripción del producto
//       raw: true,
//       nest: true // para que los datos del include queden anidados
//     });

//     console.log(detalles);
//   } catch (error) {
//     console.error("Error al consultar ProductoDetalle con Stock:", error);
//   }
// }
// testProductosStock();

// async function ventasEntreFechas() {
//   try {
//     const ventas = await db.Ventas.findAll({
//       where: {
//         fecha: {
//           [Op.between]: ["2024-03-13", "2024-12-20"]
//         }
//       },
//       include: [
//         {
//           model: db.ProductoDetalle,
//           attributes: ["descripcion"]
//         },
//         {
//           model: db.Locales,
//           attributes: ["nombre_local"]
//         }
//       ],
//       attributes: ["id_venta", "cantidad", "fecha", "precio_unitario"],
//       raw: true,
//       nest: true
//     });

//     console.log(ventas);
//   } catch (error) {
//     console.error("Error al consultar ventas entre fechas:", error);
//   }
// }

// ventasEntreFechas();

async function productosConStockBajo() {
  try {
    const productos = await db.ProductoDetalle.findAll({
      include: [
        {
          model: db.Stock,
          attributes: ["cantidad_actual"],
          where: {
            cantidad_actual: { [Op.lt]: 5 } // stock menor a 5
          }
        }
      ],
      attributes: ["descripcion"], // solo la descripción
      raw: true,
      nest: true
    });

    console.log(productos);
  } catch (error) {
    console.error("Error al consultar productos con stock bajo:", error);
  }
}

productosConStockBajo();