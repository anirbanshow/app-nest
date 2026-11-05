import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './user/users.module.js';
import { ProductsModule } from './products/products.module.js';
import { UsersController } from './user/users.controller.js';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, UsersController],
  providers: [AppService],
  exports: []
})
export class AppModule { }
