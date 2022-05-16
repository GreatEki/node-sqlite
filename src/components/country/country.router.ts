import { Router } from 'express';
import { createCountry, getCountries } from './country.controller';
import { valCreateCountry } from './country.validations';

const router = Router();

router.route('/').get(getCountries);

router.route('/').post(valCreateCountry, createCountry);

export default router;
