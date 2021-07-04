import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ isLoggedIn, Component, Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PrivateRoutes;
