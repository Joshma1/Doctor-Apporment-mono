"use client";
import React, { useState } from "react";
//import { useState } from "react";

type DaySchedule = {
  day: string;
  isAvailable: boolean;
  startTime: string;
  endTime: string;
};

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

type AvailabilitySchedulerProps = {
  initialData?: DaySchedule[];
  onSubmit: (data: DaySchedule[]) => void;
};

export default function AvailabilityScheduler({
  initialData = [],
  onSubmit,
}: AvailabilitySchedulerProps) {
  const [schedules, setSchedules] = useState<DaySchedule[]>(
    daysOfWeek.map((day, idx) => {
      const found = initialData.find((d) => d.day === day);
      return (
        found || {
          day,
          isAvailable: false,
          startTime: "09:00",
          endTime: "17:00",
        }
      );
    })
  );

  const handleChange = (
    idx: number,
    field: keyof DaySchedule,
    value: string | boolean
  ) => {
    setSchedules((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [field]: value } : item
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(schedules);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Set Weekly Availability</h2>
      {schedules.map((schedule, idx) => (
        <div key={schedule.day} className="flex items-center gap-4 mb-2">
          <label className="w-24">{schedule.day}</label>
          <input
            type="checkbox"
            checked={schedule.isAvailable}
            onChange={(e) =>
              handleChange(idx, "isAvailable", e.target.checked)
            }
            className="mr-2"
          />
          <span className="mr-2">Available</span>
          <input
            type="time"
            value={schedule.startTime}
            disabled={!schedule.isAvailable}
            onChange={(e) =>
              handleChange(idx, "startTime", e.target.value)
            }
            className="border rounded px-2 py-1"
          />
          <span>-</span>
          <input
            type="time"
            value={schedule.endTime}
            disabled={!schedule.isAvailable}
            onChange={(e) =>
              handleChange(idx, "endTime", e.target.value)
            }
            className="border rounded px-2 py-1"
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Availability
      </button>
    </form>
  );
}