'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("C_BU", {
      row_id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    par_row_id: {
        type: Sequelize.INTEGER(10),
        references: {
            'model': 'c_bu',
            'key': 'row_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    name: {
        type: Sequelize.STRING(50)
    },
    desc: {
        type: Sequelize.STRING(100)
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
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_05: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_06: {
        type: Sequelize.INTEGER(10)
    },
    ATTRIB_07: {
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
    created: Sequelize.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("C_BU");
  }
};
