import app from './app.js';
import config from '../config/config.js'

//STARTNG A SERVER
app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
})