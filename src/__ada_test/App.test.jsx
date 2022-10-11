import { describe, expect, it } from "vitest";
import { App } from "../App";
import { render, screen } from "../../test-config/utils";

describe("__AdaTest: App", () => {
  it("the student name is visible", () => {
    render(<App />);
    expect(
      screen.getByText(/My React App with Ada School/i)
    ).toBeInTheDocument();
  });
});
