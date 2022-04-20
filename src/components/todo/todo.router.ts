import { Router } from 'express';
import { createTodo, getAllTodos  } from './todo.controller';
import TodoValidator from './todo.validation';
import TodoMiddleware from './todo.middleware';
const router = Router();

router.route('/')
    .post(TodoValidator.checkCreateTodo(), TodoMiddleware, createTodo)
    .get(getAllTodos);

export default router;