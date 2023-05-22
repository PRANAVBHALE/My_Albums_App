import React from "react";
import Photo from ".";
import { screen, waitFor } from "@testing-library/react";

import { server } from "../../utils/handlers";

import { renderWithProviders } from "../../utils/testUtils";
import {
  MemoryRouter,
} from "react-router-dom";
import { rest } from "msw";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    companyId: "company-id1",
    teamId: "team-id1",
  }),
}));

describe("Photo component", () => {
  it("should match snapshot", () => {
    let view = renderWithProviders(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/photo/album/1/0/5",
            search: "",
            state: {
              record: {
                albumId: 1,
                id: 1,
                imgUrl: "https://via.placeholder.com/150/e743b",
                name: "Pranav",
                title: "Album Title",
              },
            },
          },
        ]}
      >
        <Photo />
      </MemoryRouter>
    );

    expect(view).toMatchSnapshot();
  });

  it("should display Loader", () => {
    renderWithProviders(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/photo/album/1/0/5",
            search: "",
            state: {
              record: {
                albumId: 1,
                id: 1,
                imgUrl: "https://via.placeholder.com/150/e743b",
                name: "Pranav",
                title: "Album Title",
              },
            },
          },
        ]}
      >
        <Photo />
      </MemoryRouter>
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should display error", async () => {
    server.use(
      rest.get(`${process.env.REACT_APP_ENDPOINT}xxxxxxxxxxx/*`, (_req, res, ctx) => {
        return res(ctx.status(500), ctx.json("an error has occurred"));
      })
    );

    const { getByText } = renderWithProviders(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/photo/album/1/0/5",
            search: "",
            state: {
              record: {
                albumId: 1,
                id: 1,
                imgUrl: "https://via.placeholder.com/150/e743b",
                name: "Pranav",
                title: "Album Title",
              },
            },
          },
        ]}
      >
        <Photo />
      </MemoryRouter>
    );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      const error = getByText("Opps!!! Something went wrong!");
      expect(error).toBeInTheDocument();
    });
  });

  it("should success", async () => {
    const { getByText, getByAltText, queryByText, getByTestId } =
      renderWithProviders(
        <MemoryRouter
          initialEntries={[
            {
              pathname: "/photo/album/1/0/5",
              search: "",
              state: {
                record: {
                  albumId: 1,
                  id: 1,
                  imgUrl: "https://via.placeholder.com/150/e743b",
                  name: "Pranav",
                  title: "Album Title",
                },
              },
            },
          ]}
        >
          <Photo />
        </MemoryRouter>
      );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      const table = getByTestId("photo-table");
      expect(table).toBeInTheDocument();
    });
  });

  it("should have owner name and title column", async () => {
    const { getByText, getByAltText, queryByText, getByTestId, getByRole } =
      renderWithProviders(
        <MemoryRouter
          initialEntries={[
            {
              pathname: "/photo/album/1/0/5",
              search: "",
              state: {
                record: {
                  albumId: 1,
                  id: 1,
                  imgUrl: "https://via.placeholder.com/150/e743b",
                  name: "Pranav",
                  title: "Album Title",
                },
              },
            },
          ]}
        >
          <Photo />
        </MemoryRouter>
      );

    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      const ownerAndTitle = getByText(
        "Owner - Pranav and his album - Album Title"
      );
      expect(ownerAndTitle).toBeInTheDocument();
    });
  });
});
