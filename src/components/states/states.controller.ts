import { Request, Response } from 'express';
import { State, Country } from '../../models';
import { v4 as uuidv4 } from 'uuid';
import { BadRequestError } from '../../errors';

export const createState = async (req: Request, res: Response) => {
    try {
        const { stateName, countryId } = req.body;

        // check if country exists in db
        const country = await Country.findByPk(countryId);

        if (!country) {
            throw new BadRequestError('No country with given id');
        }

        const id = uuidv4();
        const newState = await State.create({ id, name: stateName, countryId });

        return res.json({
            statusCode: 201,
            status: 'Created',
            success: true,
            message: 'State created successfully',
            data: newState
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

export const getState = async (req: Request, res: Response) => {
    try {
        const states = await State.findAll({});

        return res.json({
            statusCode: 200,
            status: 'request succeeded',
            success: true,
            message: 'States retrieved successfully',
            data: states
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
