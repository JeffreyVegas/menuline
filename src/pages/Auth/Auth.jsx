import { useDispatch } from 'react-redux';
import React from 'react';
import { startGoogleAuth, startGoogleLogout } from '../../redux/actions/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth());
  };
  const handleLogout = () => {
    dispatch(startGoogleLogout());
  };

  return (
    <div>
      <button onClick={handleGoogleAuth}>inicia seccion con google 😘</button>
      <button onClick={handleLogout}>logout😢</button>
    </div>
  );
};

export default Auth;
