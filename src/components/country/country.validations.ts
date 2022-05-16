import { Request, Response, NextFunction } from 'express';
import Joi from '@hapi/joi';

const createCountryValSchema = Joi.object({
    countryName: Joi.string().required()
});

export const valCreateCountry = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await createCountryValSchema.validateAsync(req.body);
    } catch (err) {
        return res.json({
            success: false,
            message: err.message
        });
    }

    next();
};
