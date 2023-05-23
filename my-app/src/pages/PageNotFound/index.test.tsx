import { screen, render } from "@testing-library/react";
import PageNotFound from ".";

describe("PageNotFound component", () => {
  it("should render and match snapshot", () => {
    let view = render(<PageNotFound />);

    expect(view).toMatchSnapshot();
  });

  it('should display "404 Page Not Found!!"', () => {
    render(<PageNotFound />);
    let query = screen.getByText("404 Page Not Found!!");

    expect(query).toBeInTheDocument();
  });
});
