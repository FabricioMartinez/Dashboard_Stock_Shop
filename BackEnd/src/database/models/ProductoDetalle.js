/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const ProductoDetalle = sequelize.define(
    "ProductoDetalle",
    {
      id_detalle: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.STRING(250)
      },
      talle: {
        type: DataTypes.STRING(10)
      },
      color: {
        type: DataTypes.STRING(30)
      }
    },
    {
      tableName: "ProductoDetalle",
      timestamps: false
    }
  );

  ProductoDetalle.associate = (models) => {
    ProductoDetalle.belongsTo(models.Productos, { foreignKey: "id_producto" });
    ProductoDetalle.hasOne(models.Stock, { foreignKey: "id_detalle" });
    ProductoDetalle.hasMany(models.Ventas, { foreignKey: "id_detalle" });
    ProductoDetalle.hasMany(models.ComprasDetalle, { foreignKey: "id_detalle" });
  };

  return ProductoDetalle;
};
