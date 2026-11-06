import { Injectable } from "@nestjs/common";

@Injectable() // This is a decorator that allows the class to be injected as a dependency
// in other words, it allows the class to be used as a dependency in other classes
// if do not use this decorator, the class will not be injected as a dependency
// and it will not be able to be used in other classes
export class UsersService {

    private users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'John Smith' },
        { id: 4, name: 'Jane Smith' },
    ];

    getUsers() {
        return this.users;
    }

    findAll() {
        return this.users;
    }

    getProfile() {
        return this.users[0];
    }

    getTotalUsers() {
        return this.users.length;
    }
}