import { Router } from 'express';
import { createTodo, getAllTodos  } from './todo.controller';
import { checkCreateTodo, checkGetTodos } from './todo.validation';
const router = Router();

router.route('/')
    .post(checkCreateTodo, createTodo)
    .get(checkGetTodos, getAllTodos);

export default router;