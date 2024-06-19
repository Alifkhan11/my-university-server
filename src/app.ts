import express, { Application, Request, Response } from 'express';
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

export default app;
