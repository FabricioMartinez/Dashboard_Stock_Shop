/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports=(sequelize, DataTypes)=>{
    const venta_producto= sequelize.define(
        "venta_producto",
        {
            id_venta:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            precio_venta: {
                type: DataTypes.DECIMAL
            },
            fecha_venta: {
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
            tableName:"venta_producto",
            timestamps: false
        }
    );
    return venta_producto
}