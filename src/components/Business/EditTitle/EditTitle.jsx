import React, { useState } from 'react';
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './EditTitle.css';

const EditTitle = ({ text, editName, setShowModal }) => {
  const formik = useFormik({
    initialValues: {
      title: text,
    },
    validationSchema: yup.object({
      title: yup.string().required(),
    }),
    onSubmit: (values) => {
      editName(values.title);
      setShowModal(false);
    },
  });

  return (
    <form className="edit-text" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
        autoFocus
      />
      <i className="fas fa-times blue-text"></i>
    </form>
  );
};

export default EditTitle;
