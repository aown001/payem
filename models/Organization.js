const Sequelize = require("sequelize");
const db = require('../database/db');
require('sequelize-hierarchy')(Sequelize);

module.exports = (sequelize, DataTypes) => {
    const Organization = sequelize.define("C_BU", {
        row_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        par_row_id: {
            type: DataTypes.INTEGER(10),
            references: {
                'model': 'c_bu',
                'key': 'row_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        name: {
            type: DataTypes.STRING(50)
        },
        desc: {
            type: DataTypes.STRING(100)
        },
        ATTRIB_01: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_02: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_03: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_04: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_05: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_06: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_07: {
            type: DataTypes.DATE
        },
        FLG_01: {
            type: DataTypes.CHAR,
        },
        FLG_02: {
            type: DataTypes.CHAR,
        },
        FLG_03: {
            type: DataTypes.CHAR,
        },

        created: DataTypes.DATE,
    },
        {
            freezeTableName: true,
            createdAt: 'created',
            updatedAt: false,
        });
    Organization.associate = function (models) {
        Organization.belongsTo(models.C_BU, { as: 'organization', foreignKey: 'par_row_id' })
    }
    return Organization;
};