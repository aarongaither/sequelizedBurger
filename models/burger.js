module.exports = function(sequelize, DataTypes) {

  const Burger = sequelize.define("Burger" , {
    burger_name: {
      type: DataTypes.STRING(50),
      allowNull : false,
      validate: {
        len: [1, 50]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = models => {
    Burger.belongsTo(models.Customer, {
      foreignKey: {
        allowNull: true
      }
    })
  }
  return Burger;
}