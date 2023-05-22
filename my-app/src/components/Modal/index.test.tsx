import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import PhotoModal from ".";

describe("Modal", () => {

  const handleCloseModal = jest.fn();

  it("should match snapshot", () => {
    let view =     render(
      <PhotoModal
        modalOpen={true}
        handleCloseModal={handleCloseModal}
      >
        Hello
      </PhotoModal>
    );

    expect(view).toMatchSnapshot();
  });

  it("should open", () => {
    render(
      <PhotoModal
        modalOpen={true}
        handleCloseModal={handleCloseModal}
      >
        Hello
      </PhotoModal>
    );

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("should handle x close btn", async () => {
    render(
      <PhotoModal
        modalOpen={true}
        handleCloseModal={handleCloseModal}
      >
        Hello
      </PhotoModal>
    );

    const xBtn = screen.getByRole("button", {
      name: /close/i,
    });

  //  fireEvent.click(xBtn);
    userEvent.click(xBtn)

    await waitFor(async () => {
      await expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });
  });
});
