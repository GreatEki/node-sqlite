import { Optional } from 'sequelize';
export interface StateAttributes {
    id: string;
    name: string;
    countryId: string;
}

export interface StateInput extends Optional<StateAttributes, 'id'> {}

export interface StateOutput extends Required<StateAttributes> {}
