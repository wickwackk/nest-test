import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [{ name: 'bagalzuur', age: 10 }];
  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
    return 'added an user';
  }
  getUser(name: string) {
    return this.users.filter((user) => user.name == name);
  }
}
