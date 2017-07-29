module.exports = function(sequelize, DataTypes) {

  const Burger = sequelize.define("Burger" , {
    burger_name: {
      type: DataTypes.STRING(50),
      allowNull : false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
}