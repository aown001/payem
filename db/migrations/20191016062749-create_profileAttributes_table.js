'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("C_EMP_XM", {
      row_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    par_row_id: {
        type: Sequelize.INTEGER(10),
        references: {
            'model': 'C_EMP',
            'key': 'row_id'
        }
    },
    type: {
        type: Sequelize.STRING(200),
    },
    name: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_01: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_02: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_03: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_04: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_05: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_06: {
        type: Sequelize.STRING(100),
    },
    ATTRIB_07: {
        type: Sequelize.STRING(100),
    },
    ATTRIB_08: {
        type: Sequelize.STRING(100),
    },
    ATTRIB_09: {
        type: Sequelize.STRING(100),
    },
    ATTRIB_10: {
        type: Sequelize.STRING(100),
    },
    ATTRIB_11: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_12: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_13: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_14: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_15: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_16: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_17: {
        type: Sequelize.INTEGER(11),
    },
    ATTRIB_18: {
        type: Sequelize.DATE,
    },
    ATTRIB_19: {
        type: Sequelize.DATE,
    },
    ATTRIB_20: {
        type: Sequelize.DATE,
    },
    ATTRIB_21: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_22: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_23: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_24: {
        type: Sequelize.STRING(200),
    },
    ATTRIB_25: {
        type: Sequelize.STRING(200),
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
    return queryInterface.dropTable("C_EMP_XM");
  }
};
