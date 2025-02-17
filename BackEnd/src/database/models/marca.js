/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports=(sequelize, DataTypes)=>{
    const marca= sequelize.define(
        "marca",
        {
            id_marca:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING
            }
        },
        {
            tableName:"marca",
            timestamps: false
        }
    );
    return marca
}