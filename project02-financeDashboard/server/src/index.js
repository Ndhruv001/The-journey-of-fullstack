import app from "./app.js";
import config from "../config/config.js";



//START THE SERVER
app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
