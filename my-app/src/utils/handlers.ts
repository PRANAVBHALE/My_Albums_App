import "@testing-library/jest-dom";
import { fetch, Headers, Request, Response } from "cross-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { UsersList } from "./mocks/UsersList.mock";
import { AlbumsList } from "./mocks/AlbumsList.mock";

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/albums?_start=0&_limit=5",
    (_req, res, ctx) => {
      return res(ctx.json(AlbumsList));
    }
  ),

  rest.get("https://jsonplaceholder.typicode.com/users", (_req, res, ctx) => {
    return res(ctx.json(UsersList));
  }),
];

export const server = setupServer(...handlers);

// Enable the API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable the API mocking after the tests finished.
afterAll(() => server.close());
