import { Request, Response } from 'express';
import Country from './country.model';

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
