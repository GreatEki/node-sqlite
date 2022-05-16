import { Router } from 'express';
import TodoRoutes from '../components/todo/todo.router';
import CountryRoutes from '../components/country/country.router';

const router = Router();

router.use('/todos', TodoRoutes);
router.use('/country', CountryRoutes);

export default router;
