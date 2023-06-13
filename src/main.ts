import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';
import * as nunjucks from 'nunjucks';

//This function is labelled async because it is asynchronous due to the await call within the function.
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule,);
  /*Too associate
  */
  const express = app.getHttpAdapter().getInstance();
  const views = join(__dirname,'..','views');
  //Finally, configur nunjucks, setting views and express declared
  nunjucks.configure(views, { express });

  const staticAssets = join(__dirname, '..', 'static');
  app.useStaticAssets(staticAssets)
  await app.listen(3000);
}
bootstrap();
