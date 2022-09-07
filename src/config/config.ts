export const ENVIRONMENT = process.env.APP_ENV || 'development';
export const APP_PORT = Number(process.env.APP_PORT) || 9000;
export const JWT_SECRET = process.env.JWT_SECRET || 'thT9x1TP9y2022Serv1ceis';
export const JWT_EXPIRE = process.env.JWT_EXPIRE || '1d';
export const APP_NAME = 'Payment Service';
export const MONNIFY_URL = process.env.MONNIFY_URL
export const MONNIFY_API_KEY = process.env.MONNIFY_API_KEY
export const MONNIFY_SECRET_KEY = process.env.MONNIFY_SECRET_KEY
export const MONNIFY_CONTRACT_CODE = process.env.MONNIFY_CONTRACT_CODE
export const MONNIFY_ACCOUNT_NUMBER = process.env.MONNIFY_ACCOUNT_NUMBER

export const DB = {
   USER: process.env.DB_USER,
   PASSWORD: process.env.DB_USER_PWD,
   HOST: process.env.DB_HOST,
   NAME: process.env.DB_NAME,
   PORT: Number(process.env.DB_PORT) || 27017,
};


