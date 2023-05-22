import { screen, render } from "@testing-library/react";
import Loader from ".";

describe("Loader component", () => {
  it("should render and match snapshot", () => {
    let view = render(<Loader />);

    expect(view).toMatchSnapshot();
  });

  it("should display", () => {
    render(<Loader />);
    let query = screen.getByTestId("loader");

    expect(query).toBeInTheDocument();
  });
});
