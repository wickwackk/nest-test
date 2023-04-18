export declare class UserService {
    users: {
        name: string;
        age: number;
    }[];
    getUsers(): {
        name: string;
        age: number;
    }[];
    addUser(user: any): string;
    getUser(name: string): {
        name: string;
        age: number;
    }[];
}
