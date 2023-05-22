import { screen, render } from "@testing-library/react";
import AppHeader from ".";

describe("AppHeader component", () => {
  it("should render and match snapshot", () => {
    let view = render(<AppHeader />);

    expect(view).toMatchSnapshot();
  });

  it('Albums Application"', () => {
    render(<AppHeader />);
    let query = screen.getByText("Albums Application");

    expect(query).toBeInTheDocument();
  });
});
