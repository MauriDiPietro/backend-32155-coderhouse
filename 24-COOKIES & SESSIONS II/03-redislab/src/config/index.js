import dotenv from 'dotenv';

dotenv.config();

export default {
  REDIS_URL: process.env.REDIS_URL, 
  REDIS_PORT: process.env.REDIS_PORT, 
  REDIS_PSW: process.env.REDIS_PSW,
  SECRET: process.env.SECRET,
  PORT: process.env.PORT || 8080,
};
