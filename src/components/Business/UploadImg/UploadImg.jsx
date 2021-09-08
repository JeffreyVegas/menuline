import React, { useState, useRef } from 'react';
import Preloader from '../../common/Preloader';
import './UploadImg.css';

const UploadImg = ({ imgPreview }) => {
  const refFile = useRef(null);
  const [preview, setPreview] = useState('');
  const [showBtnSave, setShowBtnSave] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (imgPreview) {
      setPreview(imgPreview);
    }
    // console.log('url:', window.location);
  }, [imgPreview]);

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

  return (
    <div className="uploadImg">
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

        <input type="file" onChange={handleFile} ref={refFile} />
      </div>
    </div>
  );
};

export default UploadImg;
