import express from 'express';
import mongoose from 'mongoose';
import celebrate from 'celebrate';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';

import {
  allLogger,
  infoLogger,
  warnLogger,
  errorLogger,
} from './middleware/logger';
import { validationError } from './middleware/validationError';
import { handleErrors } from './middleware/errors';

import { router } from './routes';
import { helmetConfig } from './config/helmetConfig';
import { corsConfig } from './config/corsConfig';
import { PORT, DB_NAME, NODE_ENV } from './config/appConfig';

(async function app() {
  mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);

  const server = express();

  server.use(cors(corsConfig));
  server.use(helmet(helmetConfig));

  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  server.use(cookieParser());

  server.use(allLogger);
  server.use(infoLogger);
  server.use(warnLogger);

  server.use('/', router);

  server.use(errorLogger);

  server.use(celebrate.errors());

  server.use(validationError, handleErrors);

  server.listen(Number(PORT), () => {
    if (NODE_ENV !== 'production') {
      // отключить eslint на console.log для вывода инфы в консоль при запуске сервера
      /* eslint-disable no-console */
      console.log('Сервер запущен в режиме разработки');
    }

    console.log('PORT: ', PORT);
    console.log('PID: ', process.pid);
  });
})();
