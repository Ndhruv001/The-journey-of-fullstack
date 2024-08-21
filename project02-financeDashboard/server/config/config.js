import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  mysqlHost: process.env.MYSQL_HOST,
  mysqlUser: process.env.MYSQL_USER,
  mysqlPassword: process.env.MYSQL_PASSWORD,
  mysqlDB: process.env.MYSQL_DB_NAME,
};

export default config;
