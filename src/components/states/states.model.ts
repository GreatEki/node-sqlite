import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';
import { StateModelI } from './states.interface';

class States extends Model<StateModelI> {}

States.init(
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
        timestamps: false
    }
);

export default States;
