export type DaySchedule = {
  day: string;
  isAvailable: boolean;
  startTime: string;
  endTime: string;
};

export type DoctorProfile = {
  id: string;
  firstName: string;
  lastName: string;
  qualifications?: string;
  biography?: string;
  profileImageUrl?: string;
};
