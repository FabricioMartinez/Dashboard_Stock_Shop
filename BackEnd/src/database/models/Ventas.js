/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Ventas = sequelize.define(
    "Ventas",
    {
      id_venta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_detalle: {
        type: DataTypes.INTEGER
      },
      cantidad: {
        type: DataTypes.INTEGER
      },
      fecha: {
        type: DataTypes.DATEONLY
      },
      id_local: {
        type: DataTypes.INTEGER
      },
      precio_unitario: {
        type: DataTypes.DECIMAL(12, 2)
      }
    },
    {
      tableName: "ventas",
      timestamps: false
    }
  );
  
  Ventas.associate = (models) => {
    Ventas.belongsTo(models.ProductoDetalle, { foreignKey: "id_detalle" });
    Ventas.belongsTo(models.Locales, { foreignKey: "id_local" });
  };
  
  return Ventas;
};
