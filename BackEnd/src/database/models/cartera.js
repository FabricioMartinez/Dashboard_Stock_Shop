/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize/types').DataTypes} dataTypes 
 * @returns 
 */

module.exports=(sequelize, DataTypes)=>{
    const cartera= sequelize.define(
        "cartera",
        {
            id_cartera:{
                type: DataTypes.INTEGER,
                primaryKey: true
            },
            nombre: {
                type: DataTypes.STRING
            },
            imagen: {
                type: DataTypes.STRING
            },
            medida_ancho:{
                type: DataTypes.STRING
            },
            medida_alto:{
                type: DataTypes.STRING
            },
            id_marca:{
                type: DataTypes.INTEGER
            },
            id_categoria:{
                type: DataTypes.INTEGER
            },
            id_color:{
                type: DataTypes.INTEGER
            }
        },
        {
            tableName:"cartera",
            timestamps: false
        }
    );
    return cartera
}