import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator'

const TodoMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.json(error);
    }

    next();
}

export default TodoMiddleware;