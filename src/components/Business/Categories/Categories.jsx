import React, { useEffect, useState } from 'react';
import {
  getCollectionByParameter,
  newCollection,
} from '../../../firebase/funciones';
import Categorie from '../Categorie';
import './Categories.css';

const Categories = ({ idBusiness }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCollectionByParameter('categorie', { idBusiness }, setCategories);
  }, [idBusiness]);

  const createNewCategorie = () => {
    newCollection('categorie', {
      name: 'nameDefault',
      date: new Date(),
      idBusiness,
    });
  };

  return (
    <div className="categories">
      <div className="categorie-head">
        <p className="m-cero">Categories:</p>
        <a
          className="waves-effect waves-light btn-small"
          onClick={createNewCategorie}
        >
          <i className="fas fa-plus left"></i>new categorie
        </a>
      </div>
      <ul className="collection">
        {categories.map((ctg) => (
          <Categorie key={ctg.id} categorie={ctg} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
