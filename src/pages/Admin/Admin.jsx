import React, { useState, useEffect } from 'react';
import { getCollectionByIdUser } from '../../firebase/funciones';
import AddBusiness from '../../components/admin/AddBusiness';
import Business from '../../components/admin/Business';
import { useStore } from 'react-redux';

const Admin = () => {
  const [showInput, setShowInput] = useState(false);
  const [BusinessCollection, setBusinessCollection] = useState([]);
  const { uid } = useStore().getState().auth;
  console.log('xoIxy6Nc60YZ61QClAtvjnAQZkm2');

  useEffect(() => {
    getCollectionByIdUser('business', uid, setBusinessCollection);
  }, []);

  const handleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div className="container">
      <h3>Crear Tus Menus</h3>
      <div className="btn-add">
        <button onClick={handleInput} className="waves-effect waves-light btn">
          New Project
          <i className="fas fa-plus left"></i>
        </button>
      </div>
      <ul className="collection">
        {BusinessCollection.map((item) => (
          <Business project={item} key={item.id} />
        ))}
      </ul>
      {showInput && <AddBusiness setShowInput={setShowInput} />}
    </div>
  );
};

export default Admin;
