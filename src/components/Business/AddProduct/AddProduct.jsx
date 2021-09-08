import React, { useState } from 'react';
import { updateDato } from '../../../firebase/funciones';
import FormProduct from '../FormProduct';
import './AddProduct.css';

const AddProduct = ({ addProduct }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      {showForm ? (
        <FormProduct setShowForm={setShowForm} addProduct={addProduct} />
      ) : (
        <li className="addproduct-btn" onClick={() => setShowForm(true)}>
          add new Product
        </li>
      )}
    </>
  );
};

export default AddProduct;

/* 
{showForm ? (
        <li className="product">
          <div className="row product-form">
            <input type="text" className="col s8" placeholder="Name product" />
            <input
              type="number"
              className="col s3 offset-s1"
              placeholder="price"
            />
            <textarea
              className="col s12"
              placeholder="description"
              cols="30"
              rows="10"
            ></textarea>
            <div className="col s12 product-btns">
              <button className="z-depth-1">save</button>
              <i class="fas fa-times" onClick={() => setShowForm(false)}></i>
            </div>
          </div>
        </li>
      ) : (
        <li className="product-select">
          name
          <div className="">
            <i className="fas fa-pen" onClick={() => setShowForm(true)}></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </li>
      )}
    </>
    ///
       {showForm ? (
        <form onSubmit={formik.handleSubmit}>
          <input type="text" onChange={formik.handleChange} name="name" />
          <input type="number" onChange={formik.handleChange} name="price" />
          <input
            type="text"
            onChange={formik.handleChange}
            name="description"
          />
          <div className="addproduct-btns">
            <button type="submit">add</button>
            <button onClick={() => setShowForm(false)}>x</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>add a product</button>
      )}
*/
