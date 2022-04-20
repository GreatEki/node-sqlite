import { Request, Response, NextFunction } from 'express';
import { query } from 'express-validator';
import Joi from '@hapi/joi';

const createTodoValSchema = Joi.object({
    title: Joi.string().required(),
    completed: Joi.boolean()
})

const getTodoValSchema = Joi.object({
    limit: Joi.number().required().min(1).max(3)
})



export const checkCreateTodo = async (req: Request, res: Response, next: NextFunction) => {
        
    try {
        await createTodoValSchema.validateAsync(req.body);
    } catch (err) {
        return res.status(422).json(err);
    }

    next();
}

export const checkGetTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await getTodoValSchema.validateAsync(req.query);

    } catch (err) {
        return res.status(422).json(err) 
    }

    next();
}

