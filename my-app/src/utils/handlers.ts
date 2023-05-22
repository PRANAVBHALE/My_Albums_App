import "@testing-library/jest-dom";
import { fetch, Headers, Request, Response } from "cross-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { UsersList } from "./mocks/UsersList.mock";
import { AlbumsList } from "./mocks/AlbumsList.mock";
import PhotosList from "./mocks/PhotosList.mock";

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
    `${process.env.REACT_APP_ENDPOINT}/albums?_start=0&_limit=5`,
    (_req, res, ctx) => {
      return res(ctx.json(AlbumsList));
    }
  ),

  rest.get(`${process.env.REACT_APP_ENDPOINT}/users`, (_req, res, ctx) => {
    return res(ctx.json(UsersList));
  }),

  rest.get(`${process.env.REACT_APP_ENDPOINT}/photos?albumId=5&_start=0&_limit=5`, (_req, res, ctx) => {
    return res(ctx.json(PhotosList))
  }),
];

export const server = setupServer(...handlers);

// Enable the API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable the API mocking after the tests finished.
afterAll(() => server.close());
