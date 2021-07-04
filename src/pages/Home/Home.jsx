import React, { useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { startGoogleAuth } from '../../redux/actions/auth';
import { useHistory, Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const store = useStore();
  const { auth } = store.getState();
  const dispatch = useDispatch();
  const history = useHistory();

  /*   useEffect(() => {
    if (auth.name) {
      history.push('./admin');
    }
  }, [auth]);
 */

  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth());
  };

  return (
    <div className="home">
      <div className="home-infor">
        <div className="home-infor__title">
          <h3>Crea tu Menu Virtual con QR</h3>
          <p>
            Menunline es una plataforma para crear la carta de tu restaurante de
            manera virutual vinculada a un codigo QR, par que tus clientes
            puedan acceder desde su telefono movil.
          </p>
        </div>
      </div>
      <div className="home-log">
        {auth.name ? (
          <Link to="/admin">
            <button>ir a Menus</button>
          </Link>
        ) : (
          <button onClick={handleGoogleAuth}>
            inicia seccion con google 😘
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
