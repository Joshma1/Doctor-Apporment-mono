import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findById(id: string) {
    // Find user by id
    return { id, name: 'Test User' };
  }
}