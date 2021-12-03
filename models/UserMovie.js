const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserMovie extends Model {}

UserMovie.init(
{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'user',
      key: 'id',
    },
  },

  movie_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'movie',
          key: 'id',
      },
  },

  notified:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

  notification_period: {
      type: DataTypes.STRING,
      allowNull: true,
  },
},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'usermovie',
    }
);

module.exports = UserMovie;