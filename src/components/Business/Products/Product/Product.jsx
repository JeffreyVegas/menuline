import React, { useState } from 'react';
import FormProduct from '../../FormProduct';
import './Product.css';

const Product = ({ product, updateProduct, deleteProduct, id }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <FormProduct
          product={product}
          setShowForm={setShowForm}
          updateProduct={updateProduct}
          id={id}
        />
      ) : (
        <li className="product-select">
          {product.name}
          <div className="">
            <i className="fas fa-pen" onClick={() => setShowForm(true)}></i>
            <i
              className="far fa-trash-alt"
              onClick={() => deleteProduct(id)}
            ></i>
          </div>
        </li>
      )}
    </>
  );
};

export default Product;

/* 
logo || nombre de el negocio img o un h2
categoria  
 producto
*/
