import { render, screen } from "@testing-library/react";
import App from "./App";

test("home work as expected", async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Last Search/i);
  expect(linkElement).toBeInTheDocument();
});
