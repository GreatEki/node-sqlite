import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import db from './config/database.config';
// Initialize App
const app = express();

app.use(express.json());

// configure global variables
dotenv.config({ path: path.resolve(__dirname, './config/config.env')});


db.sync().then(() => console.log('connected to database successfully'))

app.use((req: Request, res: Response, next: NextFunction) => {

    const error: any = new Error('Not Found')
    error.status = 404
    next(error);
})


const PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening in ${process.env.NODE_ENV} mode on PORT ${PORT}`))
