import { Router } from 'express';
import TodoRoutes from '../components/todo/todo.router';
import CountryRoutes from '../components/country/country.router';
import StateRoutes from '../components/states/states.router';

const router = Router();

router.use('/todos', TodoRoutes);
router.use('/country', CountryRoutes);
router.use('/state', StateRoutes);

export default router;
