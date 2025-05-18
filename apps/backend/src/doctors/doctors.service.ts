import { Injectable } from '@nestjs/common';

@Injectable()
export class DoctorsService {
  async getProfile(id: string) {
    // Get doctor profile logic
    return { id, profile: 'Doctor Profile' };
  }
  async updateProfile(id: string, dto: any) {
    // Update doctor profile logic
    return { id, ...dto };
  }
}