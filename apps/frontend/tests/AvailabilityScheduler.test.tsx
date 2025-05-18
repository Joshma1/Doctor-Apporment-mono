import { vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import AvailabilityScheduler from "../components/AvailabilityScheduler";

describe("AvailabilityScheduler", () => {
  it("renders all days of the week", () => {
    render(<AvailabilityScheduler onSubmit={() => {}} />);
    expect(screen.getByText(/Monday/)).toBeInTheDocument();
    expect(screen.getByText(/Sunday/)).toBeInTheDocument();
  });

  it("calls onSubmit with availability data", () => {
    const handleSubmit = vi.fn();
    render(<AvailabilityScheduler onSubmit={handleSubmit} />);
    fireEvent.click(screen.getAllByRole("checkbox")[0]); // Toggle availability for Monday
    fireEvent.submit(screen.getByRole("button"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});