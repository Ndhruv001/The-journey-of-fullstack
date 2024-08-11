import app from './app.js';
import config from '../config/config.js';

app.listen(config.port, ()=>{
    console.log(`server is running at ${config.port} port`);
})