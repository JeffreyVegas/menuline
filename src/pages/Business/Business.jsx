import React, { useEffect, useRef, useState } from 'react';
import { db } from '../../firebase/firebase-config';
import { updateDato, uploadFile } from '../../firebase/funciones';
import { useParams } from 'react-router-dom';
import { v4 as uidv4 } from 'uuid';
import Categories from '../../components/admin/Categories';

const Business = () => {
  const { idBusiness } = useParams();
  const refFile = useRef(null);
  const [business, setBusiness] = useState({});
  const [preview, setPreview] = useState('');
  const [showBtnSave, setShowBtnSave] = useState(false);

  useEffect(async () => {
    await db
      .collection('business')
      .doc(idBusiness)
      .onSnapshot((doc) => {
        setBusiness(doc.data());
      });
  }, []);

  useEffect(() => {
    if (business.logo) {
      setPreview(business.urlLogo);
    }
  }, [business]);

  const editName = () => {
    const newName = prompt(`ACTULIZALOOO`, `${business.name}`);
    newName && updateDato('business', idBusiness, { name: newName });
  };

  const handleFile = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setShowBtnSave(true);
  };

  const uploadImage = async () => {
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
        setShowBtnSave(false);
      } else {
        console.log('como q no');
      }
    } catch (error) {
      console.log(error, 'Error al subir la imagen');
    }
  };

  return (
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
  );
};

export default Business;
