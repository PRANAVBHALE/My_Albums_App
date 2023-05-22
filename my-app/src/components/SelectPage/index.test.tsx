import { render } from "@testing-library/react";
import SelectPage from ".";

describe("SelectPage component", () => {
  it("should render and match snapshot", () => {
    let view = render(<SelectPage />);

    expect(view).toMatchSnapshot();
  });
});
