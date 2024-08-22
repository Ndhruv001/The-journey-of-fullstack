import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

//MIDDLEWARES INJECTED
app.use(express.urlencoded());
app.use(express.json());
app.use(helmet());
app.use(cors());

//ROUTES



export default app;
