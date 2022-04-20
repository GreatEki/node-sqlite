import { Router } from 'express';
import { createTodo  } from './todo.controller'
const router = Router();

router.route('/').post(createTodo);

export default router;