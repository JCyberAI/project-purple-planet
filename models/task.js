module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      isIn: [['To Do', 'In Progress', 'Review', 'Completed']],
    },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.Board, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Task;
};
