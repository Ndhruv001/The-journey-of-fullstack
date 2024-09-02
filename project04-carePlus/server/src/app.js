import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// MIDDLWARES INJECTED
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded());

// ROUTES
// app.use('api/v1/patient')
// app.use('api/v1/doctor')
// app.use('api/v1/admin')

export default app;