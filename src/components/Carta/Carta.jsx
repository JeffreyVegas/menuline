import React, { useEffect, useState } from 'react';
import { getCollectionByParameter } from '../../firebase/funciones';
import './Carta.css';

const Carta = ({ business }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    business.id &&
      getCollectionByParameter(
        'categorie',
        { idBusiness: business.id },
        setCategories
      );
  }, [business]);

  return (
    <div className="carta">
      <div className="carta-logo">
        <img className="responsive-img" src={business.urlLogo} />
      </div>
      <div className="carta-categorias">
        {categories.map((categorie) => (
          <div className="carta-categoria" key={categorie.id}>
            <h5>{categorie.name}</h5>
            {categorie.products?.map((p, index) => (
              <div className="product row" key={index}>
                <div className="col s9">{p.name}</div>
                <div className="col s3 ">S/.{p.price}</div>
                <div className="col s9 ">{p.description}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carta;
/* 
*arreglar la barra de menu

*solucionar lo de la pagina de la carta, la que sw mostrara al publico,
lo que pasa aqui, es que, es muy facil cambiar el Nick. ahora lo que tendria que hacer es que el nombre del negocio solo se deberia cambiar cada 15 dias, y debe ser unico en toda la aplicacion. comprovante de nombres.

Name
nameIdentificador.
Nombre de pepito/saborea.
Nombre de pedro/saborea.
menuline.com/cartas/elricopiura
menuline.com/cartas/

idBusiness = nick

ahora como genero QR infinitos.

*/
