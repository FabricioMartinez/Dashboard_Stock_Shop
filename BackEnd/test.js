const db = require("../BackEnd/src/database/models")

db.venta_producto.findAll({raw: true})
.then(
    resultado=>console.log(resultado)
);
