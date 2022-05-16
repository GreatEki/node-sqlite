import { Router } from 'express';
import { getCountries } from './country.controller';

const router = Router();

router.route('/').get(getCountries);

export default router;
