import React from 'react';
import './Header.css';
import { useStore, useDispatch } from 'react-redux';
import { startGoogleLogout } from '../../redux/actions/auth';

const Header = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const { auth } = store.getState();
  console.log(auth);

  const handleLogout = () => {
    dispatch(startGoogleLogout());
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo left">
          MenuLine
        </a>
        <ul className="right">
          {auth.name ? (
            <>
              <li className="col">
                <img src={auth.photoUrl} alt="" className="row circle avatar" />
              </li>
              <li>
                <a
                  className="waves-effect waves-light btn"
                  onClick={handleLogout}
                >
                  Log Out
                </a>
              </li>
            </>
          ) : (
            <li>
              <a className="waves-effect waves-light btn">.</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
/* 


  <div classNameName="header">
      <div classNameName="header-logo">
        <h1>MENU-LINE</h1>
      </div>
      {auth.name ? (
        <div>
          <p>{auth.name}</p>
          <button onClick={handleLogout}>log out</button>
        </div>
      ) : (
        <div classNameName="header-options">Nada</div>
      )}
    </div>///////////////

    
*/
