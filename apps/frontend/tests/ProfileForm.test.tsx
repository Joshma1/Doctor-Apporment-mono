import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileForm from "../components/ProfileForm";

describe("ProfileForm", () => {
  it("renders profile form fields", () => {
    render(<ProfileForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
  });

  it("calls onSubmit with form data", () => {
    const handleSubmit = vi.fn();
    render(<ProfileForm onSubmit={handleSubmit} />);
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: "Doe" } });
    fireEvent.submit(screen.getByRole("button"));
    expect(handleSubmit).toHaveBeenCalled();
  });
});