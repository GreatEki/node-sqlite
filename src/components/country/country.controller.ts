import { Request, Response } from 'express';
import Country from './country.model';
import { v4 as uuidv4 } from 'uuid';

export const createCountry = async (req: Request, res: Response) => {
    try {
        const { countryName } = req.body;
        const id = uuidv4();
        const newCountry = await Country.create({ id, name: countryName });

        return res.json({
            statusCode: 201,
            status: 'Created',
            success: true,
            message: 'Country Created',
            data: newCountry
        });
    } catch (err) {
        return res.json({
            statusCode: err.statusCode,
            status: err.status,
            success: false,
            message: err.message
        });
    }
};

export const getCountries = async (req: Request, res: Response) => {
    try {
        const countries = await Country.findAll({});

        return res.json({
            statusCode: 200,
            status: 'request succeeded',
            success: true,
            message: 'Countries fetched successfully',
            data: countries
        });
    } catch (err) {
        return res.json({
            statusCode: err.statusCode,
            status: err.status,
            success: false,
            message: err.message
        });
    }
};
