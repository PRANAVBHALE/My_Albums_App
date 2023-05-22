import { render } from "@testing-library/react";
import AppLayout from ".";

describe("Layout component", () => {
  it("should render and match snapshot", () => {
    let view = render(
      <AppLayout>
        <div>Hello</div>
      </AppLayout>
    );

    expect(view).toMatchSnapshot();
  });
});
