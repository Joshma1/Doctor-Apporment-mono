import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AvailabilityModule } from './availability/availability.module';

@Module({
  imports: [AuthModule, UsersModule, DoctorsModule, AvailabilityModule],
})
export class AppModule {}