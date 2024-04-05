import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("contact us component tesing", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    // quering
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load paragraph inside contact us component", () => {
    render(<Contact />);
    const text = screen.getByText("Address:");
    // Assertion
    expect(text).toBeInTheDocument();
  });

  it("Should load input boxes inside contact us component", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    // Assertion
    expect(input.length).toBe(1);
  });
});
