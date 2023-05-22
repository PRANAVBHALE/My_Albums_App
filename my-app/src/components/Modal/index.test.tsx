import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PhotoModal from ".";

describe("Modal", () => {
  const onClick = jest.fn();
  const setModalOpen = jest.fn();
  const setImgUrl = jest.fn();
  const setPhotoTitle = jest.fn();

  it("should match snapshot", () => {
    let view = render(
      <PhotoModal
        modalOpen={open}
        setModalOpen={setModalOpen}
        setImgUrl={setImgUrl}
        setPhotoTitle={setPhotoTitle}
      />
    );

    expect(view).toMatchSnapshot();
  });

  it("should open", () => {
    render(<PhotoModal modalOpen={true} />);

    const modal = screen.getByTestId("modal");
    expect(modal).toBeInTheDocument();
  });

  it("should close", () => {
    render(
      <PhotoModal
        modalOpen={open}
        setModalOpen={setModalOpen}
        setImgUrl={setImgUrl}
        setPhotoTitle={setPhotoTitle}
      />
    );

    const modal = screen.getByTestId("modal");

    waitFor(async () => {
      await expect(modal).not.toBeInTheDocument();
    });
  });

  it("should handle x close btn", () => {
    render(
      <PhotoModal
        modalOpen={open}
        setModalOpen={setModalOpen}
        setImgUrl={setImgUrl}
        setPhotoTitle={setPhotoTitle}
      />
    );

    const modal = screen.getByTestId("modal");
    const xBtn = screen.getByRole("button", {
      name: /close/i,
    });

    fireEvent.click(xBtn);

    waitFor(async () => {
      await expect(modal).not.toBeInTheDocument();
      await expect(onClick).toHaveBeenCalledTimes(1);
      await expect(setModalOpen).toHaveBeenCalledTimes(1);
      await expect(setImgUrl).toHaveBeenCalledTimes(1);
      await expect(setPhotoTitle).toHaveBeenCalledTimes(1);
    });
  });
});
