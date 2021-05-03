import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Greeting } from "./../components/Greetings";

describe("Greetings", () => {
  test("Looking for hello world", () => {
    render(<Greeting />);
    const linkElement = screen.getByText(/hello/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("Check default", () => {
    render(<Greeting />);
    const linkElement = screen.getByText("Unclick", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });
  test("Check if clicked", async () => {
    render(<Greeting />);
    const be = screen.getByText(/hello/i);
    userEvent.click(be);
    const linkElement = screen.getByText("Clicked", { exact: false });
    return expect(linkElement).toBeInTheDocument();
  });
});
