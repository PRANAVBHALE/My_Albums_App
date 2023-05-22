import { screen, render } from "@testing-library/react";
import ErrorMsg from ".";

describe("ErrorMsg component", () => {
  it("should render and match snapshot", () => {
    let view = render(<ErrorMsg />);

    expect(view).toMatchSnapshot();
  });

  it('should display "Opps!!! Something went wrong!"', () => {
    render(<ErrorMsg />);
    let query = screen.getByText("Opps!!! Something went wrong!");

    expect(query).toBeInTheDocument();
  });
});