import { Router } from 'express';
import { createState } from './states.controller';

const router = Router();

router.route('/').post(createState);

export default router;
