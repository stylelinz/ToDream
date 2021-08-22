'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.hasMany(models.Todo)
    }
  }
  /**
   * @typedef Category
   * @property {integer} id.required
   * @property {string} name.required - 類別名稱
   * @property {integer} UserId.required - 擁有該類別的使用者
   */
  Category.init({
    name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category'
  })
  return Category
}
