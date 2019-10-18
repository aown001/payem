const Sequelize = require("sequelize");
const db = require('../database/db');
require('sequelize-hierarchy')(Sequelize);

module.exports = (sequelize, DataTypes) => {
    const ListValue = sequelize.define("C_LST_VAL", {
        row_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        bu_id: {
            type: DataTypes.INTEGER(10),
            references: {
                'model': 'c_bu',
                'key': 'row_id',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        },
        val: {
            type: DataTypes.STRING(50)
        },
        type: {
            type: DataTypes.STRING(50)
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
            type: DataTypes.STRING(200)
        },
        ATTRIB_05: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_06: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_07: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_08: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_09: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_10: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_11: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_12: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_13: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_14: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_15: {
            type: DataTypes.INTEGER(10)
        },
        ATTRIB_16: {
            type: DataTypes.STRING(200)
        },
        ATTRIB_17: {
            type: DataTypes.FLOAT(10)
        },
        ATTRIB_18: {
            type: DataTypes.DATE
        },
        ATTRIB_19: {
            type: DataTypes.DATE
        },
        ATTRIB_20: {
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
        FLG_04: {
            type: DataTypes.CHAR,
        },
        FLG_05: {
            type: DataTypes.CHAR,
        },
        FLG_06: {
            type: DataTypes.CHAR,
        },
        FLG_07: {
            type: DataTypes.CHAR,
        },
        FLG_08: {
            type: DataTypes.CHAR,
        },
        FLG_09: {
            type: DataTypes.CHAR,
        },
        FLG_10: {
            type: DataTypes.CHAR,
        },

        created: DataTypes.DATE,
    },
        {
            freezeTableName: true,
            createdAt: 'created',
            updatedAt: false,
        });
    ListValue.associate = function (models) {
        ListValue.belongsTo(models.C_BU, { as: 'organization', foreignKey: 'bu_id' })
    }
    return ListValue;
};