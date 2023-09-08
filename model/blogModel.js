module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("blog", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtitle: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      description: {
        type: DataTypes.TEXT,
      },
    });
    return Product;
  };