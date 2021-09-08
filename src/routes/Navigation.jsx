import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import routes from './routes';
import { login } from '../redux/actions/auth';
import { firebase } from '../firebase/firebase-config';
import PrivateRoutes from './PrivateRoutes';
import Preloader from '../components/common/Preloader';

const Navigation = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        console.log(user);
        dispatch(login(user.uid, user.displayName, user.photoURL));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, []);

  if (checking) {
    return <Preloader />;
  }

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          if (route.type === 'private') {
            return (
              <PrivateRoutes
                key={index}
                path={route.path}
                exact={route.exact}
                Component={route.component}
                isLoggedIn={isLoggedIn}
                Layout={route.layout}
              />
            );
          } else {
            return (
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
            );
          }
        })}
      </Switch>
    </Router>
  );
};

export default Navigation;
