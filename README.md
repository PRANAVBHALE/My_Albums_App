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
  
## Docker instructions.


### `docker login -u username`

  Login with your account in docker through cli.

### `docker pull pranavbhale/react`

  Pull docker image of the application from docker hub.
  
### `docker images`

  Lists local docker images.
  
### `docker run --publish 3000:3000 pranavbhale/react`

  App will run on http://localhost:3000.
  
# Libraries used:
  - Typescript - To support type check.
  - React ToolKit Querry - Powerful data fetching and caching tool.
  - React Router Dom - Routing.
  - Antd - Components.
  - MSW - Mocking Apis.
  - Jest - Testing Env.
  - React testing library - Testing UI
  - Cross Fetch - Proxy


## SnapShots:

<img width="1323" alt="Albums" src="https://github.com/PRANAVBHALE/My_Albums_App/assets/16414346/5cbefc03-cf7c-44d5-97fe-fb3166767f8c">

Albums Page

 <img width="1348" alt="Photos" src="https://github.com/PRANAVBHALE/My_Albums_App/assets/16414346/29a3c9b6-7805-4fba-ad22-f796a6cbc8e0">
 
Photos Page

<img width="909" alt="Modal" src="https://github.com/PRANAVBHALE/My_Albums_App/assets/16414346/81b04ec7-055b-484f-86c7-67717c6212ff">

Modal

<img width="1671" alt="Lighthouse" src="https://github.com/PRANAVBHALE/My_Albums_App/assets/16414346/b4f88890-15b5-4164-9b6a-ad162e3f2270">

Lighthouse


<img width="648" alt="Testcases" src="https://github.com/PRANAVBHALE/My_Albums_App/assets/16414346/3c200b04-ea0c-4bd0-a312-bc07538c6d45">

Testcases
