import React, { useEffect, useState } from 'react';
import QRcode from 'qrcode';
import './CodeQR.css';

var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  quality: 0.3,
  margin: 1,
  scale: 5,
  color: {
    dark: '#010599FF',
    light: '#BDC3C7',
  },
};
const CodeQR = () => {
  const [imgQr, setImgQr] = useState('');
  const generateQr = async () => {
    try {
      const response = await QRcode.toDataURL(
        'https://www.google.com',
        opts
      ).then(setImgQr);
    } catch (error) {}
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s4">
          <div className="card">holi</div>
        </div>
        <div className="col s4">
          <div className="card">
            <h4>Codigo QR</h4>
            <a class="waves-effect waves-light btn" onClick={generateQr}>
              Generar QR
            </a>
            <div className="qr-img">
              {imgQr ? (
                <img src={imgQr} />
              ) : (
                <div className="qr-preview">QR</div>
              )}
              <a class="waves-effect waves-light btn">dowload</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeQR;
