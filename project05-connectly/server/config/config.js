import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  apiVersion: process.env.API_VERSION || "v1",
  baseURL: process.env.BASE_URL || "/api",
  frontendOrigin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  mysqlHost: process.env.MYSQL_HOST,
  mysqlUser: process.env.MYSQL_USER,
  mysqlPassword: process.env.MYSQL_PASSWORD,
  mysqlDB: process.env.MYSQL_DB_NAME,
  bcryptSaltRound: process.env.BCRYPT_SALT_ROUND,
  jwtAccessTokenSecretKey: process.env.JWT_ACCESS_TOKEN_SECRET,
  jwtAccessTokenSecretKeyExpiry: process.env.JWT_ACCESS_TOKEN_SECRET_EXPIRY,
};

export default config;
