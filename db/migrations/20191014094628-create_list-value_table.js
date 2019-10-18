'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("C_LST_VAL", {
      row_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    bu_id: {
        type: Sequelize.INTEGER(10),
        references: {
            'model': 'c_bu',
            'key': 'row_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    val: {
        type: Sequelize.STRING(50)
    },
    type: {
        type: Sequelize.STRING(50)
    },
    ATTRIB_01: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_02: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_03: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_04: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_05: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_06: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_07: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_08: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_09: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_10: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_11: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_12: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_13: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_14: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_15: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_16: {
        type: Sequelize.STRING(200)
    },
    ATTRIB_17: {
        type: Sequelize.FLOAT(10)
    },
    ATTRIB_18: {
        type: Sequelize.DATE
    },
    ATTRIB_19: {
        type: Sequelize.DATE
    },
    ATTRIB_20: {
        type: Sequelize.DATE
    },
    FLG_01: {
        type: Sequelize.CHAR,
    },
    FLG_02: {
        type: Sequelize.CHAR,
    },
    FLG_03: {
        type: Sequelize.CHAR,
    },
    FLG_04: {
        type: Sequelize.CHAR,
    },
    FLG_05: {
        type: Sequelize.CHAR,
    },
    FLG_06: {
        type: Sequelize.CHAR,
    },
    FLG_07: {
        type: Sequelize.CHAR,
    },
    FLG_08: {
        type: Sequelize.CHAR,
    },
    FLG_09: {
        type: Sequelize.CHAR,
    },
    FLG_10: {
        type: Sequelize.CHAR,
    },

    created: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("C_LST_VAL");
  }
};
