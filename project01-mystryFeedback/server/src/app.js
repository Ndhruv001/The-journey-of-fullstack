import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json());


// auth route imports
import authRoute from './routes/authRoute.js';
app.use('/api/v1/users', authRoute);


//import message route 
import messageRoute from './routes/messageRoute.js'
app.use('/api/v1/message', messageRoute);



export default app;