import express, { Application, NextFunction, Request, Response } from 'express';
import { StudentRought } from './app/modiuls/student/student.rought';
import cors from 'cors';
import { UserRought } from './app/modiuls/users/user.rought';

const app: Application = express();

//percer
app.use(express.json());
app.use(cors());

//application rought

app.use('/api/v1/students', StudentRought);

// craete user rought
app.use('/api/v1/users', UserRought);

const getmainrought = (req: Request, res: Response) => {
  const a = 20;
  res.send("'Hello World!'" + a);
};
app.get('/', getmainrought);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || 'Something went wrong';

  return res.status(statusCode).json({
    success: false,
    message: message,
    err: err,
  });
  next();
});

export default app;
