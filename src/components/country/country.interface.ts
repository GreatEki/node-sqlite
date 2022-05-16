import { Optional } from 'sequelize';

// defines all the possible attributes of our model
export interface CountryAttributes {
    id: string;
    name: string;
}

// this defines the type of object passed to Sequelize's model.create
export interface CountryInput extends Optional<CountryAttributes, 'id'> {}

// this defines the returned object from model.create, model.update and model.findOne
export interface CountryOutput extends Required<CountryAttributes> {}
