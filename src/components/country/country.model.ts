import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';
import { CountryModelI } from './country.interface';

class Country extends Model<CountryModelI> {}

Country.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        sequelize: db,
        tableName: 'country',
        timestamps: false
    }
);

export default Country;
