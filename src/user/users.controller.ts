import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController {
    // Constructor is a special method that is used to inject the UsersService into the UsersController
    // This is a private property that is used to inject the UsersService into the UsersController
    // if do not use this property, the UsersService will not be injected into the UsersController
    // and it will not be able to be used in the UsersController
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get('all')
    findAll() {
        return this.usersService.findAll();
    }

    @Get('profile')
    getProfile() {
        return this.usersService.getProfile();
    }

    @Get('total')
    getTotalUsers() {
        return {
            total: this.usersService.getTotalUsers(),
        };
    }
}