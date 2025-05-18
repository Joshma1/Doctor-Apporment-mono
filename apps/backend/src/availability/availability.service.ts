import { Injectable } from '@nestjs/common';

@Injectable()
export class AvailabilityService {
  async createSlot(dto: any) {
    // Create slot logic
    return { message: 'Slot created', ...dto };
  }
  async getSlots(doctorId: string) {
    // Get slots logic
    return [{ doctorId, day: 'Monday', start: '09:00', end: '17:00' }];
  }
}