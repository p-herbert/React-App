module.exports = (sequelize, DataTypes) => {
  const model = {
    language: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true },
    greeting: {
      type: DataTypes.STRING } };

  return sequelize.define('Greet', model);
};

