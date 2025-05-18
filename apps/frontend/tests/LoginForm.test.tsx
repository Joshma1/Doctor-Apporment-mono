import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "../components/LoginForm";

describe("LoginForm", () => {
  it("renders login form fields", () => {
    render(<LoginForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it("calls onSubmit with form data", () => {
    const handleSubmit = vi.fn();
    render(<LoginForm onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: "password123" } });
    fireEvent.submit(screen.getByRole("button"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});