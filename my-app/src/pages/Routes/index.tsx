import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routePaths from "./routesConstants";
import AppHeader from "../../components/AppHeader";

const Albums = lazy(() => import("../Albums"));
const Photos = lazy(() => import("../Photos"));
const PageNotFound = lazy(() => import("../PageNotFound"));

const Routes = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const { albumsUrlPath, photosUrlPath, pageNotFoundUrlPath } = routePaths;

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);

  return (
    <>
      <AppHeader />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={albumsUrlPath} exact component={Albums} />
            {isFirstLoading && <Redirect to={albumsUrlPath} />}
            <Route
              path={`${photosUrlPath}:albumid/:start/:limit`}
              component={Photos}
            />
            <Route path={pageNotFoundUrlPath} component={PageNotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};
export default Routes;
