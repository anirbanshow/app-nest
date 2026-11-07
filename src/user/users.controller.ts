import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service.js";

@Controller('users')
export class UsersController {
    // Constructor is a special method that is used to inject the UsersService into the UsersController
    // This is a private property that is used to inject the UsersService into the UsersController
    // if do not use this property, the UsersService will not be injected into the UsersController
    // and it will not be able to be used in the UsersController
    constructor(private usersService: UsersService) { }

    @Get()
    getUsers(
        @Query('page') page: number,
        @Query('limit') limit: number
    ) {
        return {
            data: this.usersService.getUsers(page, limit),
            total: this.usersService.getTotalUsers(),
            page: page,
            limit: limit,
        }
    }

    @Get('all')
    findAll() {
        return this.usersService.findAll();
    }

    @Get('profile/:id')
    getProfile(@Param('id') id: string) {
        return this.usersService.getProfile(id);
    }

    @Get('total')
    getTotalUsers() {
        return {
            total: this.usersService.getTotalUsers(),
        };
    }

    @Post('create')
    createUser(@Body() body: any) {
        return {
            message: 'User created successfully',
            data: body,
        };
    }
}