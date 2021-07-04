import React from 'react';
import './Header.css';
import { useStore, useDispatch } from 'react-redux';
import { startGoogleLogout } from '../../redux/actions/auth';

const Header = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const { auth } = store.getState();

  const handleLogout = () => {
    dispatch(startGoogleLogout());
  };

  return (
    <div className="header">
      <div className="header-logo">
        <h1>MENU-LINE</h1>
      </div>
      {auth.name ? (
        <div>
          <p>{auth.name}</p>
          <button onClick={handleLogout}>log out</button>
        </div>
      ) : (
        <div className="header-options">Nada</div>
      )}
    </div>
  );
};

export default Header;
