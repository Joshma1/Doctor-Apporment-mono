import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('availability_slots')
export class AvailabilitySlot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  doctorId: string;

  @Column()
  day: string;

  @Column()
  startTime: string;

  @Column()
  endTime: string;
}