import { Router } from 'express';
import TodoRoutes from '../components/todo/todo.router';

const router = Router();

router.use('/todos', TodoRoutes);

export default router;