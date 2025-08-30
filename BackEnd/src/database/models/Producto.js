/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define(
    "Productos",
    {
      id_producto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_producto: {
        type: DataTypes.STRING(100),
        unique: true
      }
    },
    {
      tableName: "productos",
      timestamps: false
    }
  );
  Productos.associate = (models) => {
    Productos.hasMany(models.ProductoDetalle, { foreignKey: "id_producto" });
  };

  return Productos;
};
