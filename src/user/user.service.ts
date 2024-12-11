import { Injectable } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @Get()
  async findAll(): Promise<User[]> {
    const user = new User();
    user.id = 1;
    user.name = 'Abdo';
    user.email = 'a@ab.com';
    return [user];
  }

  @Post()
  create(): string {
    return 'Create A user';
  }
}
