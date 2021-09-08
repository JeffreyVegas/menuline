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

  const handleGoogleAuth = () => {
    dispatch(startGoogleAuth());
  };

  return (
    <>
      <div className="">
        <div className="row ">
          <div className="col s12 m8 valing">
            <div className="flow-text">
              <h3 className="title">Crea tu Menu Virual</h3>
              Esta es una aplicacion para crear un menu virtual vinculado a un
              codigo QR para que pueda ser accedida por tus clientes desde sus
              telefonos moviles.
            </div>
          </div>
          <div className="col s12 m4 valing ">
            <div className="card ">
              <div className="card-content center-align">
                {auth.name ? (
                  <>
                    <button
                      className="btn-large white waves-effect waves-light black-text"
                      onClick={() => history.push('/admin')}
                    >
                      Ir a Menus
                      <i className="fas fa-share-square left blue-text"></i>
                    </button>
                  </>
                ) : (
                  <>
                    <span className="card-title">Inicia Seccion</span>
                    <button
                      className="btn-large white waves-effect waves-light black-text"
                      onClick={handleGoogleAuth}
                    >
                      Google
                      <i className="fab fa-google left blue-text"></i>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/* 
  
*/
