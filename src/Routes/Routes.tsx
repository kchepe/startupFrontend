import React from "react";
import { Switch } from "react-router-dom";
import RouteWithLayout from "./RouteWithLayout";
import Main from "../Common/Main";
import { Dashboard as DashboardView } from "../Pages";
import { Tracker as TrackerVIew } from "../Pages";
import { Axies as AxiesView } from "../Pages";

const Routes = () => {
  return (
    <Switch>
      <RouteWithLayout component={DashboardView} exact layout={Main} path="/" />
      <RouteWithLayout
        component={TrackerVIew}
        exact
        layout={Main}
        path="/tracker"
      />
      <RouteWithLayout
        component={AxiesView}
        exact
        layout={Main}
        path="/axies"
      />
    </Switch>
  );
};

export default Routes;
