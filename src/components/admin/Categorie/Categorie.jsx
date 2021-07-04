import React, { useState, useEffect } from 'react';
import { updateDato } from '../../../firebase/funciones';
import AddProduct from '../AddProduct';

const Categorie = ({ categorie }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    categorie.products && setProducts(categorie.products);
  }, [categorie]);

  const addProduct = (product) => {
    const ListProduct = products;
    ListProduct.push(product);
    updateDato('categorie', categorie.id, { products: ListProduct });
  };

  return (
    <div>
      {/* 1 caegorie con editar y eliminar
       2 crear los componentes para agregar productos. */}
      <h3>
        {categorie.name}-<span>edit</span>|<span>x</span>
      </h3>
      <div className="categorie-products">
        <div className="list-products">
          {products.map((prd) => (
            <p>{prd.name}</p>
          ))}
        </div>
        <AddProduct addProduct={addProduct} />
      </div>
    </div>
  );
};

export default Categorie;
