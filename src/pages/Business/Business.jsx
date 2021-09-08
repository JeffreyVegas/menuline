import React, { useEffect, useRef, useState } from 'react';
import { db } from '../../firebase/firebase-config';
import { updateDato, uploadFile } from '../../firebase/funciones';
import { useParams, Link } from 'react-router-dom';
import { v4 as uidv4 } from 'uuid';

import Categories from '../../components/Business/Categories';
import DynamicModal from '../../components/common/DynamicModal';
import EditTitle from '../../components/Business/EditTitle';
import Preloader from '../../components/common/Preloader';
import Carta from '../../components/Carta';
import './Business.css';

const Business = () => {
  const { idBusiness } = useParams();
  const refTitle = useRef(null);
  const [business, setBusiness] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [children, setChildren] = useState(null);

  const refFile = useRef(null);
  const [preview, setPreview] = useState('');
  const [showBtnSave, setShowBtnSave] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(async () => {
    await db
      .collection('business')
      .doc(idBusiness)
      .onSnapshot((doc) => {
        setBusiness({ ...doc.data(), id: doc.id });
      });
  }, []);

  useEffect(() => {
    if (business.logo) {
      setPreview(business.urlLogo);
    }
    console.log('url:', window.location);
  }, [business]);

  const editName = (newName) => {
    updateDato('business', idBusiness, { name: newName });
  };

  const handleFile = (e) => {
    if (e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
      setShowBtnSave(true);
    }
  };

  const uploadImage = async () => {
    setShowBtnSave(false);
    setShowLoader(true);
    const image = refFile.current.files[0];
    let nameImage = '';
    if (business.logo) {
      nameImage = business.logo;
    } else {
      const ext = image.name.split('.').pop().trim();
      nameImage = `${uidv4()}.${ext}`;
    }
    try {
      const urlImage = await uploadFile('logos', nameImage, image);
      if (urlImage) {
        await updateDato('business', idBusiness, {
          urlLogo: urlImage,
          logo: nameImage,
        });
        console.log('exito');
      } else {
        console.log('como q no');
      }
    } catch (error) {
      console.log(error, 'Error al subir la imagen');
    }
    setShowLoader(false);
  };
  
  const handleModal = (option) => {
    switch (option) {
      case 'title':
        console.log('hola');
        setChildren(
          <EditTitle
            text={business.name}
            editName={editName}
            setShowModal={setShowModal}
          />
        );
        setShowModal(true);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div className="container relative">
        <div className="row">

          <div className="col s12 ">
            <div className="card">
              <h3 className="center-align">Crea tu Menu</h3>
            </div>
          </div>

          <div className="col s12">

            <div className="card p2 row">

              <div className="col s4">
                <p className="m-cero">Business:</p>
                <h4 className="m-cero business-title" ref={refTitle}>
                  {business.name}
                  <i
                    className="fas fa-pen"
                    onClick={() => handleModal('title')}
                  ></i>
                </h4>
              </div>

              <div className="col s12">
                <div className="row">
                  <div className="col s12 m5 l4">

                    <div className="business-logo">
                      <p className="m-cero"> Logo:</p>
                      <div className="inputfile">
                        {!preview ? (
                          <>
                            <i className="fas fa-cloud-upload-alt"></i>
                            <p>sube un logo</p>
                          </>
                        ) : (
                          <>
                            <img src={preview} className="responsive-img" />

                            <div className=" btnSave">
                              {showBtnSave && (
                                <a
                                  className="waves-effect waves-light btn-small indigo lighten-5 black-text"
                                  onClick={uploadImage}
                                >
                                  save
                                </a>
                              )}
                              {showLoader && <Preloader size="small" />}
                            </div>
                          </>
                        )}

                        <input
                          type="file"
                          onChange={handleFile}
                          ref={refFile}
                        />
                      </div>
                    </div>

                  </div>
                  <div className="col s12 m5 offset-m1">
                    <Categories idBusiness={idBusiness} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-to-qr">
          <Link
            to={`/codeqr/${idBusiness}`}
            className="btn-floating btn-large waves-effect waves-light red"
          >
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <DynamicModal
        show={showModal}
        setShow={setShowModal}
        refElement={refTitle}
      >
        {children}
      </DynamicModal>
    </>
  );
};

export default Business;
/* 
<div className="business">
      <div className="business-admin">
        <div className="business-admin-logo">
          <label htmlFor="">Business</label>
          <h5>{business.name}</h5>
          <button onClick={editName}>Editar</button>
          <br />
          <label htmlFor="">Logo: </label>
          <input type="file" onChange={handleFile} ref={refFile} />
          {preview && (
            <>
              <img src={preview} alt="" />
            </>
          )}
          {showBtnSave && <button onClick={uploadImage}>save</button>}
        </div>

        <div className="business-admin-products">
          <Categories idBusiness={idBusiness} />
        </div>
        
      </div>
      <div className="business-display"></div>
    </div>
*/
