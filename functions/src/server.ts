import 'dotenv/config'; // tslint:disable-line

if (process.env.RUN_ENV === 'server') {
  require('newrelic');
  console.log('NODE_ENV is production, so execute Newrelic agent.');
}

import debug from 'debug';
import http from 'http';

import app from './app';

const log = debug('tr:server');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, (error: any) => {
  if (error) {
    log(error);
  }

  log(`🚀 started PORT: ${PORT}`);
});
