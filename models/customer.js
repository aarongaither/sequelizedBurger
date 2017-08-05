module.exports = function(sequelize, DataTypes) {

  const Customer = sequelize.define("Customer" , {
    customer_name: {
      type: DataTypes.STRING(50),
      allowNull : false,
      validate: {
        len: [1, 50]
      }
    }
  });
  
  Customer.associate = models => {
    Customer.hasMany(models.Burger, {
      onDelete: "cascade"
    })
  }

  return Customer;
}