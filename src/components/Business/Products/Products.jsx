import React, { useEffect, useState } from 'react';
import AddProduct from '../AddProduct';
import { updateDato } from '../../../firebase/funciones';
import Product from './Product';
import './Products.css';

const Products = ({ categorie }) => {
  const [listProduct, setListProduct] = useState([]);
  useEffect(() => {
    categorie.products && setListProduct(categorie.products);
  }, []);

  const addProduct = (product) => {
    const products = listProduct;
    products.push(product);
    try {
      updateDato('categorie', categorie.id, { products });
    } catch (error) {
      console.log(error);
    }
  };
  const updateProduct = (product, index) => {
    const products = listProduct;
    products[index] = product;
    try {
      updateDato('categorie', categorie.id, { products });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = (id) => {
    const products = listProduct;
    products.splice(id, 1);
    try {
      updateDato('categorie', categorie.id, { products });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul className="products">
      {listProduct.map((p, index) => (
        <Product
          product={p}
          key={index}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
          id={index}
        />
      ))}
      <AddProduct addProduct={addProduct} />
    </ul>
  );
};

export default Products;
