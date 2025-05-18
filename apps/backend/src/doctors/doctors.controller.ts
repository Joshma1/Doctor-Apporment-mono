import { Controller, Get, Put, Body, Param } from '@nestjs/common';
import { DoctorsService } from './doctors.service';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Get(':id')
  getProfile(@Param('id') id: string) {
    return this.doctorsService.getProfile(id);
  }

  @Put(':id')
  updateProfile(@Param('id') id: string, @Body() dto: any) {
    return this.doctorsService.updateProfile(id, dto);
  }
}