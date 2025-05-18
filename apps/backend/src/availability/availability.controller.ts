import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AvailabilityService } from './availability.service';

@Controller('availability')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post()
  createSlot(@Body() dto: any) {
    return this.availabilityService.createSlot(dto);
  }

  @Get(':doctorId')
  getSlots(@Param('doctorId') doctorId: string) {
    return this.availabilityService.getSlots(doctorId);
  }
}