import { render } from "@testing-library/react";
import SelectPage from ".";

describe("SelectPage component", () => {
  it("should render and match snapshot", () => {
    let view = render(
    <SelectPage
    pageLimit={"10"}
    onPageChange={() => null}
    />
    );

    expect(view).toMatchSnapshot();
  });
});
