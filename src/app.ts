import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import http_status from 'http-status';
import { APP_NAME } from '@/config/config'

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

app.use(cors());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
   res.status(http_status.OK).send({
      service: `${APP_NAME}`,
      message: `Welcome to the ${APP_NAME}. Payment magic happens here!`
   })
})

export default app;
