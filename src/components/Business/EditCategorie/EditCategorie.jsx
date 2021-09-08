import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './EditCategorie.css';

const EditCategorie = ({ text, editName, setShowModal }) => {
  const formik = useFormik({
    initialValues: {
      name: text,
    },
    validationSchema: yup.object({
      name: yup.string().required(),
    }),
    onSubmit: (values) => {
      editName(values);
      setShowModal(false);
    },
  });

  return (
    <form className="edit-categorie" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        autoFocus
      />
      <i className="fas fa-times blue-text"></i>
    </form>
  );
};

export default EditCategorie;
