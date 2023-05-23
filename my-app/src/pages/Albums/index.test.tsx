import React from "react";
import Albums from ".";
import { screen, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { rest } from "msw";

import { renderWithProviders } from "../../utils/testUtils";
import { setupStore } from "../../store/store";
import { server } from "../../utils/handlers";

const store = setupStore({});

describe("Albums component", () => {
  it("should match snapshot", () => {
    let view = render(
      <Provider store={store}>
        <Albums />
      </Provider>
    );

    expect(view).toMatchSnapshot();
  });

  it("should display Loader", () => {
    renderWithProviders(<Albums />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should display error", async () => {
    server.use(
      rest.get(
        `${process.env.REACT_APP_ENDPOINT}xxxxxxxxxxx/*`,
        (_req, res, ctx) => {
          return res(ctx.status(500), ctx.json("an error has occurred"));
        }
      )
    );

    const { getByText } = renderWithProviders(<Albums />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    await waitFor(async () => {
      const error = screen.getByText("Opps!!! Something went wrong!");
      expect(error).toBeInTheDocument();
    });
  });

  it("should success", async () => {
    const { getByText, getByAltText, queryByText, getByTestId } =
      renderWithProviders(<Albums />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      const table = getByTestId("album-table");
      expect(table).toBeInTheDocument();
    });
  });

  it("should img,title,url column", async () => {
    const { getByText, getByAltText, queryByText, getByTestId, getByRole } =
      renderWithProviders(<Albums />);

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    await waitFor(async () => {
      const titleColumn = screen.getByRole("columnheader", {
        name: /Title/i,
      });

      const nameColumn = screen.getByRole("columnheader", {
        name: /Name/i,
      });

      const imgColumn = screen.getByRole("columnheader", {
        name: /Img Url/i,
      });
      expect(imgColumn).toBeInTheDocument();

      expect(nameColumn).toBeInTheDocument();

      expect(titleColumn).toBeInTheDocument();
    });
  });
});
