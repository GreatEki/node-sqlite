import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import db from './config/database.config';
import router from './routes';
import { NotFoundError } from './errors';

// Initialize App
const app = express();

app.use(express.json());

// configure global variables
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

db.sync().then(() => console.log('connected to database successfully'));

app.use('/api', router);

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new NotFoundError('Resource not found');
    next(error);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening in ${process.env.NODE_ENV} mode on PORT ${PORT}`));
