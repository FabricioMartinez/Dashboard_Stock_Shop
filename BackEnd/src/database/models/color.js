/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports=(sequelize, DataTypes)=>{
    const color= sequelize.define(
        "color",
        {
            id_color:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING
            }
        },
        {
            tableName:"color",
            timestamps: false
        }
    );
    return color
}