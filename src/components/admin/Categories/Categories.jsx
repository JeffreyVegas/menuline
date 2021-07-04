import React, { useEffect, useState } from 'react';
import {
  getCollection,
  getCollectionByParameter,
  newCollection,
} from '../../../firebase/funciones';
import Categorie from '../Categorie';

const Categories = ({ idBusiness }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCollectionByParameter('categorie', { idBusiness }, setCategories);
  }, []);

  const createNewCategorie = () => {
    newCollection('categorie', {
      name: 'nameDefault',
      date: new Date(),
      idBusiness,
    });
  };

  return (
    <div className="categories">
      <h3>Categories --</h3>
      <button onClick={createNewCategorie}>new Categori</button>
      <div className="categories-content">
        {categories.map((ctg) => (
          <Categorie key={ctg.id} categorie={ctg} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
