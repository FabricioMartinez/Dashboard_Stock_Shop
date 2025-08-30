/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
  const Locales = sequelize.define(
    "Locales",
    {
      id_local: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_local: {
        type: DataTypes.STRING(100),
        unique: true
      }
    },
    {
      tableName: "locales",
      timestamps: false
    }
  );
  Locales.associate = (models) => {
    Locales.hasMany(models.Ventas, { foreignKey: "id_local" });
  };

  return Locales;
};