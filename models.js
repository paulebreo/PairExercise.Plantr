const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr')

const Gardener = db.define('gardener', {
    name: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    }
});

const Plot = db.define('plot', {
    shaded: {
      type: Sequelize.BOOLEAN,
    },
    size: {
      type: Sequelize.INTEGER,
    }
});

const Vegetable = db.define('vegetable', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    planted_on: {
      type: Sequelize.DATE,
    }
});


Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

module.exports = db

