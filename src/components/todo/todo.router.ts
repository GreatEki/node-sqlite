import { Router } from 'express';
import { createTodo, getAllTodos, getTodoById  } from './todo.controller';
import { checkCreateTodo, checkGetTodos } from './todo.validation';
const router = Router();

router.route('/')
    .post(checkCreateTodo, createTodo)
    .get(checkGetTodos, getAllTodos);

router.route('/:id')
    .get(getTodoById);

export default router;