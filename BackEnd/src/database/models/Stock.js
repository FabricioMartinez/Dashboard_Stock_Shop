/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */


module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define(
    "Stock",
    {
      id_stock: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_detalle: {
        type: DataTypes.INTEGER,
        unique: true
      },
      cantidad_actual: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      }
    },
    {
      tableName: "Stock",
      timestamps: false
    }
  );

  Stock.associate = (models) => {
    Stock.belongsTo(models.ProductoDetalle, { foreignKey: "id_detalle" });
  };

  return Stock;
};
