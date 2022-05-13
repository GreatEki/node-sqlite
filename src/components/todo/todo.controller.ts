import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { TodoInstance } from './todo.model';
import { NotFoundError } from '../../errors';

export const createTodo = async (req: Request, res: Response) => {
    const { title, completed } = req.body;
    const id = uuidv4();

    try {
        const result = await TodoInstance.create({ id, title, completed });

        return res.json({
            success: true,
            status: 201,
            message: 'Todo created successfully',
            todo: result
        });
    } catch (err) {
        return res.json({
            success: false,
            status: err.status,
            statusCode: err.statusCode,
            message: err.message
        });
    }
};

export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const limit = req.query?.limit as number | undefined;
        const offset = req.query?.offset as number | undefined;

        const results = await TodoInstance.findAll({ where: {}, limit, offset });

        return res.json({
            success: true,
            status: 200,
            message: 'Todos retrieved successfully',
            count: results.length,
            data: results
        });
    } catch (err) {
        return res.json({
            success: false,
            status: 500,
            message: err.message
        });
    }
};

export const getTodoById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const todo = await TodoInstance.findOne({ where: { id } });

        if (!todo) {
            return res.json({
                success: false,
                status: 401,
                message: 'No todo found'
            });
        }

        if (todo) {
            return res.json({
                success: false,
                status: 200,
                message: 'Todo retrieved successfully',
                data: todo
            });
        }
    } catch (err) {
        return res.json({
            success: false,
            status: 500,
            message: err.message,
            error: err
        });
    }
};

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const { title } = req.body;

        const todo = await TodoInstance.findOne({ where: { id } });

        if (!todo) {
            throw new NotFoundError('No todo found for this record');
        }

        if (todo) {
            const updatedRecord = await todo.update({ title, completed: !todo.getDataValue('completed') });

            return res.json({
                success: false,
                status: 201,
                message: 'Todo updated',
                data: updatedRecord
            });
        }
    } catch (err) {
        return res.json({
            success: false,
            status: err.status,
            statusCode: err.statusCode,
            message: err.message
        });
    }
};

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const todo = await TodoInstance.findOne({ where: { id } });

        if (!todo) {
            throw new NotFoundError('Todo Not Found');
        }

        if (todo) {
            await todo.destroy();

            return res.json({
                success: false,
                status: 201,
                message: 'Todo deleted'
            });
        }
    } catch (err) {
        return res.json({
            success: false,
            status: 500,
            message: err.message
        });
    }
};
