import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const Navigation = () => {
  console.log(routes);
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <route.layout>
                <route.component {...props} />
              </route.layout>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Navigation;
