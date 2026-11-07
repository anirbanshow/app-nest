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
        { id: 5, name: 'John Doe' },
        { id: 6, name: 'Jane Doe' },
        { id: 7, name: 'John Smith' },
        { id: 8, name: 'Jane Smith' },
        { id: 9, name: 'John Doe' },
        { id: 10, name: 'Jane Doe' },
    ];

    getUsers(page: number, limit: number) {
        const startIndex = (page - 1) * limit;
        return this.users.slice(startIndex, limit);
    }

    findAll() {
        return this.users;
    }

    getProfile(id: string) {
        return this.users.find(user => user.id === parseInt(id));
    }

    getTotalUsers() {
        return this.users.length;
    }
}