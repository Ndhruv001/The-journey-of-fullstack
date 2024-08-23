//ROUTES
import managementRoutes from './routes/managementRoutes.js'
import generalRoutes from './routes/generalRoutes.js'
import clientRoutes from './routes/clientRoutes.js'
import salesRoutes from './routes/salesRoutes.js'

//MIDDLEWARES
import errorHandler from './middlewares/errorHandler.js'

//LIBRARIES
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();

//MIDDLEWARES INJECTED
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(helmet());
app.use(cors());
 
//ROUTES
app.use('/general', generalRoutes);
app.use('/client', clientRoutes);
app.use('/sales', salesRoutes);
app.use('/management', managementRoutes);

app.use(errorHandler);

export default app;
