import express, { Application, Request, Response } from 'express';
import { StudentRought } from './app/modiuls/student/student.rought';
import cors from 'cors';

const app: Application = express();

//percer
app.use(express.json());
app.use(cors());

//application rought

app.use('/api/v1/students', StudentRought);

const getmainrought = (req: Request, res: Response) => {
  const a = 20;
  res.send("'Hello World!'" + a);
};
app.get('/', getmainrought);

export default app;
