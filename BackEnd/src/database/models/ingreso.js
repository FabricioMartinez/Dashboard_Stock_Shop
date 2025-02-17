/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports=(sequelize, DataTypes)=>{
    const ingreso_producto= sequelize.define(
        "ingreso_producto",
        {
            id_ingreso:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            precio_compra: {
                type: DataTypes.DECIMAL
            },
            fecha_compra: {
                type: DataTypes.DATE
            },
            cantidad:{
                type: DataTypes.INTEGER
            },
            nombre_producto:{
                type: DataTypes.STRING
            },
            id_categoria:{
                type: DataTypes.INTEGER
            }
        },
        {
            tableName:"ingreso_producto",
            timestamps: false
        }
    );
    return ingreso_producto
}