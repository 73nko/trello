import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Layout from "./Layout.jsx";

const user = {
  name: "Dani",
  avatar: "https://eu.ui-avatars.com/api/?name=Dani",
};

describe("Layout", () => {
  it("should render the user name when user is not null", () => {
    render(<Layout user={user} />);
    const userName = screen.getByText(user.name);

    expect(userName).toBeInTheDocument();
  });

  it("should do not render the user name when user is null", () => {
    render(<Layout user={null} />);
    const userName = screen.getByText(user.name);

    expect(userName).not.toBeInTheDocument();
  });
});
