import TaskModel from '../models/task.model.js';
import UserModel from '../models/user.model.js';

UserModel.hasMany(TaskModel, { as: 'tasks', foreignKey: 'userId' });
TaskModel.belongsTo(UserModel, { as: 'user' });