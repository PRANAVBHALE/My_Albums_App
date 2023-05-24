# My_Albums_App

  Built a Albums application around Albums API.
  
# Api Endpoints used:
  
  AlbumsList - https://jsonplaceholder.typicode.com/albums?start=0&_limit=5
  
  AlbumsDetails - https://jsonplaceholder.typicode.com/photos?albumId=5&_start=0&_limit=5
  
  Users - https://jsonplaceholder.typicode.com/users
  
# This app covers the following aspects:
  - A paginated list of Albums (20, 30, 50, 100 per page).
  - A paginated list of Photos (20, 30, 50, 100 per page).
  - Clicking on any Album opens a new page with the details for the selected
    Album which has photos.
  - Modal to display Photo details.
  - Functional components using React hooks.
  - Unit tests.
  - Typescript.
  
# Getting Started with Create React App.

  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation instructions.

  In the project directory, you can run:

### `npm start`

  Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  The page will reload when you make changes.\
  You may also see any lint errors in the console.

### `npm test`

  Launches the test runner in the interactive watch mode.\
  See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
  
### `npm run format`

  Formats all the .ts and .tsx files with help of prettier.
  
# Libraries used:
  - Typescript - To support type check.
  - React ToolKit Querry - Powerful data fetching and caching tool.
  - React Router Dom - Routing.
  - Antd - Components.
  - MSW - Mocking Apis.
  - Jest - Testing Env.
  - React testing library - Testing UI
  - Cross Fetch - Proxy
