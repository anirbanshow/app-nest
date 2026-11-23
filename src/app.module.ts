import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { UsersController } from './user/users.controller.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    ServeStaticModule.forRoot({
      rootPath: join(import.meta.dirname, '..', 'public'),
    })
  ],
  controllers: [AppController, UsersController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
