import { vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { RegistrationForm } from "../components/RegistrationForm";

describe("RegistrationForm", () => {
  it("renders registration form fields", () => {
    render(<RegistrationForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("calls onSubmit with form data", () => {
    const handleSubmit = vi.fn();
    render(<RegistrationForm onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password123" } });
    fireEvent.submit(screen.getByRole("button"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});
