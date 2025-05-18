import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('doctor_profiles')
export class DoctorProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  qualifications: string;

  @Column()
  biography: string;
}