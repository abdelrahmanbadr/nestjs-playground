import { Injectable } from '@nestjs/common';
import { Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  private users: User[] = [];
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.find()
  }

  create(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput)
    return this.userRepository.save(newUser)
  }

  @Get()
  async getUser(): Promise<User[]> {
    return this.userRepository.find()
  }
}


