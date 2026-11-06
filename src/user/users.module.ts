import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller.js";
import { UsersService } from "./users.service.js";

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService], // This is a decorator that allows the class to be provided as a service
    // if do not use this decorator, the class will not be provided as a service
    // and it will not be able to be used in other services
    exports: [UsersService] // This is a decorator that allows the class to be exported as a module
    // if do not use this decorator, the class will not be exported as a module
    // and it will not be able to be used in other modules
})
export class UsersModule { }