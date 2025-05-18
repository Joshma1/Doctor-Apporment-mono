"use client";
import AvailabilityScheduler from "@components/AvailabilityScheduler";

export default function AvailabilityPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Availability</h1>
      <AvailabilityScheduler onSubmit={() => {}} />
    </div>
  );
}