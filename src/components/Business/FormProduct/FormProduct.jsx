import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './FormProduct.css';

const FormProduct = ({
  product,
  addProduct,
  updateProduct,
  id,
  setShowForm,
}) => {
  const formik = useFormik({
    initialValues: {
      name: product?.name || '',
      price: product?.price || '',
      description: product?.description || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required().positive().integer(),
      description: Yup.string().required(),
    }),
    onSubmit: (values) => {
      if (product) {
        updateProduct(values, id);
      } else {
        addProduct(values);
      }
      setShowForm(false);
    },
  });

  return (
    <li className="product">
      <form className="row product-form" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className="col s8"
          placeholder="Name product"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          autoFocus
        />
        <input
          type="number"
          className="col s3 offset-s1"
          placeholder="price"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <textarea
          className="col s12"
          placeholder="description"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          cols="30"
          rows="10"
        ></textarea>
        <div className="col s12 product-btns">
          <button className="z-depth-1" type="submit">
            save
          </button>
          <i className="fas fa-times" onClick={() => setShowForm(false)}></i>
        </div>
      </form>
    </li>
  );
};

export default FormProduct;
