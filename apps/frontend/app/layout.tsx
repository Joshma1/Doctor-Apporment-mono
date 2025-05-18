import React from "react";
import AvailabilityScheduler from "@components/AvailabilityScheduler";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}