import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';
import { StateAttributes } from './states.interface';

class State extends Model<StateAttributes> {
    public id!: string;
    public name!: string;
    public countryId!: string;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

State.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        countryId: {
            type: DataTypes.UUIDV4,
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
