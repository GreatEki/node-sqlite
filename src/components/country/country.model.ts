import { DataTypes, Model } from 'sequelize';
import db from '../../config/database.config';
import { CountryAttributes, CountryInput } from './country.interface';

class Country extends Model<CountryAttributes, CountryInput> {
    public id!: string;
    public name!: string;

    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;

    static associate(models: any) {
        Country.hasOne(models.State, { foreignKey: 'countryId' });
    }
}

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
        paranoid: true
    }
);

export default Country;

//paranoid: true this will impose a soft delete on the model by adding a deletedAt attribute that marks the record as deleted when invoking the destroy method
