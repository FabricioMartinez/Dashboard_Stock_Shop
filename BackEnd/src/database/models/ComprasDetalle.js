/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const ComprasDetalle = sequelize.define(
    "ComprasDetalle",
    {
      id_detalle_compra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_compra: {
        type: DataTypes.INTEGER
      },
      id_detalle: {
        type: DataTypes.INTEGER
      },
      cantidad: {
        type: DataTypes.INTEGER
      },
      precio_unitario: {
        type: DataTypes.DECIMAL(12, 2)
      }
    },
    {
      tableName: "ComprasDetalle",
      timestamps: false
    }
  );

  ComprasDetalle.associate = (models) => {
    ComprasDetalle.belongsTo(models.Compras, { foreignKey: "id_compra" });
    ComprasDetalle.belongsTo(models.ProductoDetalle, { foreignKey: "id_detalle" });
  };

  return ComprasDetalle;
};
