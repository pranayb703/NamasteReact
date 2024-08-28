import Contact from "../Contact";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Testing contact us page", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });
});
