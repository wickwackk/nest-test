import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('Users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  getAll() {
    return this.userService.getUsers();
  }

  @Get(':name')
  getUser(@Param('name') name: string) {
    return this.userService.getUser(name);
  }

  @Post('add')
  addUser(@Body() body: any) {
    return this.userService.addUser(body);
  }
}
