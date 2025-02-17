/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports=(sequelize, DataTypes)=>{
    const categoria= sequelize.define(
        "categoria",
        {
            id_categoria:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING
            }
        },
        {
            tableName:"categoria",
            timestamps: false
        }
    );
    return categoria
}