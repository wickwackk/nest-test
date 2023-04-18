import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAll(): {
        name: string;
        age: number;
    }[];
    getUser(name: string): {
        name: string;
        age: number;
    }[];
    addUser(body: any): string;
}
