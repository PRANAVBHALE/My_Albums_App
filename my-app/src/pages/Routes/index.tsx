import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Albums from "../Albums";
import Photos from "../Photos";
import routePaths from "./routesConstants";
import AppHeader from "../../components/AppHeader";

const Routes = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const {albumsUrlPath , photosUrlPath} = routePaths

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);


  return (
    <>
    <AppHeader />
    <BrowserRouter>
      <Switch>
        <Route path={albumsUrlPath} exact component={Albums} />
        {isFirstLoading && <Redirect to={albumsUrlPath} />}
        <Route path={`${photosUrlPath}:albumid/:start/:limit`} component={Photos} />
      </Switch>
    </BrowserRouter>
    </>
    
  );
};
export default Routes;
