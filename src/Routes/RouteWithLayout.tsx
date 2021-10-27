import React from "react";
import { Route } from "react-router-dom";

interface RouteWithLayoutProps {
  layout: any;
  component: any;
  path: string;
  exact: any;
}

const RouteWithLayout = (props: RouteWithLayoutProps) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
