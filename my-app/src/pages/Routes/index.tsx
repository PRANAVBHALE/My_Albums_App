import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Albums from "../Albums";
import Photos from "../Photos";

const Routes = () => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);

  let albumsUrlPath = `/albums`;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={albumsUrlPath} exact component={Albums} />
        {isFirstLoading && <Redirect to={albumsUrlPath} />}
        <Route path="/photo/album/:albumid/:start/:limit" component={Photos} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
