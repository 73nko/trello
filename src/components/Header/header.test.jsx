import Header from "./index.jsx";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Header", () => {
  it("should render the user avatar and name", async () => {
    const user = {
      name: "Dani",
      avatar: "https://eu.ui-avatars.com/api/?name=Dani",
    };

    render(<Header />);

    expect(screen.getByAltText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});
