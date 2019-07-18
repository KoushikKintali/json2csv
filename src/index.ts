import {Json2CsvApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {Json2CsvApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new Json2CsvApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
