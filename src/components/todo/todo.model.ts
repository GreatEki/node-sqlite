import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';
import ITodoModel from './todo.interface';

export class TodoInstance extends Model<ITodoModel> {}

TodoInstance.init(
    {
        id: { 
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    },
    {
        sequelize:db,
        tableName: 'todos'
    }
)