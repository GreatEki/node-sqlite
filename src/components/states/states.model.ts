import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';
import { StateAttributes } from './states.interface';

class State extends Model<StateAttributes> {
    public id!: number;
    public name!: string;
    public countryId!: number;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

State.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        countryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize: db,
        tableName: 'state',
        paranoid: true
    }
);

export default State;
