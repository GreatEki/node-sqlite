import { Optional } from 'sequelize';
export interface StateAttributes {
    id: number;
    name: string;
    countryId: number;
}

export interface StateInput extends Optional<StateAttributes, 'id'> {}

export interface StateOutput extends Required<StateAttributes> {}
