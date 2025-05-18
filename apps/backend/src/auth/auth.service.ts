import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async register(dto: any) {
    // Registration logic
    return { message: 'Registered' };
  }
  async login(dto: any) {
    // Login logic
    return { accessToken: 'jwt-token' };
  }
}