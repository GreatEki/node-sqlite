import { Router } from 'express';
import { createState, getState } from './states.controller';

const router = Router();

router.route('/').post(createState).get(getState);

export default router;
