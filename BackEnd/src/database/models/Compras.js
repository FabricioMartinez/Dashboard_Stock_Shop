/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */

module.exports = (sequelize, DataTypes) => {
  const Compras = sequelize.define(
    "Compras",
    {
      id_compra: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      fecha: {
        type: DataTypes.DATEONLY
      }
    },
    {
      tableName: "compras",
      timestamps: false
    }
  );

  Compras.associate = (models) => {
    Compras.hasMany(models.ComprasDetalle, { foreignKey: "id_compra" });
  };

  return Compras;
};
