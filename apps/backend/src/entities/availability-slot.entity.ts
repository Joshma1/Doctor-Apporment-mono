import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('availability_slots')
export class AvailabilitySlot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  doctorId: string;

  @Column()
  day: string; // e.g., 'Monday'

  @Column()
  startTime: string; // e.g., '09:00'

  @Column()
  endTime: string; // e.g., '17:00'
}