import { describe, expect, it } from "vitest";
import { App } from "./App";
import { render, screen } from "../test-config/utils";

describe("App has student name", () => {
  it("the student name is visible", () => {
    render(<App />);
    expect(screen.getByText(/Gabriel Bernal/i)).toBeInTheDocument();
  });
});
