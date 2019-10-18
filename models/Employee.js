'use strict';
const Sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);

module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define("C_EMP", {
        row_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        emp_num: {
            type: DataTypes.STRING(50),
            allowNull: true,
            unique: true,
        },
        created: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        bu_id: {
            type: DataTypes.INTEGER(11),
            references: {
                'model': 'C_BU',
                'key': 'row_id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        },
        pr_postn_id: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: null,
        },
        fst_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        mid_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        iden_num: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        full_name: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue('fst_name') + ' ' + this.getDataValue('mid_name') + ' ' + this.getDataValue('last_name')
            }
        },
        ATTRIB_01: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_02: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_03: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_04: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_05: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_06: {
            type: DataTypes.STRING(100),
        },
        ATTRIB_07: {
            type: DataTypes.STRING(100),
        },
        ATTRIB_08: {
            type: DataTypes.STRING(100),
        },
        ATTRIB_09: {
            type: DataTypes.STRING(100),
        },
        ATTRIB_10: {
            type: DataTypes.STRING(100),
        },
        ATTRIB_11: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_12: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_13: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_14: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_15: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_16: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_17: {
            type: DataTypes.INTEGER(11),
        },
        ATTRIB_18: {
            type: DataTypes.DATE,
        },
        ATTRIB_19: {
            type: DataTypes.DATE,
        },
        ATTRIB_20: {
            type: DataTypes.DATE,
        },
        ATTRIB_21: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_22: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_23: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_24: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_25: {
            type: DataTypes.STRING(200),
        },
        ATTRIB_26: {
            type: DataTypes.STRING(200),
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
    Employee.associate = function (models) {
        Employee.belongsTo(models.C_BU, { as: 'organization', foreignKey: 'bu_id' })
    }
    return Employee;
};