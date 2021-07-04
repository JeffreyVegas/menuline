import React, { useState } from 'react';
import { updateDato } from '../../../firebase/funciones';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddProduct = ({ addProduct }) => {
  const [showForm, setShowForm] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      price: Yup.number().required().positive().integer(),
      description: Yup.string().required(),
    }),
    onSubmit: (values) => {
      try {
        addProduct(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
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
    </>
  );
};

export default AddProduct;
