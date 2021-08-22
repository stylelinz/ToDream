'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.Category)
    }
  }
  /**
   * @typedef Todo
   * @property {integer} id.required
   * @property {string} content.required - todo 的內容
   * @property {boolean} isDone - 這個 todo 完成了沒
   * @property {Date} deadline - todo 的期限
   */
  Todo.init({
    content: DataTypes.STRING,
    isDone: DataTypes.BOOLEAN,
    deadline: DataTypes.DATE,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo'
  })
  return Todo
}
